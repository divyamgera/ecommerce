import React from "react";
import "../componentStyles/NoProducts.css";

export default function NoProducts({ keyword }) {
  return (
    <>
      <div className="no-products-content">
        <div className="no-products-icon"></div>
        <h3 className="no-products-title">No Product Found</h3>
        <p className="no-products-message">
          {keyword
            ? `We couldn't find any products matching ${keyword}. Try using different keywords or browse our complete catalog.`
            : `No products are currently available. Please check back later.`}
        </p>
      </div>
    </>
  );
}
