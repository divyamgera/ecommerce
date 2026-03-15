import React, { useEffect, useState } from "react";
import "../pagesStyles/ProductDetails.css";
import PageTitle from "../components/PageTitle";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  createReview,
  getProductDetails,
  removeError,
  removeSuccess,
} from "../features/products/productSlice";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import { addItemsToCart, removeMessage } from "../features/cart/cartSlice";
import Rating from "../components/Rating";

export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const [userRating, setUserRating] = useState(0);
  const [comment, setComment] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  const handleRatingChange = (newRating) => {
    setUserRating(newRating);
  
  };

  const { loading, error, product, reviewSuccess, reviewLoading } = useSelector(
    (state) => state.product
  );

  const {
    loading: cartLoading,
    error: cartError,
    success,
    message,
    cartItems,
  } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const { id } = useParams();
  useEffect(() => {
    if (id) {
      dispatch(getProductDetails(id));
    }
    return () => {
      dispatch(removeError());
    };
  }, [dispatch, id]);

  useEffect(() => {
    if (error) {
      toast.error(error.message, { position: "top-center", autoClose: 3000 });
      dispatch(removeError());
    }

    if (cartError) {
      toast.error(error.message, { position: "top-center", autoClose: 3000 });
      dispatch(removeError());
    }
  }, [dispatch, error, cartError]);

  useEffect(() => {
    if (success) {
      toast.success(message, { position: "top-center", autoClose: 3000 });
      dispatch(removeMessage());
    }
  }, [dispatch, success, message]);

  const decreaseQuantity = () => {
    if (quantity <= 1) {
      toast.error("Quality can not be less than 1", {
        position: "top-center",
        autoClose: 3000,
      });
      dispatch(removeError());
      return;
    }
    setQuantity((qty) => qty - 1);
  };

  const increaseQuantity = () => {
    if (product.stock <= quantity) {
      toast.error("Cannont exceed available Stock!", {
        position: "top-center",
        autoClose: 3000,
      });
      dispatch(removeError());
      return;
    }
    setQuantity((qty) => qty + 1);
  };

  const addToCart = () => {
    dispatch(addItemsToCart({ id, quantity }));
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!userRating) {
      toast.error("Please Select a rating", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    dispatch(
      createReview({
        rating: userRating,
        comment,
        productId: id,
      })
    );
  };

  useEffect(() => {
    if (reviewSuccess) {
      toast.success("Review Submitted Successfully", {
        position: "top-center",
        autoClose: 3000,
      });
      setUserRating(0);
      setComment("");
      dispatch(removeSuccess());
      dispatch(getProductDetails(id));
    }
  }, [reviewSuccess, id, dispatch]);

  useEffect(() => {
    if (product && product.image && product.image.length > 0) {
      setSelectedImage(product.image[0].url);
    }
  }, [product]);

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  if (error || !product) {
    return (
      <>
        <PageTitle title="Product - Details" />
      </>
    );
  }

  return (
    <>
      <PageTitle title={`${product.name} - Details`} />
      <div className="product-details-container">
        <div className="product-detail-container">
          <div className="product-image-container">
            <img
              src={selectedImage}
              alt={product.name}
              className="product-detail-image"
            />

            {product.image.length > 1 && (
              <div className="product-thumbnails">
                {product.image.map((img, index) => (
                  <img
                    src={img.url}
                    alt={`Thumbnail, ${index + 1}`}
                    className="thumbnail-image"
                    onClick={() => setSelectedImage(img.url)}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="product-info">
            <h2>Product {product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">Price: ${product.price.toFixed(2)}</p>

            <div className="product-rating">
              <Rating value={product.rating} disabled={true} />
              <span className="productCardSpan">
                ({product.numOfReviews}{" "}
                {product.numOfReviews === 1 ? "Review" : "Reviews"} )
              </span>
            </div>

            <div className="stock-status">
              <span className={product.stock > 0 ? "in-stock" : "out-of-stock"}>
                {product.stock > 0
                  ? `In Stock (${product.stock} available)`
                  : "Out Of Stock"}
              </span>
            </div>

            {product.stock > 0 && (
              <>
                <div className="quantity-controls">
                  <span className="quantity-label">Quantity: </span>
                  <button
                    className="quantity-button"
                    onClick={decreaseQuantity}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    className="quantity-value"
                    value={quantity}
                    readOnly
                  />
                  <button
                    className="quantity-button"
                    onClick={increaseQuantity}
                  >
                    +
                  </button>
                </div>
                <button
                  className="add-to-cart-btn"
                  onClick={addToCart}
                  disabled={cartLoading}
                >
                  {cartLoading ? "Adding" : "Add to Cart"}
                </button>
              </>
            )}

            <form className="review-form" onSubmit={handleReviewSubmit}>
              <h3>Write a Review</h3>
              <Rating
                value={0}
                disabled={false}
                onRatingChange={handleRatingChange}
              />

              <textarea
                className="review-input"
                placeholder="Write your review here.."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              ></textarea>

              <button className="submit-review-btn" disabled={reviewLoading}>
                {reviewLoading ? "Submitting..." : "Submit Review"}
              </button>
            </form>
          </div>
        </div>

        <div className="reviews-container">
          <h3>Customer Reviews</h3>
          {product.reviews && product.reviews.length > 0 ? (
            <div className="reviews-section">
              {product.reviews.map((review, index) => (
                <div className="review-item">
                  <div className="review-header">
                    <Rating value={review.rating} disabled={true} />
                  </div>
                  <p className="review-comment">{review.comment}</p>
                  <p className="review-name">{review.name}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-reveiws">
              No reviews yet. Be the first to review this !
            </p>
          )}
        </div>
      </div>
    </>
  );
}
