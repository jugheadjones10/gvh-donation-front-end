import React from 'react';
import TextField from '@material-ui/core/TextField';


function Email({ className, formik }) {
    return (
        <TextField
            className={className}
            id="email"
            {...formik.getFieldProps('email')}
            label="Email"
            variant="filled"
            error={formik.touched.email && formik.errors.email ? true : false}
            helperText={formik.touched.email && formik.errors.email ? formik.errors.email : null} />
    );
}

export default Email;
