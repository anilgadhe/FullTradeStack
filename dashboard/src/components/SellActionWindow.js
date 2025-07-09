import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const { closeSellWindow } = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleSellClick = () => {
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
      mode: "SELL",
      username,
    };
    console.log("Submitting order:", orderData);
    axios
      .post(`${process.env.REACT_APP_API_URL}/newOrder`, orderData)
      .then((res) => {
        console.log("Sell order placed successfully:", res.data);
        closeSellWindow();
      })
      .catch((err) => {
        console.error("Error placing sell order:", err);
        alert("Failed to place sell order.");
      });
  };

  return (
    <div className="container" id="sell-window" draggable="true">
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
        <span>Expected return ₹{(stockQuantity * stockPrice).toFixed(2)}</span>
        <div>
          <button type="button" className="btn btn-red" onClick={handleSellClick}>
            Sell
          </button>
          <button type="button" className="btn btn-grey" onClick={closeSellWindow}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
