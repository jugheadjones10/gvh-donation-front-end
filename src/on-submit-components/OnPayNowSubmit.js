/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import {Container} from "../payment-methods/StyledComponents";

function OnPayNowSubmit({ refid }) {
  return (
    <Container>
      <Typography variant="h6">Here is your Reference ID :</Typography>
      <Typography variant="h3" css={{ marginBottom: "20px" }}>
        {refid}
      </Typography>

      <Typography variant="h6">Using your online banking app, key in the following UEN:</Typography>
      <Typography variant="h3" css={{ marginBottom: "20px" }}>
        53382503B
      </Typography>

      {/* <Typography variant="body1"> */}
      {/*   Participating banks include Citibank, DBS/POSB, HSBC, Maybank, OCBC, Standard Chartered and UOB. Under the reference number field, please key in the reference number for your intent. See the below screenshot for an example. */}
      {/* </Typography> */}

      {/* <img */}
      {/*   alt="" */}
      {/*   height="auto" */}
      {/*   src="https://0l45m.mjt.lu/tplimg/0l45m/b/1mhzt/0mo.jpeg" */}
      {/*   style="border: none; display: block; outline: none; text-decoration: none; height: auto; width: 60%; font-size: 13px; margin: auto" */}
      {/* /> */}
      <Typography variant="body1">
        We have sent you an email containing confirmation of your payment intent. Once we receive your payment, we will send you a second email confirming receipt of your donation.
      </Typography>
    </Container>
  );
}

export default OnPayNowSubmit;
