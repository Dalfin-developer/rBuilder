import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';



const steps = ['Basic Informations', 'Contact Details', 'Educational Details', 'Preview and Submit'];
function ResumeInput() {
  const [activeStep, setActiveStep] = React.useState(0);


  const handleNext = () => {

    setActiveStep((prevActiveStep) => prevActiveStep + 1);

  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const renderFormCount = (stepCount) => {
    switch (stepCount) {
      case 0:
        return (
          <div>
            <h1>Personal Details</h1>
            <div className='row p-4'>
              <TextField id="standard-basic-name" label="Full Name" variant="standard" />
              <TextField id="standard-basic-loc" label="Location" variant="standard" />
              <FormControl variant='standard' className='mt-3'>
                <InputLabel id="demo-simple-select-label">Choose job title</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Job"
                >
                  <MenuItem value={"Job"}>Software Developer</MenuItem>
                  <MenuItem value={"Job"}>QA tester</MenuItem>
                  <MenuItem value={"Job"}>System designer</MenuItem>                                   
                </Select>
              </FormControl>
            </div>

          </div>
        )
        break;
      case 1:
        return (
          <div>
            <h1>Contact Details</h1>
            <div className='row p-3'>
              <TextField id="standard-basic-email" label="Email" variant="standard" />
              <TextField id="standard-basic-phno" label="Contact Number" variant="standard" />
              <TextField id="standard-basic-linkedin" label="Linkedin link" variant="standard" />
              <TextField id="standard-basic-github" label="Github Link" variant="standard" />
            </div>

          </div>
        )
        break;
      case 2:
        return (
          <div className='row p-3'>
            <h1>Educational Details</h1>
            <TextField id="standard-basic-degree" label="Bachelor's Degree" variant="standard" />
            <TextField id="standard-basic-college" label="University/College Name" variant="standard" />
            <TextField id="standard-basic-graduation" label="Year Of Graduation" variant="standard" />
          </div>
        )
        break;
      case 3:
        return (
          <div>
            <p>Our AI will generate skills and summary according to your job role,Click the <b>Generate AI Skills And Summary</b> button to proceed</p>
          </div>
        )
        break;
      default: return null
        break;
    }
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button>
              Finish
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}> Step {activeStep + 1}</Typography>
          <Box>
            {/* render form acording to the action step */}
            {
              renderFormCount(activeStep)
            }
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />


            {activeStep === steps.length - 1 ?
              <button style={{ backgroundColor: "#504033" }} className='btn p-3 text-light'>GENERATE AI SKILLS AND SUMMARY</button> :
              <Button onClick={handleNext}>NEXT</Button>}

          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default ResumeInput;
