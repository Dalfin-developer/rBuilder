import React from 'react'
import { FaInstagram, FaPhoneAlt ,FaFacebook,FaWhatsapp} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

function Footer() {
  return (
    <div style={{background:'#504033',heigh:'300px'}} className='container-fluid text-light p-5'>
      <div className="row">
         <div className="col-lg-4">
          <h4 className='mb-3'>AI rBuilder</h4>
          <p style={{textAlign:'justify'}}>An AI rBuilder suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. The main goal of the AI Powered Resume Builder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can select templates, edit content, preview their resume, and download it in formats such as PDF.</p>
         </div>
         <div className="col-lg-4"></div>
         <div className="col-lg-4 mt-3">
          <p><MdEmail/> resumebuilder@gmail.com</p>
          <p><FaPhoneAlt/>  7854497763</p>
          <h5 style={{fontSize:'18px'}}>Connect With Us</h5>
          <div className='fs-5'>
            <FaInstagram/>
            <FaFacebook className='mx-3'/>
            <FaWhatsapp/>
          </div>
         </div>
      </div>
      <h4 className='text-center mt-2'>Designed and buit with ❤️ using react </h4>
    </div>
  )
}

export default Footer
