import axios from "axios";
const axiosInstance = axios.create({
    baseURL: "https://resumeserver-53xx.onrender.com",
    timeout:10000
})
//global  error handling 

axiosInstance.interceptors.response.use(
    (response)=>{
        console.log("API response recived ");
        return response
    },(error)=>{
        if(error.response){
            const status = error.response.status
            if(status=== 401){
                console.log("Unothorized access");
                
            }
             else if(status=== 404){
                console.log("API or resource not found ");
                
            }
             else if(status=== 500){
                console.log("Server Error");
                
            }
             else{
                console.log("Http error : ",status);
                
            }
        }else if(error.request){
            console.log("No response from the server");
            
        }
        else{
            console.log("Error",error.message);
            
        }
        return Promise.reject(error)
    }
    
)
export default axiosInstance