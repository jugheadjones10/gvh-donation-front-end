/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import {ResponseContainer} from "../payment-methods/StyledComponents";

import { useTheme } from "@mui/styles";
import {strings} from  "./stringConstants"
const {gvhUEN, pleaseCheckEmail} = strings

function OnPayNowSubmit({ refid }) {
  const theme = useTheme()
  return (
    <ResponseContainer maxWidth="xs">
      <Typography variant="h6">Here is your Reference ID :</Typography>
      <Typography variant="h3" mb={3}>
        {refid}
      </Typography>

      <Typography variant="h6">Global Village for Hope UEN:</Typography>
      <Typography variant="h3"  mb={3}>
        {gvhUEN}
      </Typography>

      <Typography variant="body1">
        Input the above UEN in your online banking app to transfer your donation. Under the reference number field, please key in the above reference ID. See the below screenshot for an example. 
    <br/>
    <br/>
        Banks that support PayNow through UEN include <b>Citibank, DBS/POSB, HSBC, Maybank, OCBC, Standard Chartered and UOB</b>.
      </Typography>

      <img
        css={{margin: theme.spacing(3)}}
        alt=""
        height="auto"
        width="60%"
        src={process.env.NODE_ENV === "development" ?
      process.env.REACT_APP_DEV_SERVER + "/uenscreenshot.png" : 
      process.env.REACT_APP_PROD_SERVER + "/uenscreenshot.png"} />

      <Typography variant="body1">
        {pleaseCheckEmail}
      </Typography>
    </ResponseContainer>
  );
}

export default OnPayNowSubmit;
