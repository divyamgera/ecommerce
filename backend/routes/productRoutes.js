import express from "express";
import {
  createProducts,
  createReviewForProduct,
  deleteProduct,
  deleteReview,
  getAdminProducts,
  getAllProducts,
  getProductReviews,
  getSingleProduct,
  updateProduct,
} from "../controller/productController.js";
import { roleBasedAcess, verifyUserAuth } from "../middleware/userAuth.js";

const router = express.Router();

router.route("/products").get(getAllProducts);
router
  .route("/admin/products")
  .get(verifyUserAuth, roleBasedAcess("admin"), getAdminProducts);

router
  .route("/admin/product/create")
  .post(verifyUserAuth, roleBasedAcess("admin"), createProducts);

router
  .route("/admin/product/:id")
  .put(verifyUserAuth, roleBasedAcess("admin"), updateProduct)
  .delete(verifyUserAuth, roleBasedAcess("admin"), deleteProduct);

router.route("/product/:id").get(getSingleProduct);
router.route("/review").put(verifyUserAuth, createReviewForProduct);
router
  .route("/admin/reviews")
  .get(verifyUserAuth, roleBasedAcess("admin"), getProductReviews)
  .delete(verifyUserAuth, roleBasedAcess("admin"), deleteReview);

// router.route("/product").get(getSingleProduct)
// router.route("/product").post(createProducts)

export default router;
