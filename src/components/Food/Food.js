import React from "react";
import "./Food.css";
import basket from "../../assets/basket.svg";

const FoodCard = ({ title, description, image, price }) => {
  return (
    <div className="food">
      <div className="food-image">
        <img src={image} alt="food" height={200}></img>
      </div>
      <div className="food-body">
        <div className="food-body-header">
          <div className="food-body-title-header">
            <p className="food-title">{title}</p>
            <p className="food-price">{price}</p>
          </div>
          <p className="food-description">{description}</p>
        </div>

        <div className="food-delivery">
          <p className="food-delivery-title">Order a delivery</p>
          <img
            className="food-delivery-image"
            src={basket}
            alt="add to basket"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
