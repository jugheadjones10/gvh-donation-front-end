import './App.css';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionActions from '@material-ui/core/AccordionActions';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';


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
    form: {
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

function PayNow() {
    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            fullname: '',
            email: '',
            mobilenumber: '',
            project: ''
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
                .required('Required')
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id="panel1a-header">

                <Typography className={classes.heading}>PayNow with UEN</Typography>
                <Typography className={classes.secondaryHeading}>I am an accordion</Typography>

            </AccordionSummary>

            <AccordionDetails>

                {formik.touched.firstName && formik.errors.firstName ? (
                    <div>{formik.errors.firstName}</div>
                ) : null}

                <form onSubmit={formik.handleSubmit} className={classes.form}>
                    <TextField
                        className={classes.textField}
                        id="fullname"
                        name="fullname"
                        label="Full name (as in NRIC)"
                        variant="filled"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.fullname}
                        error={formik.touched.fullname && formik.errors.fullname ? true : false}
                        helperText={formik.touched.fullname && formik.errors.fullname ? formik.errors.fullname : null} />

                    <TextField
                        className={classes.textField}
                        id="email"
                        name="email"
                        label="Email"
                        variant="filled"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        error={formik.touched.email && formik.errors.email ? true : false}
                        helperText={formik.touched.email && formik.errors.email ? formik.errors.email : null} />

                    <TextField
                        className={classes.textField}
                        id="mobilenumber"
                        name="mobilenumber"
                        label="Mobile Number"
                        variant="filled"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.mobilenumber}
                        error={formik.touched.mobilenumber && formik.errors.mobilenumber ? true : false}
                        helperText={formik.touched.mobilenumber && formik.errors.mobilenumber ? formik.errors.mobilenumber : null} />

                    <FormControl
                        variant="filled"
                        className={classes.textField}
                        error={formik.touched.project && formik.errors.project ? true : false}>
                        <InputLabel id="project">Project</InputLabel>
                        <Select
                            labelId="project"
                            id="project"
                            name="project"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.project}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"AW"}>AW</MenuItem>
                            <MenuItem value={"GWG"}>GWG</MenuItem>
                            <MenuItem value={"BBBB"}>BBBB</MenuItem>
                        </Select>
                        {formik.touched.project && formik.errors.project ? (<FormHelperText>{formik.errors.project}</FormHelperText>) : null}
                    </FormControl>

                </form>


            </AccordionDetails>

            <Divider />

            <AccordionActions>
                <Button size="small">Cancel</Button>
                <Button size="small" color="primary">Save</Button>
            </AccordionActions>

        </Accordion>
    );
}

export default PayNow;
