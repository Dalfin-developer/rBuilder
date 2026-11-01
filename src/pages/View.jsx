import React, { useRef, useState } from 'react'
import { FaDownload } from "react-icons/fa6";
import Edit from "../components/Edit"
import { Link, useParams } from 'react-router-dom';
import { IoDocumentText } from "react-icons/io5";
import { FaBackward } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import Preview from "../components/Preview"
import { downlaodResumeApi, viewResumeApi } from '../Service/apiService';
import { useEffect } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';



function View() {

  const [resume, setResume] = useState()

  const previewRef = useRef()

  const { id } = useParams()
  console.log(id);

  useEffect(() => {
    getResumeDetails()
  }, [])

  const getResumeDetails = async () => {
    const response = await viewResumeApi(id)
    if (response.status === 200) {
      setResume(response.data)
    }

  }

  const downloadCV = async () => {
    const previeTag = previewRef.current
    const canvas = await html2canvas(previeTag)
    canvas.toBlob(async (imgFile) => {
      //create form data to send file via API
      const formData = new FormData()
      formData.append("file", imgFile)
      formData.append("upload_preset", "my-downloaded-resume")

      const result = await fetch("https://api.cloudinary.com/v1_1/q9lbgqwe/image/upload", {
        method: "POST",
        body: formData
      }
      )
      const  serverData =await result.json()
      const url =  serverData.secure_url
      // console.log(url);
      generatePDF(url)
    })
  }


  const generatePDF = async (resumeImage) => {
    const PDF = new jsPDF();
    const imageWidth = PDF.internal.pageSize.getWidth()
    const imageHeight = PDF.internal.pageSize.getHeight()
    PDF.addImage(resumeImage, "PNG", 0, 0, imageWidth, imageHeight)

    const today = new Date()
    console.log(today);

    const timeStamp = `${today.toLocaleDateString()},${today.toLocaleTimeString()}`
    console.log(timeStamp);
    
    const result = await downlaodResumeApi({timeStamp,resumeImage,resumeId:resume.id,jobRole:resume.job})

    if(result.status===201){
    PDF.save(`${resume.fullname}cv.pdf`)
    }
  }
  // Time Stamp
  // resume id 
  // image url
  // job

  return (
    <div className='container my-5'>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          {/* navigation icons */}
          <div className='d-flex justify-content-center align-items-center'>
            {/* Download  */}
            <button onClick={downloadCV} style={{ color: '#504033' }} className='btn mx-2'> <FaDownload />Download CV</button>
            {/* Edit */}
            <Edit resumeDetails={resume} setResumeDetails={setResume}></Edit>
            {/* All Resumes */}
            {/* <Link style={{color:'#504033'}} to='/all-resumes' className='btn mx-2'><IoDocumentText />All Resumes</Link> */}
            {/* Download History */}
            {/* <Link style={{color:'#504033'}} to='/downloads' className='btn mx-2'><IoMdRefresh />Download History</Link> */}
            {/* Back */}
            <Link style={{ color: '#504033' }} to='/resume-details' className='btn mx-2'><FaBackward />Previous</Link>
          </div>
          <div ref={previewRef} className='p-5'>
            <Preview resumeDetails={resume} />
          </div>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  )
}

export default View
