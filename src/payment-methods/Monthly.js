import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


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

function Monthly() {
    const classes = useStyles();

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id="panel1a-header">

                <Typography className={classes.heading}>Automatic Monthly Donation</Typography>
                <Typography className={classes.secondaryHeading}>I am an accordion</Typography>

            </AccordionSummary>

            <AccordionDetails>

                <Typography className={classes.normalText}>
                    To make an automatic monthly donation, please follow these instructions.
                    <br /><br />
                    Using your Singapore Internet Banking Account, you can set a "Standing Instruction" to transfer to our UOB account on a monthly basis.
                    <br /><br />
                    For 'Rice for Hope' monthly sponsorship, please set your transfer to 26th of every month. In the transfer setting, please leave in the 'Comments (Optional)' section a message in this format [name][sacks of rice].
                    <br /><br />
                    For example "JohnLim2xRice" which indicates that this transfer is from "John Lim" and it is for "2 sacks of rice".
                    <br /><br />
                    For other monthly sponsorship, please set your transfer to 15th of every month. In the transfer setting, please leave in the 'Comments (Optional)' section a message in this format [name][project name].
                    <br /><br />
                    For example,
                    <br /><br />
                    "JohnLim Bursary"<br />
                    "JohnLim Uniform"<br />
                    "JohnLim Stationery"<br />
                    "JohnLim Water"<br />
                    "JohnLim Solar"<br />
                    "JohnLim General"
                    <br /><br />
                    This will help us to track who made the donation and for which purpose.
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

            </AccordionDetails>

        </Accordion >
    );
}

export default Monthly;
