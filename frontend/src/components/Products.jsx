import styles from "../components/Products.module.css";
import ProductRow from "./ProductRow";
import NoProducts from "./NoProducts";
import Pagination from "./Pagination";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const categories = ["men", "women", "shoes", "bags", "watches"];

const Products = ({ products = [], keyword = "", onPageChange, currentPage }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const currentCategory = searchParams.get("category") || "all";

  const handleCategoryClick = (category) => {
    const newSearchParams = new URLSearchParams(location.search);

    if (category === "all") {
      newSearchParams.delete("category");
    } else {
      newSearchParams.set("category", category);
    }

    newSearchParams.delete("page");
    navigate(`?${newSearchParams.toString()}`, { replace: true });
  };

  const filteredProducts = products.filter((product) => {
    const matchCategory =
      currentCategory === "all" || product.category === currentCategory;

    const matchSearch =
      searchTerm === "" ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <section className="py-4">
      <div className="container">

        {/* CATEGORY BAR */}
        <div className={`row ${styles["p-b-52"]}`}>
          <div className="col-12 d-flex justify-content-between flex-wrap">

            <div className={`d-flex flex-wrap ${styles.productBar}`}>

              <button
                className={currentCategory === "all" ? styles.activeBtn : ""}
                onClick={() => handleCategoryClick("all")}
              >
                All Products
              </button>

              {categories.map((category) => (
                <button
                  key={category}
                  className={
                    currentCategory === category ? styles.activeBtn : ""
                  }
                  onClick={() => handleCategoryClick(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}

            </div>
          </div>
        </div>

        {/* PRODUCT GRID */}
        {filteredProducts.length > 0 ? (
          <div className="row">

            {filteredProducts.map((product) => (
              <ProductRow key={product._id} product={product} />
            ))}

          </div>
        ) : (
          <NoProducts keyword={keyword || searchTerm} />
        )}

        {/* PAGINATION */}
        {filteredProducts.length > 0 && (
          <Pagination
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        )}

      </div>
    </section>
  );
};

export default Products;