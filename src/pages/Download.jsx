import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";

function Download() {
  return (
    <div className='container my-5'>
      <div className="d-flex justify-content-between align-items-center">
        <h1 className='fs-1'>Download Resume History</h1>
        <Link to='/resume/:id' style={{ color: '#504033', textDecoration: 'none', fontSize: '20px' }}><IoMdArrowRoundBack />Back</Link>
      </div>
      <div className="row my-5">
        {/* Duplicate row according to resume count */}
        <div className="col-lg-4">
          <div style={{ height: '350px' }} className="rounded shadow p-3">
            <h6>Review at the time stamp</h6>
            <div className="mt-3 text-center">
              <Link to='/resume/:id'>
                <img className='w-50' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8QFLjFl8ViThW3YEp_2EACOiOTm2NOUb91igVTV22qg&s=10" alt="resume image" />

              </Link>            
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Download
