import express from "express";
import { roleBasedAcess, verifyUserAuth } from "../middleware/userAuth.js";
import {
  allMyOrders,
  createNewOrder,
  deleteOrder,
  getAllOrders,
  getSingleOrder,
  updateOrderStatus,
} from "../controller/orderController.js";

const router = express.Router();

router.route("/new/order").post(verifyUserAuth, createNewOrder);
router.route("/order/:id").get(verifyUserAuth, getSingleOrder);
router
  .route("/admin/order/:id")
  .put(verifyUserAuth, roleBasedAcess("admin"), updateOrderStatus)
  .delete(verifyUserAuth, roleBasedAcess("admin"), deleteOrder);

router
  .route("/admin/orders")
  .get(verifyUserAuth, roleBasedAcess("admin"), getAllOrders);

router.route("/orders/user").get(verifyUserAuth, allMyOrders);

export default router;
