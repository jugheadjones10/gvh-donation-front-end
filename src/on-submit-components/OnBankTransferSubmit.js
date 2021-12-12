import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import {Container} from "../payment-methods/StyledComponents";

function OnBankTransferSubmit({ refid }) {
  return (
    <Container>
      <Typography variant="h6">Here is your Reference ID :</Typography>
      <Typography variant="h3">{refid}</Typography>
      <Typography variant="body1" style={{ marginBottom: "20px" }}>
        Please enter your Reference ID when making the transfer.
      </Typography>

      <Container>
        <Typography ><b>Bank Name:</b> United Overseas Bank Limited</Typography>
        <Typography ><b>Account Name:</b> Global Village for Hope</Typography>
        <Typography ><b>Account Number:</b> 324-310-964-5</Typography>
        <Typography ><b>Bank Code:</b> 7375</Typography>
        <Typography >
          <b>Branch Code:</b> 012 (Bukit Panjang Branch)
        </Typography>

        <Typography variant="h6"><b>Additional Info for Overseas Transfers</b></Typography>
        <Typography><b>Currency:</b> SGD</Typography>
        <Typography><b>Country:</b> Singapore </Typography>
        <Typography><b>Bank Address:</b> UOB Plaza, 80 Raffles Place, Singapore 048624</Typography>
        <Typography><b>Bank Swift Code:</b> UOVBSGSG</Typography>
      </Container>
    </Container>
  );
}

export default OnBankTransferSubmit;
