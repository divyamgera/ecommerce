import { Link, useNavigate } from "react-router-dom";
import styles from "./BannerCard.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const BannerCard = (props) => {
  const navigate = useNavigate();
  const handleProductGo = () => {
    if (props.item1 == "Men") {
      navigate("/shop?category=men");
    }
    if (props.item1 == "Women") {
      navigate("/shop?category=women");
    }
  };
  return (
    <>
      <div className={styles.secBanner}>
        <div className={styles.mainContent}>
          <div className={styles.bgColor}>
            <img className={styles.Img} src={props.Banner} />
          </div>
          <div className={styles.content}>
            <div className={styles.overview}>
              <a href="#">
                <span className={styles.Item}>{props.item1}</span>
              </a>

              <a href="#">
                <span className={styles.subItem1}>{props.subItem1}</span>
              </a>
            </div>
            <div>
              <Link to={`/shop?category=${props.item1.toLowerCase()}`} className={styles.shopNow} onClick={handleProductGo}>
                {props.shopNow}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



export default BannerCard;
