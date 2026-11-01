import axiosService from "../API/axiosService";

//save resume API : called by resumeInput component when finishes button clicks

export const saveResumeApi = async (resumeDetails)=>{
    return await axiosService("POST","/resumes",resumeDetails)
}

//View resume API : called by View  component when page loads in browser

export const viewResumeApi = async (resumeId)=>{
    return await axiosService("GET",`/resumes/${resumeId}`,{})
}

//View resume API : called by View  component when page loads in browser

export const getAllResumesApi = async ()=>{
    return await axiosService("GET",`/resumes/`,{})
}

//remove resume API : called by View  component when when delete button clicks

export const deleteResumeApi = async (resumeId)=>{
    return await axiosService("DELETE",`/resumes/${resumeId}`,{})
}

//Update resume api called  by edit component when update button clicks 
export const updateResumeApi = async (resumeId,resumeDetails)=>{
    return await axiosService("PUT",`/resumes/${resumeId}`,resumeDetails)
}

//Download resume api called  by view component when download button clicks 
export const downlaodResumeApi = async (resumeDetails)=>{
    return await axiosService("POST",`/downloads`,resumeDetails)
}

//GEt Download resume api called  by download component when browser page loads
export const getAllDownlaodResumeApi = async (resumeDetails)=>{
    return await axiosService("GET",`/downloads`,{})
}
