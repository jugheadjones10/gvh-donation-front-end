import React from 'react';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';


function Project({ className, formik }) {
    return (
        <FormControl
            variant="filled"
            className={className}
            error={formik.touched.project && formik.errors.project ? true : false}>
            <InputLabel id="project">Project</InputLabel>
            <Select
                labelId="project"
                id="project"
                {...formik.getFieldProps('project')}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={"Education"}>Education</MenuItem>
                <MenuItem value={"Rice for Hope"}>Rice for Hope</MenuItem>
                <MenuItem value={"Water Well"}>Water Well</MenuItem>
                <MenuItem value={"School Improvement"}>School Improvement</MenuItem>
                <MenuItem value={"Skills Training Center in Myanmar"}>Skills Training Center in Myanmar</MenuItem>
                <MenuItem value={"Administration and Exploration"}>Administration and Exploration</MenuItem>
                <MenuItem value={"Any project that requires the most help"}>Any project that requires the most help</MenuItem>
            </Select>
            {formik.touched.project && formik.errors.project ? (<FormHelperText>{formik.errors.project}</FormHelperText>) : null}
        </FormControl>

    );
}

export default Project;
