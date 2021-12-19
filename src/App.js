/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, {useState, useEffect} from "react";

//Components displayed on submission complete.
// import OnPayNowSubmit from "./payment-methods/OnPayNowSubmit";
// import OnQRCodeSubmit from "./payment-methods/OnQRCodeSubmit";

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

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

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
  const stripe = useStripe();
  const elements = useElements();
  const theme = useTheme()



  return (
    //<div
    // css={{
    //   width: "60%",
    //   margin: "auto",
    // }}
    //>
      <Container maxWidth="md" css={{padding: theme.spacing(3)}}>
        <Preamble />

        <PaymentMethod method="paynow" post={formSubmit}/>
        <PaymentMethod method="qrcode" post={formSubmit}/>
        <PaymentMethod method="banktransfer" post={formSubmit}/>
        <PaymentMethod method="cheque" post={formSubmit}/>
        <PaymentMethod method="monthly" post={formSubmit}/>

        {/* <PaymentMethod */}
        {/*   title="PayNow with UEN" */}
        {/*   formId="paynow" */}
        {/*   customValidation={{ */}
        {/*     amount: Yup.number() */}
        {/*     .typeError("Invalid donation amount") */}
        {/*     .positive("Invalid mobile number") */}
        {/*     .required("Required"), */}
        {/*   }} */}
        {/*   renderFormFields={(formik) => ( */}
        {/*     <FormTextField */}
        {/*       id={"amount"} */}
        {/*       label={"Donation Amount"} */}
        {/*       formik={formik} */}
        {/*     /> */}
        {/*   )} */}
        {/*   onSubmit={(values) => { */}
        {/*     return fetchFromFormServer(values) */}
        {/*       .then((res) => res.text()) */}
        {/*       .then((res) => { */}
        {/*         return { refid: res }; */}
        {/*       }); */}
        {/*   }} */}
        {/*   renderOnSubmit={(renderData) => { */}
        {/*     return <OnPayNowSubmit refid={renderData.refid} />; */}
        {/*   }} */}
        {/*   isLoading={setLoading} */}
        {/* /> */}
        {/* <PaymentMethod */}
        {/*   title="PayLah/PayAnyone with QR Code" */}
        {/*   formId="qrcode" */}
        {/*   customValidation={{ */}
        {/*     amount: Yup.number() */}
        {/*     .typeError("Invalid donation amount") */}
        {/*     .positive("Invalid mobile number") */}
        {/*     .required("Required"), */}
        {/*   }} */}
        {/*   renderFormFields={(formik) => ( */}
        {/*     <FormTextField */}
        {/*       id={"amount"} */}
        {/*       label={"Donation Amount"} */}
        {/*       formik={formik} */}
        {/*     /> */}
        {/*   )} */}
        {/*   onSubmit={(values) => { */}
        {/*     return fetchFromFormServer(values) */}
        {/*       .then((res) => res.text()) */}
        {/*       .then((res) => { */}
        {/*         return { refid: res }; */}
        {/*       }); */}
        {/*   }} */}
        {/*   renderOnSubmit={(renderData) => { */}
        {/*     return <OnQRCodeSubmit refid={renderData.refid} />; */}
        {/*   }} */}
        {/*   isLoading={setLoading} */}
        {/* /> */}
        {/* <PaymentMethod */}
        {/*   title="Credit Card Payment" */}
        {/*   formId="creditcard" */}
        {/*   customValidation={{ */}
        {/*     amount: Yup.number() */}
        {/*     .typeError("Invalid donation amount") */}
        {/*     .positive("Invalid mobile number") */}
        {/*     .required("Required"), */}
        {/*   }} */}
        {/*   renderFormFields={(formik) => ( */}
        {/*     <> */}
        {/*       <FormTextField */}
        {/*         id={"amount"} */}
        {/*         label={"Donation Amount"} */}
        {/*         formik={formik} */}
        {/*       /> */}
        {/*       <CardElement /> */}
        {/*     </> */}
        {/*   )} */}
        {/*   onSubmit={async (values) => { */}
        {/*     if (!stripe || !elements) { */}
        {/*       return Promise.reject("Error. Please try again."); */}
        {/*     } */}

        {/*     const clientSecret = await getClientSecret(values.amount); */}
        {/*     const result = await stripe.confirmCardPayment(clientSecret, { */}
        {/*       payment_method: { */}
        {/*         card: elements.getElement(CardElement), */}
        {/*         billing_details: { */}
        {/*           name: "Jenny Rosen", */}
        {/*         }, */}
        {/*       }, */}
        {/*     }); */}
        {/*     if (result.error) { */}
        {/*       // Show error to your customer (e.g., insufficient funds) */}
        {/*       alert("Strip processing error: " + result.error.message); */}
        {/*     } else { */}
        {/*       // The payment has been processed! */}
        {/*       if (result.paymentIntent.status === "succeeded") { */}
        {/*         // Show a success message to your customer */}
        {/*         // There's a risk of the customer closing the window before callback */}
        {/*         // execution. Set up a webhook or plugin to listen for the */}
        {/*         // payment_intent.succeeded event that handles any business critical */}
        {/*         // post-payment actions. */}
        {/*         return Promise.resolve({ succeeded: true }); */}
        {/*       } */}
        {/*     } */}
        {/*   }} */}
        {/*   renderOnSubmit={(renderData) => { */}
        {/*     return <div>renderData.succeeded</div>; */}
        {/*   }} */}
        {/*   isLoading={setLoading} */}
        {/* /> */}


        {/* <PayNow */}
        {/*   classes={classes} */}
        {/*   formikInitialValues={{ */}
        {/*     ...formikInitialValues, */}
        {/*     type: "paynow" */}
        {/*   }} */}
        {/*   formikValidation={formikValidation} */}
        {/*   fetchFromFormServer={fetchFromFormServer} */}
        {/* /> */}

        {/* <QRCode */}
        {/*   classes={classes} */}
        {/*   formikInitialValues={{ */}
        {/*     ...formikInitialValues, */}
        {/*     type: "qrcode" */}
        {/*   }} */}
        {/*   formikValidation={formikValidation} */}
        {/*   fetchFromFormServer={fetchFromFormServer} */}
        {/* /> */}

        {/* <CreditCard classes={classes} /> */}

        {/* <BankTransfer */}
        {/*   classes={classes} */}
        {/*   formikInitialValues={{ */}
        {/*     ...formikInitialValues, */}
        {/*     type: "banktransfer" */}
        {/*   }} */}
        {/*   formikValidation={formikValidation} */}
        {/*   fetchFromFormServer={fetchFromFormServer} */}
        {/* /> */}

        {/* <Cheque */}
        {/*   classes={classes} */}
        {/*   formikInitialValues={{ */}
        {/*     ...formikInitialValues, */}
        {/*     type: "cheque" */}
        {/*   }} */}
        {/*   formikValidation={formikValidation} */}
        {/*   fetchFromFormServer={fetchFromFormServer} */}
        {/* /> */}

        {/* <Monthly */}
        {/*   classes={classes} */}
        {/*   formikInitialValues={{ */}
        {/*     ...formikInitialValues, */}
        {/*     type: "monthly" */}
        {/*   }} */}
        {/*   formikValidation={formikValidation} */}
        {/*   fetchFromFormServer={fetchFromFormServer} */}
        {/* /> */}

      </Container>
  );
}
export default App;
