import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Offers = ({ data }) => {
  //   console.log(data);
  return (
    <div className="Offers">
      <div>
        {data.offers.map((offer, index) => {
          return (
            <Link to={`/offer/${offer._id}`} key={offer._id}>
              <div>{offer.product_name}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Offers;
