/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

// import {Container, containerCss} from "../payment-methods/StyledComponents";
import {ResponseContainer} from "../payment-methods/StyledComponents";
import paynowapps from "./paynowapps.png";

import { formComponentsStyles } from "../form-components/FormComponents";
import { useTheme } from "@mui/styles";

import {strings} from  "./stringConstants"
const {pleaseCheckEmail} = strings

function OnQRCodeSubmit({ refid, qrUrl }) {
 const theme = useTheme();
  return (
    <ResponseContainer maxWidth="xs">

        <Typography variant="body1">
          Using any of the following banking apps, scan the QR code below, then key in your donation amount. In case you are using your phone, take a screenshot of the QR code and upload it within your banking app.
        </Typography>

        <img src={paynowapps} width="60%" css={{margin: theme.spacing(3)}} alt=""></img>
        <img src={qrUrl} width="60%" css={{margin: theme.spacing(3)}} alt=""></img>

        <Typography variant="body1">
          {pleaseCheckEmail}
        </Typography>

    </ResponseContainer>
  );
}

export default OnQRCodeSubmit;
