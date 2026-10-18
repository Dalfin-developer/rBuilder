import { Button, Divider } from '@mui/material'
import React from 'react'

function Preview() {
  return (
    <div>
      <h1>Full Name</h1>
      <p className='fs-5 lh-1'>Phone:</p>
      <p className='fs-5 lh-1'>Email:</p>
      <p className='fs-5 lh-1'>Github:</p>
      <p className='fs-5 lh-1'>Linkedin:</p>
      <p className='fs-5 '>Location:</p>
      <Divider className='bg-dark my-2'/>
      <h2>Professional Summary</h2>
      <p>summary</p>
      <Divider className='bg-dark my-2'/>
      <h2>Technical Skills</h2>
      <span><Button variant='text' className='bg-dark text-light rounded'>SKILL</Button></span>
      <Divider className='bg-dark my-2'/>
      <p>Bachelor's Degree In : </p>
      <p>University/College name : </p>
      <p>Year  Of Graduation : </p>

    </div>
  )
}

export default Preview
