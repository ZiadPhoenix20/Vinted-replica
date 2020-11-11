import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Product = ({ data }) => {
  const productId = data._id;
  // console.log(productId);
  return (
    <div>
      <p className="user">
        <img src={data.owner.account.avatar.url} alt="avatar" />
        {data.owner.account.username}
      </p>
      <Link to={`/Offer/${productId}`}>
        <div className="Product">
          <img src={data.product_image.url} alt="" />
          <p>{data.product_price} $</p>
          {data.product_details.map((item, index) => {
            return <p key={index}>{item.TAILLE}</p>;
          })}
        </div>
      </Link>
    </div>
  );
};

export default Product;
