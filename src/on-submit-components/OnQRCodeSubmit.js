/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import {Container, containerCss} from "../payment-methods/StyledComponents";
import paynowapps from "./paynowapps.png";

import { formComponentsStyles } from "../form-components/FormComponents";
import { useTheme } from "@mui/styles";


function OnQRCodeSubmit({ refid, qrUrl }) {
  const theme = useTheme();
  return (
    <Container>
      <div css={{
        [theme.breakpoints.up("sm")]: {
          width: "40%",
        },
        [theme.breakpoints.down("sm")]: {
          width: "80%",
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
        {/* <Typography variant="h6">Here is your Reference ID :</Typography> */}
        {/* <Typography variant="h3" style={{ marginBottom: "20px" }}> */}
        {/*   {refid} */}
        {/* </Typography> */}

        <Typography variant="body1">
          Using any of the following banking apps, scan the QR code below, then key in your donation amount. In case you are using your phone, take a screenshot of the QR code and upload it within your banking app.
        </Typography>

        <Container css={{marginTop: "50px", marginBottom: "50px"}}>
          <img src={paynowapps} css={{ width: "200px" }} alt=""></img>
          <img src={qrUrl} css={{ width: "200px" }} alt=""></img>
        </Container>

        <Typography variant="body1">
          We have sent you an email containing confirmation of your payment intent. Once we receive your payment, we will send you a second email confirming receipt of your donation.
        </Typography>

      </div>
    </Container>
  );
}

export default OnQRCodeSubmit;
