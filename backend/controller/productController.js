import Product from "../models/productModel.js";
import HandleError from "../utils/handleError.js";
import handleAsyncError from "../middleware/handleAsyncError.js";
import APIFunctionality from "../utils/apiFunctionality.js";
import { v2 as cloudinary } from "cloudinary";
// import User from "../models/userModel.js"

// Creating Products

export const createProducts = handleAsyncError(async (req, res, next) => {
  let image = [];
  // if(!req.files || !req.files.image){
  //   return res.status(400).json({
  //     success: false,
  //     message: "Np image uploaded"
  //   })
  // }

  if (Array.isArray(req.files.image)) {
    image = req.files.image;
  } else {
    image.push(req.files.image);
  }

  const imageLinks = [];
  for (let i = 0; i < image.length; i++) {
    const result = await cloudinary.uploader.upload(image[i].tempFilePath, {
      folder: "products",
    });
    imageLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.image = imageLinks;

  req.body.user = req.user.id;

  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
  // console.log(req.body)
});

// ACCESSING ALL PRODUCTS

export const getAllProducts = handleAsyncError(async (req, res, next) => {
  const resultPerPage = 16;
  const apiFeatures = new APIFunctionality(Product.find(), req.query)
    .search()
    .filter();

  //  Getting Filtered query before pagination

  const filteredQuery = apiFeatures.query.clone();

  const productCount = await filteredQuery.countDocuments();

  // console.log(productCount)

  // Calculate totalpages based on filtered count

  const totalPages = Math.ceil(productCount / resultPerPage);
  // console.log(totalPages)

  const page = Number(req.query.page) || 1;
  if (page > totalPages && productCount > 0) {
    return next(new HandleError("This page doesn't exist ", 404));
  }

  // Apply Pagination

  apiFeatures.pagination(resultPerPage);

  const products = await apiFeatures.query;

  if (!products || products.length === 0) {
    return next(new HandleError("No Product Found", 404));
  }

  res.status(200).json({
    success: true,
    products,
    productCount,
    resultPerPage,
    totalPages,
    currentPage: page,
  });
});

// Updating Product

// export const updateProduct = handleAsyncError(async (req, res, next) => {
//   let product = await Product.findById(req.params.id);
//   if (!product) {
//     return next(new HandleError("Product not found", 404));
//   }
//   // console.log(req.params.id);
//   // console.log(product)
//   let images = [];

//   if (Array.isArray(req.files.image)) {
//     images = req.files.image;
//   } else {
//     images.push(req.files.image);
//   }

//   if (images.length > 0) {
//     for (let i = 0; i < product.image.length; i++) {
//       await cloudinary.uploader.destroy(product.image[i].public_id);
//     }

//     // Upload New Images

//     const imageLinks = [];
//     for (let i = 0; i < images.length; i++) {
//       const result = await cloudinary.uploader.upload(images[i].tempFilePath, {
//         folder: "products",
//       });
//       imageLinks.push({
//         public_id: result.public_id,
//         url: result.secure_url,
//       });
//     }

//     req.body.image = imageLinks;
//   }

//   product = await Product.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//     runValidators: true,
//   });

//   res.status(200).json({
//     success: true,
//     product,
//   });
// });

export const updateProduct = handleAsyncError(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return next(new HandleError("Product not found", 404));
  }

  let images = [];

  // ✅ Check if new files are uploaded
  if (req.files && req.files.image) {
    if (Array.isArray(req.files.image)) {
      images = req.files.image;
    } else {
      images.push(req.files.image);
    }
  }

  if (images.length > 0) {
    // 🚀 First delete old images from Cloudinary
    for (let i = 0; i < product.image.length; i++) {
      await cloudinary.uploader.destroy(product.image[i].public_id);
    }

    // 🚀 Upload new images
    const imageLinks = [];
    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.uploader.upload(images[i].tempFilePath, {
        folder: "products",
      });
      imageLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }

    req.body.image = imageLinks; // replace with new images
  } else {
    // 🚀 If no new images uploaded → keep old ones
    req.body.image = product.image;
  }

  // ✅ Update product
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    product,
  });
});


// DELTETING PRODUCT

export const deleteProduct = handleAsyncError(async (req, res, next) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    return next(new HandleError("Product Not Found", 404));
  }

  for (let i = 0; i < product.image.length; i++) {
    await cloudinary.uploader.destroy(product.image[i].public_id);
  }

  res.status(200).json({
    success: true,
    message: "Product Deleted Successfully",
  });
});

// Accessing Single Product

export const getSingleProduct = handleAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new HandleError("Product Not Found", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

//  Creating and Updating Review

export const createReviewForProduct = handleAsyncError(
  async (req, res, next) => {
    const { rating, comment, productId } = req.body;
    const review = {
      user: req.user._id,
      name: req.user.name,
      rating: Number(rating),
      comment,
    };

    const product = await Product.findById(productId);
    // console.log(product)

    if (!product) {
      return next(new HandleError("Product not found ", 400));
    }

    const reviewExists = product.reviews.find(
      (review) => review.user.toString() === req.user.id.toString()
    );

    if (reviewExists) {
      product.reviews.forEach((review) => {
        if (review.user.toString() === req.user.id.toString()) {
          (review.rating = rating), (review.comment = comment);
        }
      });
    } else {
      product.reviews.push(review);
    }
    product.numOfReviews = product.reviews.length;
    let sum = 0;
    product.reviews.forEach((review) => {
      sum += review.rating;
    });

    product.ratings =
      product.reviews.length > 0 ? sum / product.reviews.length : 0;

    await product.save({ validateBeforeSave: false });
    res.status(200).json({
      success: true,
      product,
    });
  }
);

// Getting Reviews

export const getProductReviews = handleAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.query.id);
  if (!product) {
    return next(new HandleError("Product not found ", 400));
  }

  res.status(200).json({
    success: true,
    reviews: product.reviews,
  });
});

//  Deleting Reviews

export const deleteReview = handleAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.query.productId);
  if (!product) {
    return next(new HandleError("Product not found ", 400));
  }

  const reviews = product.reviews.filter(
    (review) => review._id.toString() !== req.query.id.toString()
  );
  // console.log(reviews)

  let sum = 0;
  reviews.forEach((review) => {
    sum += review.rating;
  });

  const ratings = reviews.length > 0 ? sum / reviews.length : 0;
  const numOfReviews = reviews.length;

  await Product.findByIdAndUpdate(
    req.query.productId,
    {
      reviews,
      ratings,
      numOfReviews,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    success: true,
    message: "Review Delete Successfully",
  });
});

// Admin - Getting all products

export const getAdminProducts = handleAsyncError(async (req, res, next) => {
  const products = await Product.find();
  res.status(200).json({
    success: true,
    products,
  });
});
