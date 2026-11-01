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
import jobRole from '../assets/jobRole.json'
import { toast } from 'react-toastify';
import { updateResumeApi } from '../Service/apiService';
import { jsPDF } from "jspdf";



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

function Edit({resumeDetails, setResumeDetails}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const skillRef = React.useRef()

  const removeSkill=(skill)=>{
    setResumeDetails({...resumeDetails,skills:resumeDetails.skills.filter(item=>item!=skill)})
  }

  const addSkill = (skill)=>{
    if(skill){
        if(resumeDetails?.skills?.map(item=>item.toLowerCase()).includes(skill.toLowerCase()))
        {
          toast.info("Given skill is already exist ,please enter another one ")
        }else{
          setResumeDetails({...resumeDetails,skills:[...resumeDetails?.skills,skill]})
        }
        skillRef.current.value= ''
    }else{
      toast.warning("please enter a skill")
    }
  }
  const handleEditResume = async ()=>{
      // update resume when the update button clicks .
      const{fullname,location,job,phone,email,github,linkedin,degree,college,year,skills,summary} = resumeDetails
      if(fullname&&location&&job&&phone&&email&&github&&linkedin&&degree&&college&&year&&(skills.length>0)&&summary){
        //make api call
        const response = await updateResumeApi(resumeDetails.id,resumeDetails)
        console.log(response);
        if(response.status===200){
          toast.success("Resume updated successfully")
          setTimeout(()=>{
            handleClose()
          },2500)
        }
        
      }
      else{
        //alert
        toast.error("Please fill the form Completely")
      }
    }
    
  
  
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
              <TextField value={resumeDetails?.fullname} onChange={e => { setResumeDetails({...resumeDetails, fullname: e.target.value }) }} id="standard-basic-name" label="Full Name" variant="standard" />
              <TextField value={resumeDetails?.location} onChange={e => { setResumeDetails({...resumeDetails, location: e.target.value }) }} id="standard-basic-loc" label="Location" variant="standard" />
              <FormControl variant='standard' className='mt-3'>
                <InputLabel id="demo-simple-select-label">Choose job title</InputLabel>
                <Select 
                  defaultValue={resumeDetails?.job}
                  onChange={e => { setResumeDetails({...resumeDetails, job: e.target.value }) }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Job"
                >{
                  jobRole.jobRoles.map(job=>(
                  <MenuItem key={job} value={job}>{job}</MenuItem>
                  ))
                }
                  
                </Select>
              </FormControl>
            </div>

          </div>
           <div>
                       <h1>Contact Details</h1>
                       <div className='row p-3'>
                         <TextField value={resumeDetails?.email} onChange={e => { setResumeDetails({...resumeDetails, email: e.target.value }) }} id="standard-basic-email" label="Email" variant="standard" />
                         <TextField value={resumeDetails?.phone} onChange={e => { setResumeDetails({...resumeDetails, phone: e.target.value }) }} id="standard-basic-phno" label="Contact Number" variant="standard" />
                         <TextField value={resumeDetails?.linkedin} onChange={e => { setResumeDetails({...resumeDetails, linkedin: e.target.value }) }} id="standard-basic-linkedin" label="Linkedin link" variant="standard" />
                         <TextField value={resumeDetails?.github} onChange={e => { setResumeDetails({...resumeDetails, github: e.target.value }) }} id="standard-basic-github" label="Github Link" variant="standard" />
                       </div>
           
            </div>
          <div className='row p-3'>
                      <h1>Educational Details</h1>
                      <TextField value={resumeDetails?.degree} onChange={e => { setResumeDetails({...resumeDetails, degree: e.target.value }) }} id="standard-basic-degree" label="Bachelor's Degree" variant="standard" />
                      <TextField value={resumeDetails?.college} onChange={e => { setResumeDetails({...resumeDetails, college: e.target.value }) }} id="standard-basic-college" label="University/College Name" variant="standard" />
                      <TextField value={resumeDetails?.year} onChange={e => { setResumeDetails({...resumeDetails, year: e.target.value }) }} id="standard-basic-graduation" label="Year Of Graduation" variant="standard" />
          </div>
          {/* Skills */}
          <div className='mt-3'>
            <h1>Skills</h1>
            <div className='d-flex'>
              <input ref={skillRef} type="text" placeholder='Add Skill' className='form-control' />
              <button onClick={()=>{addSkill(skillRef.current.value)}} style={{backgroundColor:'#504033'}} className='ms-2 btn text-light'>Add</button>
            </div>
            <h4 className='mt-3'>Added Skills</h4>
            <div className='d-flex  flex-wrap'>
              {
              resumeDetails?.skills?.map(skill=>(
                <Button className='m-2'  onClick={()=>{removeSkill(skill)}} key={skill} variant='contained'>{skill} <FaXmark className='ms-3'/></Button>))
              }
            </div>
          </div>
          {/* Summary */}
          <div className='mt-3'>
            <h1>Summary</h1>
            <div className='row p-3'>
              <TextField value={resumeDetails?.summary} onChange={e => { setResumeDetails({...resumeDetails, summary: e.target.value }) }} id="standard-basic-loc" label="summary" multiline variant="standard" />

            </div>
          </div>
          {/* Update button */}
          <button onClick={handleEditResume} className='btn btn-primary mt-3'>Update CV</button>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default Edit
