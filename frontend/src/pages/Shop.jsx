import { useDispatch, useSelector } from "react-redux";
import PageTitle from "../components/PageTitle";
// import ProductRow from "../components/ProductRow";
import Product from "../components/Products";

import { getProduct, removeError } from "../features/products/productSlice";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { useLocation, useNavigate } from "react-router-dom";

const Shop = () => {
  const { loading, error, products, resultsPerPage, productCount } =
    useSelector((state) => state.product);
  const dispatch = useDispatch();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const keyword = searchParams.get(`keyword`);
  const pageFromURL = parseInt(searchParams.get(`page`), 10) || 1;
  const [currentPage, setCurrentPage] = useState(pageFromURL);
  const navigate = useNavigate();

  const hanglePageChange = (page) => {
    if (page !== currentPage) {
      setCurrentPage(page);
      const newSearchParams = new URLSearchParams(location.search);
      if (page === 1) {
        newSearchParams.delete("page");
      } else {
        newSearchParams.set("page", page);
      }
      navigate(`?${newSearchParams.toString()}`);
    }
  };

  useEffect(() => {
    dispatch(getProduct({ keyword, page: currentPage }));
  }, [dispatch, keyword, currentPage]);

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
          <PageTitle title="All Products" />

          <Product
            products={products}
            keyword={keyword}
            onPageChange={hanglePageChange}
            currentPage={currentPage}
          ></Product>
        </>
      )}
    </>
  );
};

export default Shop;
