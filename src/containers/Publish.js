import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const Publish = ({ token }) => {
  console.log(token);
  // console.log(setUser);
  const [file, setFile] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState(0);

  const formData = new FormData();
  formData.append("pricture", file);
  formData.append("title", title);
  formData.append("description", description);
  formData.append("brand", brand);
  formData.append("size", size);
  formData.append("color", color);
  formData.append("condition", condition);
  formData.append("city", city);
  formData.append("price", price);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return token ? (
    <div className="publish-container">
      <h2>Vends ton article</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={(event) => {
            setFile(event.target.files[0]);
          }}
        />
        <span>Titre</span>
        <input
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <br />
        <span>Décris ton article</span>
        <textarea
          type="text"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <br />
        <span>MARQUE</span>
        <input
          type="text"
          value={brand}
          onChange={(event) => {
            setBrand(event.target.value);
          }}
        />
        <br />
        <span>Taille</span>
        <input
          type="text"
          value={size}
          onChange={(event) => {
            setSize(event.target.value);
          }}
        />
        <br />
        <span>Couleur</span>
        <input
          type="text"
          value={color}
          onChange={(event) => {
            setColor(event.target.value);
          }}
        />
        <br />
        <span>Etat</span>
        <input
          type="text"
          value={condition}
          onChange={(event) => {
            setCondition(event.target.value);
          }}
        />
        <br />
        <span>Lieu</span>
        <input
          type="text"
          value={city}
          onChange={(event) => {
            setCity(event.target.value);
          }}
        />
        <br />
        <span>Prix</span>
        <input
          type="text"
          value={price}
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
        <br />
        <input type="submit" value="Ajouter" />
      </form>
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

export default Publish;
