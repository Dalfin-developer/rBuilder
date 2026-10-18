import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaUserEdit } from 'react-icons/fa';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { TextField } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FaXmark } from "react-icons/fa6";




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  maxHeight:'80vh',
  overflowY:'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Edit() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button style={{color:'#504033'}} className='btn' onClick={handleOpen}><FaUserEdit/>Edit Cv</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='mt-4'
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Resume Details
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
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
                  <MenuItem value={"SoftwareDeveloper"}>Software Developer</MenuItem>
                  <MenuItem value={"QA_tester"}>QA tester</MenuItem>
                  <MenuItem value={"SystemDesigner"}>System designer</MenuItem>                                   
                </Select>
              </FormControl>
            </div>

          </div>
           <div>
            <h1>Contact Details</h1>
            <div className='row p-3'>
              <TextField id="standard-basic-email" label="Email" variant="standard" />
              <TextField id="standard-basic-phno" label="Contact Number" variant="standard" />
              <TextField id="standard-basic-linkedin" label="Linkedin link" variant="standard" />
              <TextField id="standard-basic-github" label="Github Link" variant="standard" />
            </div>

          </div>
          <div className='row p-3'>
            <h1>Educational Details</h1>
            <TextField id="standard-basic-degree" label="Bachelor's Degree" variant="standard" />
            <TextField id="standard-basic-college" label="University/College Name" variant="standard" />
            <TextField id="standard-basic-graduation" label="Year Of Graduation" variant="standard" />
          </div>
          {/* Skills */}
          <div className='mt-3'>
            <h1>Skills</h1>
            <div className='d-flex'>
              <input type="text" placeholder='Add Skill' className='form-control' />
              <button style={{backgroundColor:'#504033'}} className='ms-2 btn text-light'>Add</button>
            </div>
            <h4 className='mt-3'>Added Skills</h4>
            <div className='d-flex justify-content-between flex-wrap'>
              <Button variant='contained'>Skill <FaXmark className='ms-3'/></Button>
            </div>
          </div>
          {/* Summary */}
          <div className='mt-3'>
            <h1>Summary</h1>
            <div className='row p-3'>
              <TextField id='summary' label='Summary' variant='standard'></TextField>
            </div>
          </div>
          {/* Update button */}
          <button className='btn btn-primary mt-3'>Update CV</button>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default Edit
