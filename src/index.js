import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "fontsource-roboto";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Auction from "./auction/Auction"

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
const stripePromise = loadStripe(
  "pk_test_51JYP6bJ0vgYGBOQWTZGdEkcNXUIeB0Lq0SdSU4dlH9ZnROmzQLiOMUbkZKhckGSVVGH1tRfYEE7IwW3gQ8NsGL1N00PEYZQ9o9"
);

ReactDOM.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <ThemeProvider theme={createTheme({})}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="auction" element={<Auction />} />
          </Routes>
        </BrowserRouter>,
      </ThemeProvider>
    </Elements>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
