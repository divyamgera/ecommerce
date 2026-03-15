import styles from "../components/Products.module.css";
import Heart from "../assets/icon-heart-01.png";
import { Link, useNavigate } from "react-router-dom";
import Rating from "./Rating";

const ProductRow = ({ product }) => {
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate("/cart");
  };

  return (
    <div className={`col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 ${styles.item}`}>
      <div className={styles.card}>

        {/* IMAGE */}
        <Link to={`/product/${product._id}`} className={styles.imageWrapper}>
          <img
            src={product.image?.[0]?.url}
            alt={product.name}
            className={styles.imG}
          />

          <button className={styles.Qview} onClick={handleAddToCart}>
            Add to Cart
          </button>
        </Link>

        {/* PRODUCT CONTENT */}
        <div className={styles.block}>

          <div className={styles.rating_container}>
            <Rating value={product.ratings} disabled />
          </div>

          <div className={styles.productRow}>
            <Link
              to={`/product/${product._id}`}
              className={styles.text}
            >
              {product.name}
            </Link>

            <img src={Heart} alt="wishlist" className={styles.heart} />
          </div>

          <p className={styles.price}>
            ${product.price.toFixed(2)}
          </p>

        </div>

      </div>
    </div>
  );
};

export default ProductRow;