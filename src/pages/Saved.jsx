import React from 'react'
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

function Saved() {
  return (
    <div className='container d-flex justify-content-center align-items-center flex-column pt-3'>
      <h1>All Saved Resumes</h1>
      <table className="table tabe-hover table-stripped my-3">
        <thead className='table-dark'>
          <tr>
            <th>#</th>
            <th>Resume</th>
            <th>Job Role</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td><Link to='/resume/:id'>Name</Link></td>
            <td>Job</td>
            <td><button className='btn btn-danger '><MdDelete /></button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Saved
