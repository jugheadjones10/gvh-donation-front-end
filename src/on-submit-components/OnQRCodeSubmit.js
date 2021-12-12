/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import {Container} from "../payment-methods/StyledComponents";
import QRCodeImage from "./QRCode.jpg";

function OnQRCodeSubmit({ refid }) {
  return (
    <Container>
      <Typography variant="h6">Here is your Reference ID :</Typography>
      <Typography variant="h3" style={{ marginBottom: "20px" }}>
        {refid}
      </Typography>

      <Container>
        <img src={QRCodeImage} css={{ width: "200px" }} alt=""></img>
      </Container>

    <Typography variant="body1">
        Please enter your Reference ID when sending through PayNow so that we
        can identify you.
      </Typography>
    </Container>
  );
}

export default OnQRCodeSubmit;
