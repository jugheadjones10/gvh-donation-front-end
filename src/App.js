/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, {useState, useEffect} from "react";

//"Higher level" components that encapsulate functionality that is re-used for each payment type.
import PaymentMethod from "./payment-methods/PaymentMethod.js";
import { FormTextField } from "./form-components/FormComponents.js";
import { useTheme } from "@mui/styles";

//MUI components
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";
import  Container  from '@mui/material/Container';

//Stripe dependencies
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

import * as Yup from "yup";
import Preamble from "./Preamble";

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

function formSubmit(values){
  const api =
    process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_DEV_FORM_SUBMISSION
    : process.env.REACT_APP_PROD_FORM_SUBMISSION

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

function App() {
  // const stripe = useStripe();
  // const elements = useElements();
  const theme = useTheme()

  return (
      <Container maxWidth="md" css={{padding: theme.spacing(3)}}>
        <Preamble />

        <PaymentMethod method="paynow" post={formSubmit}/>
        <PaymentMethod method="qrcode" post={formSubmit}/>
        <PaymentMethod method="banktransfer" post={formSubmit}/>
        <PaymentMethod method="cheque" post={formSubmit}/>
        <PaymentMethod method="monthly" post={formSubmit}/>

      </Container>
  );
}
export default App;
