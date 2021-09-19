import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppTap from "./AppTap";
import AppCalc from "./AppCalc";

ReactDOM.render(
  <React.StrictMode>
    <AppTap />
    <AppCalc />
  </React.StrictMode>,
  document.getElementById("root")
);