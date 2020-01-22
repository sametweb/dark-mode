import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);

  const Homepage = () => {
    return (
      <div>
        <h1>Welcome to Crypto Tracker!</h1>
      </div>
    );
  };
  console.log(coinData);
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={Homepage} />
        <Route
          path="/charts"
          render={renderProps => (
            <Charts {...renderProps} coinData={coinData} />
          )}
        />
      </div>
    </Router>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
