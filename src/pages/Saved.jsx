import React, { useState, useEffect, useMemo } from 'react'
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import { deleteResumeApi, getAllResumesApi } from '../Service/apiService';
import { FaBackward, FaForward, FaSearch } from 'react-icons/fa';

function Saved() {
  const [allResumes, setAllResumes] = useState([])
  const [searchKey,setSearchKey] = useState('')
  const [dummyResumes,setDummyResumes]=useState([])

  const [currentPage,setCurrentPage]=useState(1)
  const rowsPerPage = 4 
  const lastIndexOfCurrentPage = currentPage* rowsPerPage
  const firstIndexOfCurrentPage = lastIndexOfCurrentPage - rowsPerPage
  const currentResumes  = allResumes.slice(firstIndexOfCurrentPage,lastIndexOfCurrentPage)
  const totalPages =Math.ceil(allResumes.length/rowsPerPage)

  useEffect(() => {
    // searchKey===""?getAllResumes():searchCandidate()
    getAllResumes()
  }, [])//when using only the useeffect value inside the [] becomes [searchkey]

  const getAllResumes = async () => {
    try {
      const response = await getAllResumesApi()
      setAllResumes(response.data)
      setDummyResumes(response.data)
    } catch (error) {
      console.error("Error fetching resumes:", error)
    }
  }

  // const searchCandidate = ()=>{
  //   setAllResumes(dummyResumes.filter(item=>item.job.toLowerCase().includes(searchKey.toLowerCase())))
  // }
  const searchInput = useMemo(()=>{
    setAllResumes(dummyResumes.filter(item=>item.job.toLowerCase().includes(searchKey.toLowerCase())))
  },[searchKey])

  const removeResume =  async(id)=>{
    if(confirm("Are you sure! do you want to delete this resume")){
      const response = await deleteResumeApi(id)
    if(response.status==200){
      getAllResumes()
    }
    }
  }

  return (
    <div className='container d-flex justify-content-center align-items-center flex-column pt-3'>
      <h1>All Saved Resumes</h1>
      <div className='d-flex align-items-center justify-content-center w-50 my-4'>
        <input onChange={(e)=>setSearchKey(e.target.value)} type="text" placeholder="Search employees based on their job role" className='form-control' />
        <FaSearch style={{marginLeft:"-30px"}}/>
      </div>
      <table className="table table-hover table-striped my-3">
        <thead className='table-dark'>
          <tr>
            <th>#</th>
            <th>Resume</th>
            <th>Job Role</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          {
           
            currentResumes.map((resume, index) => (
              <tr key={resume.id || index}>
                <td>{index + 1}</td>
                <td><Link to={`/resume/${resume.id}`}>{resume?.fullname}</Link></td>
                <td>{resume?.job}</td>
                <td><button onClick={()=>removeResume(resume.id)} className='btn btn-danger'><MdDelete /></button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div className='d-flex align-items-center'>
          <button className='btn' onClick={()=>setCurrentPage(currentPage-1)} disabled={currentPage==1}>
           <FaBackward/>
          </button>
          {currentPage} of {totalPages}
          <button className='btn' onClick={()=>setCurrentPage(currentPage+1) } disabled={currentPage==totalPages||totalPages==0}>
            <FaForward/>
          </button>
      </div>
    </div>
  )
}

export default Saved