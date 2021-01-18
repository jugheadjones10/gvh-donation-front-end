import './App.css';
import PayNow from "./payment-methods/PayNow"
import CreditCard from "./payment-methods/CreditCard"
import BankTransfer from "./payment-methods/BankTransfer"
import Cheque from "./payment-methods/Cheque"
import Monthly from "./payment-methods/Monthly"
import QRCode from "./payment-methods/QRCode"

import React from 'react';
import * as Yup from 'yup';

import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '60%',
    margin: "auto"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '70%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  largeText: {
    fontSize: theme.typography.pxToRem(30),
  },
  normalText: {
    fontSize: theme.typography.pxToRem(15),
  },
  pdpaText: {
    fontSize: theme.typography.pxToRem(10),
    [theme.breakpoints.up("sm")]: {
      width: "40%"
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%"
    },
  },
  container: {
    width: "100%",
    display: 'flex',
    flexDirection: "column",
    alignItems: "center"
  },
  textContainer: {
    display: 'flex',
    flexDirection: "column",
    alignItems: "left",
    [theme.breakpoints.up("md")]: {
      width: "40%"
    },
    [theme.breakpoints.down("md")]: {
      width: "90%"
    },
  },
  textField: {
    margin: "8px",
    [theme.breakpoints.up("sm")]: {
      width: "40%"
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%"
    },
  },
}));

const formikInitialValues = {
  fullname: '',
  email: '',
  mobilenumber: '',
  project: '',
  amount: '',
  chequenumber: '',
  country: ''
}

const formikValidation = {
  fullname: Yup
    .string()
    .required('Required'),
  email: Yup
    .string()
    .email('Invalid email address')
    .required('Required'),
  mobilenumber: Yup
    .number()
    .typeError("Invalid mobile number")
    .positive("Invalid mobile number")
    .integer("Invalid mobile number")
    .required('Required'),
  project: Yup
    .string()
    .required('Required'),
  type: Yup
    .string(),
}


function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <PayNow
        classes={classes}
        formikInitialValues={{
          ...formikInitialValues,
          type: "paynow"
        }}
        formikValidation={formikValidation}
      />

      <QRCode
        classes={classes}
        formikInitialValues={{
          ...formikInitialValues,
          type: "qrcode"
        }}
        formikValidation={formikValidation} />

      <CreditCard classes={classes} />

      <BankTransfer
        classes={classes}
        formikInitialValues={{
          ...formikInitialValues,
          type: "banktransfer"
        }}
        formikValidation={formikValidation} />

      <Cheque
        classes={classes}
        formikInitialValues={{
          ...formikInitialValues,
          type: "cheque"
        }}
        formikValidation={formikValidation} />

      <Monthly classes={classes} />

    </div>
  );
}

export default App;
