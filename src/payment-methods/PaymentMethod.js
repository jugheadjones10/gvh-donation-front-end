/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  FormTextField,
  FormSelection,
} from "../form-components/FormComponents";
import { Container } from "./StyledComponents";
import { formComponentsStyles } from "../form-components/FormComponents";

//Components displayed on submission complete.
import OnPayNowSubmit from "../on-submit-components/OnPayNowSubmit";
import OnQRCodeSubmit from "../on-submit-components/OnQRCodeSubmit";
import OnBankTransferSubmit from "../on-submit-components/OnBankTransferSubmit";
import OnChequeSubmit from "../on-submit-components/OnChequeSubmit";
import OnMonthlySubmit from "../on-submit-components/OnMonthlySubmit";

import PDPA from "../form-components/PDPA";

import { useTheme } from "@mui/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionActions from "@mui/material/AccordionActions";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";
import HelpIcon from '@mui/icons-material/Help';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

// import HelpIcon from '@mui/icons-material/Help';

import {formikInitialValues, formikValidation, formComponents} from "./fieldConstants"

const test = "http://165.22.241.81:8000/donation-form";

const configs = {
  paynow: {
    title:  "PayNow with UEN",
    fields: ["fullname", "email", "mobilenumber", "project", "amount"],
    response: (renderData) => <OnPayNowSubmit refid={renderData.refid} />
  },
  qrcode: {
    title:"PayLah/PayAnyone with QR Code",
    fields: ["fullname", "email", "mobilenumber", "project", "amount"],
    response: (renderData) => <OnQRCodeSubmit refid={renderData.refid} />
  }, 
  banktransfer: {
    title:"Bank Transfer",
    fields: ["fullname", "email", "mobilenumber", "project", "amount"],
    response: (renderData) => <OnBankTransferSubmit refid={renderData.refid} />
  }, 
  cheque: {
    title:"Cheque",
    fields: ["fullname", "email", "mobilenumber", "project", "amount", "chequenumber"],
    response: (renderData) => <OnChequeSubmit refid={renderData.refid} />
  },
  monthly: {
    title:"Automatic Monthly Donation",
    fields: ["fullname", "email", "mobilenumber", "project", "amount"],
    response: (renderData) => <OnMonthlySubmit refid={renderData.refid} />
  },
  paynowpaintings: {
    title:  "PayNow with UEN",
    fields: ["fullname", "email", "mobilenumber", "amount"],
    response: (renderData) => <OnPayNowSubmit refid={renderData.refid} />
  },
  qrcodepaintings: {
    title:"PayLah/PayAnyone with QR Code",
    fields: ["fullname", "email", "mobilenumber", "amount"],
    response: (renderData) => <OnQRCodeSubmit refid={renderData.refid} />
  } 
}

const containerStyles = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

function PaymentMethod({ method, post}) {
  const [submitted, setSubmitted] = useState(false);
  const [renderData, setRenderData] = useState(null);
  const config = configs[method]
  const theme = useTheme();

  const formik = useFormik({
    initialValues: {...formikInitialValues, type: method},
    validationSchema: Yup.object({
      ...formikValidation.validationObj(config.fields),
    }),
    onSubmit: (values) => {
      post(values)
        .then(renderData => {
          setRenderData(renderData);
          setSubmitted(true);
          formik.setSubmitting(false);
        })
        .catch((err) => {
          alert("My client error: " + err);
        });
    }
  });

  return (
    <Accordion css={{ zIndex: 1 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header">
        <Typography variant="h6">{config.title}</Typography>
        <Typography variant="subtitle1"></Typography>
      </AccordionSummary>
      <Divider />
      <AccordionDetails>
        {submitted === false && (
          <Container as="form" onSubmit={formik.handleSubmit} id={method}>

            {config.fields.map(field => {
              return formComponents(field, formik)
            })}

            <input type="hidden" id="type" {...formik.getFieldProps('type')} />

          </Container>
        )}

        {submitted === true && config.response(renderData)}
      </AccordionDetails>

      {submitted === false && (
        <AccordionActions>
          <Container>
            <Tooltip title="Information from the form will allow us to record the source of the funds accurately and use them for their intended purpose. Your information will not be published publicly without your permission and your identity will be kept confidential." arrow placement="top">
              <Typography variant="body2">
                <IconButton>
                  <HelpIcon />
                </IconButton>
                Why do we need this information?
              </Typography>
            </Tooltip>
            <Button
              css={{...formComponentsStyles(theme), marginTop: "0px", marginBottom: "40px" }}
              variant="contained"
              size="medium"
              color="primary"
              type="submit"
              disabled={formik.isSubmitting}
              form={method}
            >
              Submit
            </Button>
            <PDPA />
          </Container>
        </AccordionActions>
      )}
      <Backdrop
        css={{
          color: "#fff",
          zIndex: 3,
        }}
        open={formik.isSubmitting}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Accordion>
  );
}



export default PaymentMethod;