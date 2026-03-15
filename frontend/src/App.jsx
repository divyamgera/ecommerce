import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Features from "./pages/Features";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import Login from "./components/Login";

import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProductDetails from "./pages/ProductDetails";

import Register from "./User/Register";
import Login from "./User/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadUser } from "./features/user/userSlice";
import UserDashboard from "./User/UserDashboard";
import Profile from "./User/Profile";
import ProtectedRoute from "./components/ProtectedRoutes";
import UpdateProfile from "./User/UpdateProfile";
import UpdatePassword from "./User/UpdatePassword";
import ForgotPassword from "./User/ForgotPassword";
import ResetPassword from "./User/ResetPassword";
import Cart from "./Cart/Cart";
import Shipping from "./Cart/Shipping";
import OrderConfirm from "./Cart/OrderConfirm";
import Payment from "./Cart/Payment";
import PaymentSuccess from "./Cart/PaymentSuccess";
import MyOrders from "./Orders/MyOrders";
import OrderDetails from "./Orders/OrderDetails";
import Dashboard from "./Admin/Dashboard";
import ProductsList from "./Admin/ProductList";
import CreateProduct from "./Admin/CreateProduct";
import UpdateProduct from "./Admin/UpdateProduct";
import UsersList from "./Admin/UsersList";
import UpdateRole from "./Admin/UpdateRole";
import OrderList from "./Admin/OrderList";
import UpdateOrder from "./Admin/UpdateOrder";
import ReviewsList from "./Admin/ReviewList";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(loadUser());
    }
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:id" element={<ProductDetails />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/shop/:keyword" element={<Shop />}></Route>

          <Route path="/features" element={<Features />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>

          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/password/forgot" element={<ForgotPassword />}></Route>

          {/* <Route path="/profile" element={<Profile />}></Route> */}

          <Route
            path="/profile"
            element={<ProtectedRoute element={<Profile />} />}
          ></Route>

          <Route
            path="/profile/update"
            element={<ProtectedRoute element={<UpdateProfile />} />}
          ></Route>

          <Route
            path="/password/update"
            element={<ProtectedRoute element={<UpdatePassword />} />}
          ></Route>

          <Route path="/reset/:token" element={<ResetPassword />} />
          <Route path="/cart" element={<Cart />} />

          <Route
            path="/shipping"
            element={<ProtectedRoute element={<Shipping />} />}
          ></Route>

          <Route
            path="/order/confirm"
            element={<ProtectedRoute element={<OrderConfirm />} />}
          ></Route>

          <Route
            path="/process/payment"
            element={<ProtectedRoute element={<Payment />} />}
          ></Route>

          <Route
            path="/paymentSuccess"
            element={<ProtectedRoute element={<PaymentSuccess />} />}
          />

          <Route
            path="/orders/user"
            element={<ProtectedRoute element={<MyOrders />} />}
          />

          <Route
            path="/order/:orderId"
            element={<ProtectedRoute element={<OrderDetails />} />}
          />

          {/* Admin Routes */}

          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute element={<Dashboard />} adminOnly={true} />
            }
          />

          <Route
            path="/admin/products"
            element={
              <ProtectedRoute element={<ProductsList />} adminOnly={true} />
            }
          />

          <Route
            path="/admin/product/create"
            element={
              <ProtectedRoute element={<CreateProduct />} adminOnly={true} />
            }
          />

          <Route
            path="/admin/product/:updateId"
            element={
              <ProtectedRoute element={<UpdateProduct />} adminOnly={true} />
            }
          />

          <Route
            path="/admin/users"
            element={
              <ProtectedRoute element={<UsersList />} adminOnly={true} />
            }
          />

          <Route
            path="/admin/user/:userId"
            element={
              <ProtectedRoute element={<UpdateRole />} adminOnly={true} />
            }
          />

          <Route
            path="/admin/orders"
            element={
              <ProtectedRoute element={<OrderList />} adminOnly={true} />
            }
          />

          <Route
            path="/admin/order/:orderId"
            element={
              <ProtectedRoute element={<UpdateOrder />} adminOnly={true} />
            }
          />

          <Route
            path="/admin/reviews"
            element={
              <ProtectedRoute element={<ReviewsList />} adminOnly={true} />
            }
          />
        </Route>
      </Routes>
      {/* {isAuthenticated && <UserDashboard user={user} />} */}
    </>
  );
}

export default App;
