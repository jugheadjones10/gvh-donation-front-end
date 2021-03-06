import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import FullName from "../form-components/FullName"
import Email from "../form-components/Email"
import MobileNumber from "../form-components/MobileNumber"
import Project from "../form-components/Project"
import Amount from "../form-components/Amount"
import ChequeNumber from "../form-components/ChequeNumber"
import PDPA from "../form-components/PDPA"

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionActions from '@material-ui/core/AccordionActions';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

function Cheque({ classes, formikInitialValues, formikValidation, fetchFromFormServer }) {
    const [refid, setRefid] = useState(null);

    const formik = useFormik({
        initialValues: formikInitialValues,
        validationSchema: Yup.object({
            ...formikValidation,
            amount: Yup
                .number()
                .typeError("Invalid donation amount")
                .required('Required'),
            chequenumber: Yup
                .number()
                .typeError("Invalid cheque number")
                .required('Required'),
            country: Yup
                .string()
        }),
        onSubmit: values => {
            fetchFromFormServer(
                values
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
                <Typography className={classes.secondaryHeading}></Typography>

            </AccordionSummary>
            <Divider />
            <AccordionDetails>

                {refid === null &&

                    <form onSubmit={formik.handleSubmit} className={classes.container} id="chequeform">
                        <FullName className={classes.textField} formik={formik} />
                        <Email className={classes.textField} formik={formik} />
                        <MobileNumber className={classes.textField} formik={formik} />
                        <Project className={classes.textField} formik={formik} />

                        <input type="hidden" id="type" {...formik.getFieldProps('type')} />

                        <Amount className={classes.textField} formik={formik} />
                        <ChequeNumber className={classes.textField} formik={formik} />

                        <input type="hidden" id="country" {...formik.getFieldProps('country')} />

                        <PDPA classes={classes} />
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
                    <Button style={{ marginBottom: "20px" }} variant="contained" size="medium" color="primary" type="submit" form="chequeform">Submit</Button>
                </AccordionActions>
            }

        </Accordion >
    );
}

export default Cheque;
