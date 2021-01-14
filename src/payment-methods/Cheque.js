import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import FullName from "../form-components/FullName"
import Email from "../form-components/Email"
import MobileNumber from "../form-components/MobileNumber"
import Project from "../form-components/Project"
import Amount from "../form-components/Amount"
import ChequeNumber from "../form-components/ChequeNumber"

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
    textField: {
        margin: "8px",
        width: "40%"
    }
}));

function Cheque() {
    const classes = useStyles();
    const [refid, setRefid] = useState(null);

    const formik = useFormik({
        initialValues: {
            fullname: '',
            email: '',
            mobilenumber: '',
            project: '',
            type: 'cheque',
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
                .typeError("Invalid donation amount")
                .required('Required'),
            chequenumber: Yup
                .number()
                .typeError("Invalid cheque number")
                .required('Required'),
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

                <Typography className={classes.heading}>Cheque</Typography>
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
                        <ChequeNumber className={classes.textField} formik={formik} />

                        <input type="hidden" id="country" {...formik.getFieldProps('country')} />

                    </form>
                }

                {
                    refid !== null &&

                    <div className={classes.container}>
                        <Typography className={classes.normalText}>
                            Kindly drop the cheque off at any UOB Branch and include this account number <b>(324-310-964-5)</b> on the back of the cheque.
                        </Typography>
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

export default Cheque;
