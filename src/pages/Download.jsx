import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";
import { getAllDownlaodResumeApi } from '../Service/apiService';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  maxHeight: '80vh',
  overflowY: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Download() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [downloadList, setDownloadList] = useState([])

  const [label, setLabel] = useState([])
  const [value, setValue] = useState([])
  const colorPalette = ['#FFD749', '#FF5B42', '#802C62', '#421454', '#728E6D', '#B26CFF']
  const backgroundColor = label.map((value, index) => colorPalette[index % colorPalette.length])

  const data = {
    labels: label,
    datasets: [
      {
        label: 'Download Count',
        data: value,
        backgroundColor: backgroundColor,
      }
    ]
  }

  useEffect(() => {
    getAllDownloads()
  }, [])


  const getAllDownloads = async () => {
    const result = await getAllDownlaodResumeApi()
    setDownloadList(result.data)
    const output = {}
    result.data.forEach(item => {
      const currentJob = item.jobRole||"unknown"
      console.log(currentJob);
      
      if (currentJob in output) {
        output[currentJob] += 1
      }
      else {
        output[currentJob] = 1
      }
    })
    setLabel(Object.keys(output))
    setValue(Object.values(output))
  }
  return (
    <div className='container my-5'>
      <div className="d-flex justify-content-between align-items-center">
        <h1 className='fs-1'>Download Resume History</h1>
        <button onClick={handleOpen} className='btn p-2 rounded-4' style={{ backgroundColor: '#504033', textDecoration: 'none', fontSize: '20px', color: 'white' }}>View In chart</button>

      </div>
      <p className='mt-3 fs-3 fs-semibold text-primary'>Total Downloaded resumes from our website is : <span className='fw-bolder text-danger'>{downloadList.length}</span> </p>
      <div className="row my-5">
        {/* Duplicate row according to resume count */}
        {
          downloadList?.length > 0 ?
            downloadList.map((resume) => (
              <div className="col-lg-4">
                <div style={{ height: '350px' }} className="rounded shadow p-3">
                  <h6>Review at {resume.timeStamp}</h6>
                  <div className="mt-3 text-center">
                    <Link to={`/resume/${resume?.resumeId}`}>
                      <img className='w-75 h-100' src={resume.resumeImage} alt="resume image" />

                    </Link>
                  </div>
                </div>
              </div>
            ))
            :
            (<div>No Resumes are found</div>)
        }
      </div>
      {/* Modal  */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ backgroundColor: "#504033", width: "100%", padding: "10px", color: "white", textAlign: "center", }}>
            CV Count By The Job Role
          </Typography>
          <div style={{width:"100%", position:"relative"}} className='d-flex justify-content-center align-item-center'>
            <Pie data={data} />
          </div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            This Chart Provide An overview OF The Number Of CV Downloads Associated With Different Jobs On The Website. It Helps Visualize the Demand And Engagement for the CV's accross various carres Categories ,making it easier to identify which job role attracts the highest number of downloads .By comparing the download count accross roles , the chart can provide usefull insights in to user preferences and  the popularity of different carrier oppurtunities on the platform.
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default Download
