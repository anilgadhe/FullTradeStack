import React, { useEffect, useState } from "react";
import axios from "axios";


const Summary = () => {
  const [holdings, setHoldings] = useState([]);
  const [investment, setInvestment] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);

  const username = localStorage.getItem("username") || "User";

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/allHoldings`)
      .then((res) => {
        const data = res.data;
        setHoldings(data);

        const totalInvestment = data.reduce((acc, stock) => acc + stock.avg * stock.qty, 0);
        const totalCurrentValue = data.reduce((acc, stock) => acc + stock.price * stock.qty, 0);

        setInvestment(totalInvestment);
        setCurrentValue(totalCurrentValue);
      })
      .catch((err) => {
        console.error("Error fetching holdings:", err);
      });
  }, []);

  const pnl = currentValue - investment;
  const pnlPercentage = investment !== 0 ? ((pnl / investment) * 100).toFixed(2) : "0.00";
  const isProfit = pnl >= 0;

  return (
    <>
      <div className="username">
        <h6>Hi, {username}!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>₹3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>Margins used <span>0</span></p>
            <p>Opening balance <span>₹3.74k</span></p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({holdings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={isProfit ? "profit" : "loss"}>
              ₹{pnl.toFixed(2)} <small>{isProfit ? "+" : ""}{pnlPercentage}%</small>
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>Current Value <span>₹{currentValue.toFixed(2)}</span></p>
            <p>Investment <span>₹{investment.toFixed(2)}</span></p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
