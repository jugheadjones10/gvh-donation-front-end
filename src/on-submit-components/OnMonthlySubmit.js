import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import {Container} from "../payment-methods/StyledComponents";

function OnMonthlySubmit({ refid }) {
  return (
    <Container>
      <Typography >
        To make an automatic monthly donation, please follow these instructions.
        <br /><br />
        Using your Singapore Internet Banking Account, you can set a "Standing Instruction" to transfer to our UOB account on a monthly basis.
        <br /><br />
        In the transfer setting, please enter the above reference id in the 'Comments (Optional)' section.
        <br /><br />
        For 'Rice for Hope' monthly sponsorship, please set your transfer to 26th of every month.
        <br /><br />
        For other monthly sponsorship, please set your transfer to 15th of every month.
        <br /><br />
        Please refer to these links for instructions how to set up a 'Standing Order'
        <br /><br />
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.dbs.com.sg/personal/support/bank-local-funds-transfer-setup-recurring-funds-transfer.html">
          For DBS/POSB
        </a>
        <br /><br />
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.uob.com.sg/personal/eservices/mobile/recurring-fund-transfer.page">
          For UOB
        </a>
        <br /><br />
        Our Banking Details are:
        <br /><br />
        <b>Bank Name:</b> United Overseas Bank Limited<br />
        <b>Account Name:</b> Global Village for Hope <br />
        <b>Account Number:</b> 324-310-964-5<br />
        <b>Bank Code:</b> 7375<br />
        <b>Branch Code:</b> 012 (Bukit Panjang Branch)
      </Typography>
    </Container>
      
      );
}

export default   OnMonthlySubmit
