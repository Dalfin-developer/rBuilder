import { Button, Divider } from '@mui/material'
import React from 'react'

function Preview({resumeDetails}) {
  return (
    <div>
      <h1>{resumeDetails?.fullname}</h1>
      <p className='fs-5 lh-1'>Phone:{resumeDetails?.phone}</p>
      <p className='fs-5 lh-1'>Email: {resumeDetails?.email}</p>
      <p className='fs-5 lh-1'>Github: {resumeDetails?.github}</p>
      <p className='fs-5 lh-1'>Linkedin:{resumeDetails?.linkedin}</p>
      <p className='fs-5'>Location:{resumeDetails?.location}</p>
      <Divider className='bg-dark my-2'/>
      <h2>Professional Summary</h2>
      <p className='fs-5' >{resumeDetails?.summary}</p>
      <Divider className='bg-dark my-2'/>
      <h2>Technical Skills</h2>
      {/* Duplicating skills */}
      <div className='d-flex flex-wrap gap-2'>
        {resumeDetails?.skills?.map(skill=>(
                <Button key={skill} variant='text' className='bg-dark text-light rounded'>{skill}</Button>
  
        ))}
      </div>
      <Divider className='bg-dark my-2'/>
      <p className='fs-5'>Bachelor's Degree In : {resumeDetails?.degree}</p>
      <p className='fs-5'>University/College name :{resumeDetails?.college} </p>
      <p className='fs-5'>Year  Of Graduation :{resumeDetails?.year} </p>

    </div>
  )
}

export default Preview
