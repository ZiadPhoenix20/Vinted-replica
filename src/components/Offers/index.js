import React from "react";
import Product from "../Product";
import "./index.css";
// import { useParams } from "react-router-dom";

const Offers = ({ data }) => {
  //   const { id } = useParams;
  //   console.log(id);
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
