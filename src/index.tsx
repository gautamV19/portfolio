import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/css/styles.css";
import { createTheme, ThemeProvider } from "@mui/material";
import "typeface-cormorant";

const theme = createTheme({
  palette: {
    primary: {
      main: "#D6D6D6", //white
    },
    secondary: {
      main: "#080808", //grey
    },
  },
  typography: {
    fontFamily: "cormorant",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
