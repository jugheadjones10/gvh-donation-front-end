import './App.css';
import PayNow from "./payment-methods/PayNow"
import CreditCard from "./payment-methods/CreditCard"
import BankTransfer from "./payment-methods/BankTransfer"
import Cheque from "./payment-methods/Cheque"
import Monthly from "./payment-methods/Monthly"
import QRCode from "./payment-methods/QRCode"

import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

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
  accordionDetails: {
    display: 'flex',
    flexDirection: "column",
    alignItems: "center"
  },
  textField: {
    margin: "8px",
    width: "40%"
  }
}));


function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <PayNow />
      <QRCode />
      <CreditCard />
      <BankTransfer />
      <Cheque />
      <Monthly />

    </div>
  );
}

export default App;
