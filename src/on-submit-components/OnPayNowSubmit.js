import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import {Container} from "../payment-methods/StyledComponents";

function OnPayNowSubmit({ refid }) {
  return (
    <Container>
      <Typography variant="h6">Here is your Reference ID :</Typography>
      <Typography variant="h3" style={{ marginBottom: "20px" }}>
        {refid}
      </Typography>

      <Typography variant="h6">PayNow to this UEN :</Typography>
      <Typography variant="h3" style={{ marginBottom: "20px" }}>
        53382503B
      </Typography>

      <Typography variant="body1">
        Please enter your Reference ID when sending through PayNow so that we
       can identify you.
      </Typography>
    </Container>
  );
}

export default OnPayNowSubmit;
