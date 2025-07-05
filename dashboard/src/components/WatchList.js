import React, { useState, useContext, useRef } from "react";
import DoughnoutChart from "./DoughnoutChart";
import GeneralContext from "./GeneralContext";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz
} from "@mui/icons-material";

import Tooltip from "@mui/material/Tooltip";
import Grow from "@mui/material/Grow";
import { watchlist } from "../data/data";

const WatchList = () => {
  const chartRef = useRef();

  const labels = watchlist.map((stock) => stock.name);
  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const scrollToChart = () => {
    chartRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts">{watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => (
          <WatchlistItem
            key={index}
            stock={stock}
            scrollToChart={scrollToChart}
          />
        ))}
      </ul>

      <div ref={chartRef}>
        <DoughnoutChart data={data} id="chart" />
      </div>
    </div>
  );
};

export default WatchList;

const WatchlistItem = ({ stock, scrollToChart }) => {
  const [showActions, setShowActions] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="item-info">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showActions && (
        <WatchListActions uid={stock.name} scrollToChart={scrollToChart} />
      )}
    </li>
  );
};

const WatchListActions = ({ uid, scrollToChart }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  return (
    <span className="actions">
      <span>
        <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
          <button className="buy" onClick={handleBuyClick}>
            Buy
          </button>
        </Tooltip>
      </span>

      <span>
        <Tooltip title="Analytics" placement="top" arrow TransitionComponent={Grow}>
          <button className="action" onClick={scrollToChart}>
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
      </span>

      <span>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>

      <span>
        <Tooltip title="Analytics" placement="top" arrow TransitionComponent={Grow}>
          <button className="buy" onClick={scrollToChart}>
            Analytics
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
