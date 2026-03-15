import PageTitle from "../components/PageTitle";

import CheckoutPath from "./CheckoutPath";
import { Link, useNavigate } from "react-router-dom";
import "../CartStyles/Payment.css";
// import api from "api";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import api from "../app/api";

export default function Payment() {
  const orderItem = JSON.parse(sessionStorage.getItem("orderItem"));
  const { user } = useSelector((state) => state.user);
  const { shippingInfo } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const completePayment = async (amount) => {
    try {
      const { data: keyData } = await api.get("/api/v1/getKey");
      console.log(keyData);
      const { key } = keyData;
      const { data: orderData } = await api.post("/api/v1/payment/process", {
        amount,
      });

      const { order } = orderData;
      const options = {
        key,
        amount,
        currency: "INR",
        name: "COZA STORE",
        description: "Ecommerce Website Payment Transaction",
        order_id: order.id,
        // callback_url: "/api/v1/paymentVerification",
        handler: async function (response) {
          const { data } = await api.post("/api/v1/paymentVerification", {
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
          });
          if (data.success) {
            navigate(`/paymentSuccess?reference=${data.reference}`);
          } else {
            alert("Payment Verification Failed");
          }
        },
        prefill: {
          name: user.name,
          email: user.email,
          contact: shippingInfo.phoneNumber,
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new Razorpay(options);
      rzp.open();
    } catch (error) {
      toast.error(error.message, { position: "top-center", autoClose: 3000 });
      console.log(error);
    }
  };

  return (
    <>
      <PageTitle title="Payment Processing" />

      <CheckoutPath activePath={2} />
      <div className="payment-container">
        <Link to="/order/confirm" className="payment-go-back">
          Go Back
        </Link>

        <button
          className="payment-btn"
          onClick={() => completePayment(orderItem.total)}
        >
          Pay ({orderItem.total})/-{" "}
        </button>
      </div>
    </>
  );
}
