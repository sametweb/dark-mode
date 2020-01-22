import React, { useState } from "react";
import Chart from "./Chart";

const Charts = ({ coinData }) => {
  const [selected, setSelected] = useState("none");

  return (
    <div className="charts">
      <select value={selected} onChange={e => setSelected(e.target.value)}>
        <option value="none">Select one</option>
        {coinData.map(coin => (
          <option key={coin.id} value={coin.id}>
            {coin.name}
          </option>
        ))}
      </select>
      {coinData
        .filter(coin => (selected !== "none" ? coin.id === selected : coin))
        .map(coin => (
          <div className="chart__container" key={coin.name}>
            <h2 className="coin__title">{coin.name}</h2>
            <h4 className="coin__symbol">{coin.symbol}</h4>
            <div className="coin__logo">
              <img src={coin.image} height="40" alt={coin.name} />
            </div>
            <Chart sparklineData={coin.sparkline_in_7d.price} />
          </div>
        ))}
    </div>
  );
};
export default Charts;
