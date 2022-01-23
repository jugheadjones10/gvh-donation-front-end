import React from "react";

import PaymentMethod from "components/PaymentMethod";
import { NarrowBox } from "components/StyledComponents";

import Preamble from "./Preamble";

function App() {
  // const stripe = useStripe();
  // const elements = useElements();

  return (
    <NarrowBox>
      <Preamble />

      <PaymentMethod method="paynow" post={formSubmit} />
      <PaymentMethod method="qrcode" post={formSubmit} />
      <PaymentMethod method="banktransfer" post={formSubmit} />
      <PaymentMethod method="cheque" post={formSubmit} />
      <PaymentMethod method="monthly" post={formSubmit} />
      <PaymentMethod method="overseas" post={formSubmit} />
    </NarrowBox>
  );
}

function getClientSecret(amount) {
  return fetch("http://165.22.241.81:8000/secret", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ amount: amount }),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (responseJson) {
      return responseJson.client_secret;
    })
    .catch((err) => alert("First steP" + err));
}

function formSubmit(values) {
  const api =
    process.env.NODE_ENV === "development"
      ? process.env.REACT_APP_DEV_FORM_SUBMISSION
      : process.env.REACT_APP_PROD_FORM_SUBMISSION;

  return fetch(api, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "text/html",
    },
    body: JSON.stringify(values, null, 2),
  })
    .then((res) => res.text())
    .then((res) => {
      return { refid: res };
    });
}

export default App;
