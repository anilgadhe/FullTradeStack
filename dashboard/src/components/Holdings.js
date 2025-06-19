import React, { useState ,useEffect } from "react";
import VerticalGraph from "./VerticalGraph"
// import {holdings} from "../data/data"
import axios from "axios";

const Holdings = () => {
 
  let[allHoldings , setAllHoldings]=useState([]);

  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_API_URL}/allHoldings`).then((res)=>{
      console.log(res.data); 
      setAllHoldings(res.data);
    })
  },[])

  


// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
 
let labels = allHoldings.map((subArray)=> subArray["name"]);


  const data = {
  labels,
  datasets: [
    {
      label: 'Stock Price',
      data: allHoldings.map((stock) => stock.price),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ]
}

//  const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };
 
  return (
    <>
      <h3 className="title">Holdings {allHoldings.length}</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
      {allHoldings.map((holding , index)=>{
        let curVal = holding.price * holding.qty;
        let isProfit = curVal - holding.avg * holding.qty >= 0.0;
        let profClass =isProfit ?"profit":"loss";
        const dayClass = holding.isLoss?"loss":"profit";

        return (
        <tr key={index} >
        <td>{holding.name}</td>
        <td>{holding.qty}</td>
        <td>{holding.avg.toFixed(2)}</td>
        <td>{holding.price.toFixed(2)}</td>       
        <td>{curVal}</td>
        <td >{(curVal - holding.avg * holding.qty).toFixed(2)}</td>
        <td className={profClass}>{holding.net}</td>
        <td className={dayClass}>{holding.day}</td>
        

      </tr>
        )
      })}
       
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>

      <VerticalGraph data={data}/>
    </>
  );
};

export default Holdings;
