import React, { useState, useEffect, useContext } from "react";
import VerticalGraph from "./VerticalGraph";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Papa from "papaparse";
import GeneralContext from "./GeneralContext";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const { openSellWindow } = useContext(GeneralContext);

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (!username) return;

    axios
      .get(`${process.env.REACT_APP_API_URL}/allHoldings`, {
        params: { username },
      })
      .then((res) => {
        setAllHoldings(res.data);
      })
      .catch((err) => {
        console.error("Error fetching user holdings:", err);
      });
  }, []);

  const totalInvestment = allHoldings.reduce(
    (acc, stock) => acc + stock.avg * stock.qty,
    0
  );
  const currentValue = allHoldings.reduce(
    (acc, stock) => acc + stock.price * stock.qty,
    0
  );
  const totalPL = currentValue - totalInvestment;
  const totalPLPercent =
    totalInvestment > 0 ? (totalPL / totalInvestment) * 100 : 0;
  const profitClass = totalPL >= 0 ? "profit" : "loss";

  const formatINR = (value) =>
    value.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const exportToCSV = () => {
    const csvData = allHoldings.map((h) => ({
      Instrument: h.name,
      Quantity: h.qty,
      "Avg. Cost": h.avg,
      LTP: h.price,
      "Current Value": (h.qty * h.price).toFixed(2),
      "P&L": ((h.price - h.avg) * h.qty).toFixed(2),
      "Net Chg.": h.net,
      "Day Chg.": h.day,
    }));

    const csv = Papa.unparse(csvData);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "Holdings_Report.csv");
    link.click();
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("FullTradeStack Holdings Report", 14, 20);

    doc.setFontSize(12);
    doc.text(`Total Investment: ${formatINR(totalInvestment)}`, 14, 30);
    doc.text(`Current Value: ${formatINR(currentValue)}`, 14, 36);
    doc.text(
      `P&L: ${formatINR(totalPL)} (${totalPLPercent.toFixed(2)}%)`,
      14,
      42
    );

    const tableColumn = [
      "Instrument",
      "Qty",
      "Avg",
      "LTP",
      "Cur Val",
      "P&L",
      "Net Chg",
      "Day Chg",
    ];
    const tableRows = allHoldings.map((h) => [
      h.name,
      h.qty,
      h.avg.toFixed(2),
      h.price.toFixed(2),
      (h.qty * h.price).toFixed(2),
      ((h.price - h.avg) * h.qty).toFixed(2),
      h.net,
      h.day,
    ]);

    doc.autoTable({
      startY: 50,
      head: [tableColumn],
      body: tableRows,
      theme: "striped",
      styles: { fontSize: 10 },
    });

    const finalY = doc.lastAutoTable.finalY || 60;
    doc.setFontSize(10);
    doc.text(
      `Generated on ${new Date().toLocaleString("en-IN")}`,
      14,
      finalY + 10
    );

    doc.save("Holdings_Report.pdf");
  };

  const labels = allHoldings.map((stock) => stock.name);
  const chartData = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings {allHoldings.length}</h3>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button className="btn btn-blue" onClick={exportToCSV}>
          Download CSV
        </button>
        <button className="btn btn-grey" onClick={exportToPDF}>
          Download PDF
        </button>
      </div>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((holding, index) => {
              const curVal = holding.price * holding.qty;
              const isProfit = curVal - holding.avg * holding.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = holding.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{holding.name}</td>
                  <td>{holding.qty}</td>
                  <td>{holding.avg.toFixed(2)}</td>
                  <td>{holding.price.toFixed(2)}</td>
                  <td>{curVal.toFixed(2)}</td>
                  <td>{(curVal - holding.avg * holding.qty).toFixed(2)}</td>
                  <td className={profClass}>{holding.net}</td>
                  <td className={dayClass}>{holding.day}</td>
                  <td>
                    <button
                      className="btn btn-sell btn-red"
                      onClick={() => openSellWindow(holding.name)}
                    >
                      Sell
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>{formatINR(totalInvestment)}</h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>{formatINR(currentValue)}</h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5 className={profitClass}>
            {formatINR(totalPL)} ({totalPLPercent.toFixed(2)}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>

      <VerticalGraph data={chartData} />
    </>
  );
};

export default Holdings;
