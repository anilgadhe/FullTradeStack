import React from "react";
import { useState ,useEffect } from "react";

// import { positions } from "../data/data"

import axios from "axios";

const Positions = () => {

  let[allPositions , setAllPositions]=useState([]);

  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_API_URL}/allPositions`)
    .then((res)=>{
      setAllPositions(res.data);
    })
  },[])
  return (
    <>
      <h3 className="title">Positions</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
          {allPositions.map((position, index) => {
            let curVal = position.price * position.qty;
            let isProfit = curVal - position.avg * position.qty >= 0.0;
            let profClass = isProfit ? "profit" : "loss";
            const dayClass = position.isLoss ? "loss" : "profit";
            return (
              <tr key={index}>
                <td>{position.product}</td>
                <td>{position.name}</td>
                <td>{position.qty}</td>
                <td>{position.avg.toFixed(2)}</td>
                <td>{position.price.toFixed(2)}</td>
                <td className={profClass}>{(curVal - position.avg * position.qty).toFixed(2)}</td>
                <td className={profClass}>{position.net}</td>
              
              </tr>
            )
          })}


        </table>
      </div>
    </>
  );
};

export default Positions;
