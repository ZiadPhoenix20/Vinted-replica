import React from "react";
import Product from "../Product";
import "./index.css";

const Offers = ({ data }) => {
  console.log(data);
  return (
    <div className="Offers">
      {data.offers.map((item, index) => {
        return <Product key={index} data={item} />;
      })}
    </div>
  );
};

export default Offers;
