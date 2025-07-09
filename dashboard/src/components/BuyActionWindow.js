import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const { closeBuyWindow } = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleBuyClick = () => {
    const username = localStorage.getItem("username");

    if (!username) {
      alert("User not logged in.");
      return;
    }

    const qty = parseInt(stockQuantity);
    const price = parseFloat(stockPrice);

    if (!qty || !price || !uid) {
      alert("Please fill in all fields correctly.");
      return;
    }

    const orderData = {
      name: uid,
      qty,
      price,
      mode: "BUY",
      username,
    };
    console.log("Submitting order:", orderData);
    axios
      .post(`${process.env.REACT_APP_API_URL}/newOrder`, orderData)
      .then((res) => {
        console.log("Buy order placed successfully:", res.data);
        closeBuyWindow();
      })
      .catch((err) => {
        console.error("Error placing buy order:", err);
        alert("Failed to place buy order.");
      });
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹{(stockQuantity * stockPrice).toFixed(2)}</span>
        <div>
          <button type="button" className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </button>
          <button type="button" className="btn btn-grey" onClick={closeBuyWindow}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
