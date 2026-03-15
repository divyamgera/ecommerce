import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Carousel from "react-bootstrap/Carousel";
import Slider1 from "../assets/slide-01.jpg";
import Slider2 from "../assets/slide-02.jpg";
import Slider3 from "../assets/slide-03.jpg";
import SliderDescription from "../components/SliderDescription";
import BannerCard from "../components/BannerCard";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner1 from "../assets/banner-01.jpg";
import Banner2 from "../assets/banner-02.jpg";
import Banner3 from "../assets/banner-03.jpg";
import Product from "../components/Products";
import PageTitle from "../components/PageTitle";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, removeError } from "../features/products/productSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Home = () => {
  const { error, loading, products, productCount } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct({ keyword: "" }));
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error.message, { position: "top-center", autoClose: 3000 });
      dispatch(removeError());
    }
  }, [dispatch, error]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <PageTitle title="COZA STORE-Home" />
          <Carousel
            fade
            interval={5000}
            controls={true}
            indicators={false}
            prevIcon={<AiOutlineLeft size={30} color="black" />}
            nextIcon={<AiOutlineRight size={30} color="black" />}
          >
            <Carousel.Item>
              <img
                className="d-block w-100 contain "
                src={Slider1}
                alt="First slide"
              />

              <SliderDescription
                title="Women Collection 2018"
                heading="NEW SEASON"
                button="Shop Now"
              ></SliderDescription>
            </Carousel.Item>

            <Carousel.Item className="">
              <img
                className="d-block w-100 contain  "
                src={Slider2}
                alt="Second slide"
              />
              <SliderDescription
                title="Men New Season"
                heading="JACKETS &COATS"
                button="Shop Now"
              ></SliderDescription>
            </Carousel.Item>

            <Carousel.Item className=" ">
              <img
                className="d-block w-100 contain  "
                src={Slider3}
                alt="Third slide"
              />
              <SliderDescription
                title="Men Collection 2018"
                heading="NEW ARRIVALS"
                button="Shop Now"
              ></SliderDescription>
            </Carousel.Item>
          </Carousel>

          <div className="container">
            <div className="row ">
              <div className="col-lg-4 ">
                <BannerCard
                  Banner={Banner1}
                  item1="Women"
                  subItem1="Spring 2018"
                  shopNow="Shop Now"
                ></BannerCard>
              </div>
              <div className="col-lg-4 ">
                <BannerCard
                  Banner={Banner2}
                  item1="Men"
                  subItem1="Spring 2018"
                  shopNow="Shop Now"
                ></BannerCard>
              </div>
              <div className="col-lg-4 ">
                <BannerCard
                  Banner={Banner3}
                  item1="Accessories"
                  subItem1="New Trend"
                  shopNow="Shop Now"
                ></BannerCard>
              </div>
            </div>
          </div>

          <h1 className="container">PRODUCT OVERVIEW</h1>

          <Product products={products}></Product>
        </>
      )}
    </>
  );
};

export default Home;
