import React from 'react'
import { FaDownload } from "react-icons/fa6";
import Edit from "../components/Edit"
import { Link } from 'react-router-dom';
import { IoDocumentText } from "react-icons/io5";
import { FaBackward } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import Preview from "../components/Preview"



function View() {
  return (
    <div className='container my-5'>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          {/* navigation icons */}
          <div className='d-flex justify-content-center align-items-center'>
          {/* Download  */}
          <button style={{color:'#504033'}} className='btn mx-2'> <FaDownload />Download CV</button>
          {/* Edit */}
          <Edit></Edit>
          {/* All Resumes */}
          <Link style={{color:'#504033'}} to='/all-resumes' className='btn mx-2'><IoDocumentText />All Resumes</Link>
          {/* Download History */}
          <Link style={{color:'#504033'}} to='/downloads' className='btn mx-2'><IoMdRefresh />Download History</Link>
          {/* Back */}
          <Link style={{color:'#504033'}} to='/resume-details' className='btn mx-2'><FaBackward />Previous</Link>
          </div>
          <div className='p-5'>
            <Preview/>
          </div>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  )
}

export default View
