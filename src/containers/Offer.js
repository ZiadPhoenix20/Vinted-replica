import React from "react";
import Header from "../components/Header";
import Product from "../components/Product";

const Offer = ({ data }) => {
  return (
    <div>
      <Header />
      <Product />
      <div className="product-img">
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Offer;
