import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import FullName from "../form-components/FullName"
import Email from "../form-components/Email"
import MobileNumber from "../form-components/MobileNumber"
import Project from "../form-components/Project"
import Amount from "../form-components/Amount"

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionActions from '@material-ui/core/AccordionActions';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '70%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    largeText: {
        fontSize: theme.typography.pxToRem(30),
    },
    normalText: {
        fontSize: theme.typography.pxToRem(15),
    },
    container: {
        width: "100%",
        display: 'flex',
        flexDirection: "column",
        alignItems: "center"
    },
    textContainer: {
        width: "60%",
        display: 'flex',
        flexDirection: "column",
        alignItems: "left"
    },
    textField: {
        margin: "8px",
        width: "40%"
    }
}));

function BankTransfer() {
    const classes = useStyles();
    const [refid, setRefid] = useState(null);

    const formik = useFormik({
        initialValues: {
            fullname: '',
            email: '',
            mobilenumber: '',
            project: '',
            type: 'bank-transfer',
            amount: '',
            chequenumber: '',
            country: ''
        },
        validationSchema: Yup.object({
            fullname: Yup
                .string()
                .required('Required'),
            email: Yup
                .string()
                .email('Invalid email address')
                .required('Required'),
            mobilenumber: Yup
                .number()
                .typeError("Invalid mobile number")
                .positive("Invalid mobile number")
                .integer("Invalid mobile number")
                .required('Required'),
            project: Yup
                .string()
                .required('Required'),
            type: Yup
                .string(),
            amount: Yup
                .number()
                .typeError("Invalid donation amount"),
            chequenumber: Yup
                .number()
                .typeError("Invalid cheque number"),
            country: Yup
                .string(),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));

            fetch(
                "https://gvh-donation-form.herokuapp.com/donation-form",
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'text/html'
                    },
                    body: JSON.stringify(values, null, 2)
                }
            ).then(res => res.text()
            ).then(res => {
                setRefid(res)
            })
        },
    });

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id="panel1a-header">

                <Typography className={classes.heading}>Bank Transfer</Typography>
                <Typography className={classes.secondaryHeading}>I am an accordion</Typography>

            </AccordionSummary>

            <AccordionDetails>

                {refid === null &&

                    <form onSubmit={formik.handleSubmit} className={classes.container} id="form">
                        <FullName className={classes.textField} formik={formik} />
                        <Email className={classes.textField} formik={formik} />
                        <MobileNumber className={classes.textField} formik={formik} />
                        <Project className={classes.textField} formik={formik} />

                        <input type="hidden" id="type" {...formik.getFieldProps('type')} />

                        <Amount className={classes.textField} formik={formik} />

                        <input type="hidden" id="chequenumber" {...formik.getFieldProps('chequenumber')} />
                        <input type="hidden" id="country" {...formik.getFieldProps('country')} />

                    </form>
                }

                {
                    refid !== null &&

                    <div className={classes.container}>
                        <Typography className={classes.normalText}>Here is your Reference ID :</Typography>
                        <Typography className={classes.largeText} >{refid}</Typography>
                        <Typography className={classes.normalText} style={{ marginBottom: "20px" }}>
                            Please enter your Reference ID when making the transfer.
                        </Typography>

                        <div className={classes.textContainer}>
                            <Typography className={classes.normalText}><b>Bank Name:</b> United Overseas Bank Limited</Typography>
                            <Typography className={classes.normalText}><b>Account Name:</b> Global Village for Hope</Typography>
                            <Typography className={classes.normalText}><b>Account Number:</b> 324-310-964-5</Typography>
                            <Typography className={classes.normalText}><b>Bank Code:</b> 7375</Typography>
                            <Typography className={classes.normalText} style={{ marginBottom: "20px" }}>
                                <b>Branch Code:</b> 012 (Bukit Panjang Branch)
                            </Typography>

                            <Typography className={classes.normalText}><b>Additional Info for Overseas Transfers</b></Typography>
                            <Typography className={classes.normalText}><b>Currency:</b> SGD</Typography>
                            <Typography className={classes.normalText}><b>Country:</b> Singapore </Typography>
                            <Typography className={classes.normalText}><b>Bank Address:</b> UOB Plaza, 80 Raffles Place, Singapore 048624</Typography>
                            <Typography className={classes.normalText}><b>Bank Swift Code:</b> UOVBSGSG</Typography>
                        </div>

                    </div>

                }


            </AccordionDetails>

            {
                refid === null &&
                <AccordionActions className={classes.container}>
                    <Button style={{ marginBottom: "20px" }} variant="contained" size="medium" color="primary" type="submit" form="form">Submit</Button>
                </AccordionActions>
            }

        </Accordion >
    );
}

export default BankTransfer;
