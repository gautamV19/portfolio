import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/css/styles.css";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
