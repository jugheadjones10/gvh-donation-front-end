import './App.css';
import PayNow from "./PayNow"
import React from 'react';
import { useFormik } from 'formik';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import AccordionActions from '@material-ui/core/AccordionActions';
// import Button from '@material-ui/core/Button';
// import Divider from '@material-ui/core/Divider';
// import TextField from '@material-ui/core/TextField';
// import Select from '@material-ui/core/Select';
// import FormControl from '@material-ui/core/FormControl';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '60%',
    margin: "auto"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '70%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  accordionDetails: {
    display: 'flex',
    flexDirection: "column",
    alignItems: "center"
  },
  textField: {
    margin: "8px",
    width: "40%"
  }
}));

function App() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      mobilenumber: '',
      project: ''
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={classes.root}>

      <PayNow />

      {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id="panel1a-header"
        >

          <Typography className={classes.heading}>PayNow with UEN</Typography>
          <Typography className={classes.secondaryHeading}>I am an accordion</Typography>

        </AccordionSummary>

        <AccordionDetails className={classes.accordionDetails}>

          <TextField className={classes.textField} id="fullname" label="Full name (as in NRIC)" variant="filled" />
          <TextField className={classes.textField} id="email" label="Email" variant="filled" />
          <TextField className={classes.textField} id="mobilenumber" label="Mobile Number" variant="filled" />
          <FormControl variant="filled" className={classes.textField}>
            <InputLabel id="project">Age</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

        </AccordionDetails>

        <Divider />

        <AccordionActions>
          <Button size="small">Cancel</Button>
          <Button size="small" color="primary">
            Save
          </Button>
        </AccordionActions>

      </Accordion> */}





      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>



      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
