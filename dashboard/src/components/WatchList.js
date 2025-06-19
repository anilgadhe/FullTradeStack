import React, { useState ,useContext } from "react";

 import BuyActionWindow from "./BuyActionWindow";
 import DoughnoutChart from "./DoughnoutChart";
 import GeneralContext from "./GeneralContext";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  Label,
  LabelSharp,
  MoreHoriz
} from "@mui/icons-material";

import Tooltip from '@mui/material/Tooltip';
import Grow from '@mui/material/Grow';
import { watchlist } from "../data/data";



const WatchList = () => {

  let labels =  watchlist.map((subArray)=> subArray["name"]);
const data ={
  labels,
    datasets: [
    {
      label: 'Stock Price',
      data: watchlist.map((stock) => stock.price),
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
}

//  const data = {
//   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  // datasets: [
  //   {
  //     label: '# of Votes',
  //     data: [12, 19, 3, 5, 2, 3],
  //     backgroundColor: [
  //       'rgba(255, 99, 132, 0.2)',
  //       'rgba(54, 162, 235, 0.2)',
  //       'rgba(255, 206, 86, 0.2)',
  //       'rgba(75, 192, 192, 0.2)',
  //       'rgba(153, 102, 255, 0.2)',
  //       'rgba(255, 159, 64, 0.2)',
  //     ],
  //     borderColor: [
  //       'rgba(255, 99, 132, 1)',
  //       'rgba(54, 162, 235, 1)',
  //       'rgba(255, 206, 86, 1)',
  //       'rgba(75, 192, 192, 1)',
  //       'rgba(153, 102, 255, 1)',
  //       'rgba(255, 159, 64, 1)',
  //     ],
  //     borderWidth: 1,
  //   },
  // ],
// };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>
      <ul className="list">
        {watchlist.map((stock, index) => {
          return (
            <WatchlistItem stock={stock} key={index} />
          )
        })}
      </ul>
      <DoughnoutChart data={data}/>
    </div>
  );
};

export default WatchList;

const WatchlistItem = ({ stock }) => {
  let [showWatchListActions, setShowWatchListActions] = useState(false);

  const handleMouseEnter = function () {
    setShowWatchListActions(true)
  }

  const handleMouseExit = function () {
    setShowWatchListActions(false)
  }
  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
      <div className="item">

        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (<KeyboardArrowDown className="down" />) : (<KeyboardArrowUp className="down" />)}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchListActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {

  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  return (
    <span className="actions">
      <span>
        <Tooltip title="Buy (B)" placement="top" arrow
          TransitionComponent={Grow}>
          <button className="buy" onClick={handleBuyClick}>Buy</button>
        </Tooltip>
      </span>

      <span>
        <Tooltip title="Sell (s)" placement="top" arrow
          TransitionComponent={Grow}>
          <button className="sell" onClick={handleBuyClick} >Sell</button>
        </Tooltip>
      </span>
      <span>
        <Tooltip title="Analytics (A)" placement="top" arrow
          TransitionComponent={Grow}>
          <button className="action">
            <BarChartOutlined className="icon"/>
          </button>
        </Tooltip>
      </span>


      <span>
        <Tooltip title="More " placement="top" arrow
          TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon"/>
          </button>
        </Tooltip>
      </span>

            <span>
        <Tooltip title="Analytics (A)" placement="top" arrow
          TransitionComponent={Grow}>
          <button className="buy">Analytics</button>
        </Tooltip>
      </span>
    </span>
  );
};
