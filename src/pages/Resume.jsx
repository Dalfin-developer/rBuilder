import React from 'react'
import { IoMdDocument } from "react-icons/io";
import { HiDocumentDownload } from "react-icons/hi";
import { Link } from 'react-router-dom';

function Resume() {
  return (
    <div>
     <div style={{height:'100vh'}} >
      <h1 className='text-center mt-5'>Create A ATS Friendly Resume In Minutes With AI</h1>
      <div className="container">
        <div className='row' style={{marginTop:'100px'}} >
          <div className="col-lg-1"></div>
          <div className="col-lg-4 rounded shadow text-center p-5" >
            <IoMdDocument className='fs-1 mb-3 text-primary' />
            <h4>Add Your Details</h4>
            <p>Our AI will generate skills and summary</p>
            <h5>Step 1</h5>
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-4 rounded shadow text-center p-5">
            <HiDocumentDownload className='fs-1 mb-3 text-danger' />
            <h4>Download Your Resume</h4>
            <p>Download PDF and start applying</p>
            <h5>Step 2</h5>
          </div>
          <div className="col-lg-1"></div>
        </div>
        <div className='text-center mt-5'>
          <Link to='/resume-details' style={{backgroundColor:'#504033'}} className='btn text-light'>LET'S START</Link>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Resume
