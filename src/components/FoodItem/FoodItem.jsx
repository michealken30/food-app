import React, { useContext, useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const [itemCount, setItemCount] = useState(0);
  const { cartItems, addToCart, setCartItems, removeFromCart, url } =
    useContext(StoreContext);

  const currentCartItem = cartItems ? cartItems[id] : 0; // Add safety check

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={url + "/images/" + image} alt="" className="food-item-img" />
        {!currentCartItem ? ( // Use the safe variable
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
          ></img>
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
            />
            <p>{currentCartItem}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
