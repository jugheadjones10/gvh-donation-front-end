import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import {Container} from "../payment-methods/StyledComponents";

function OnChequeSubmit({ refid }) {
  return (
    <Container>
                        <Typography >
                            Kindly drop the cheque off at any UOB Branch and include this account number <b>(324-310-964-5)</b> on the back of the cheque.
                        </Typography>
    </Container>
  );
}

export default  OnChequeSubmit;
