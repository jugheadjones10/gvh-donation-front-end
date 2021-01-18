import React from 'react';
import Typography from '@material-ui/core/Typography';


function PDPA({ classes }) {
    return (
        <Typography className={classes.pdpaText}>
            By submitting this donation form, you agree that GVH may collect, use, and disclose your personal data, as provided above,
            for the following purposes (a) contact you for volunteering activities; and (b) send you information on other events that GVH believes might be of interest or benefit to you,
            in accordance with the Personal Data Protection Act 2012.
        </Typography>
    );
}

export default PDPA;
