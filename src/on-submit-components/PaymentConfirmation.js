import React from "react";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

function PaymentConfirmation({ reconciled }) {
  return (
    <Card variant="outlined" sx={{ m: 4 }}>
      <CardContent>
        <Typography variant="h6">
          {reconciled
            ? reconciled
            : "Waiting for your payment...this donation intent will expire in 5 minutes"}
        </Typography>

        {!reconciled && (
          <Box display="flex" justifyContent="center" p={4}>
            <CircularProgress color="inherit" />
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

export default PaymentConfirmation;
