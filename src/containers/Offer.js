import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Offer = () => {
  const { id } = useParams();
  //   console.log(id);
  const [offerData, setofferData] = useState();
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        console.log(response.data);
        setofferData(response.data);
        setisLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <p>En cours de chargement</p>
  ) : (
    <div>
      {offerData.product_name}
      {offerData.product_details.map((elem, index) => {
        const keys = Object.keys(elem);
        return (
          <p key={index}>
            {keys[0]} {elem[keys[0]]}
          </p>
        );
      })}
    </div>
  );
};

export default Offer;
