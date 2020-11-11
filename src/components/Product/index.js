import React from "react";
import "./index.css";

const Product = ({ data }) => {
  console.log(data);
  return (
    <div className="Product">
      {/* <p className="user">
        <img src={console.log(data.owner.account.avatar.url)} alt="avatar" />
        {console.log(data.owner.account.username)}
      </p>
      <img src={data.product_image.url} alt="" />
      <p>{data.product_price} $</p>
      {data.product_details.map((item, index) => {
        return <p key={index}>{item.TAILLE}</p>;
      })} */}
    </div>
  );
};

export default Product;
