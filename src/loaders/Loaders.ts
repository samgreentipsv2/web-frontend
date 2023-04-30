import axios from "axios";
import {useAuthUser, useIsAuthenticated, useAuthHeader} from 'react-auth-kit';
import { defer } from "react-router-dom";
import ResetPassword from "../pages/ResetPassword";


export const planLoader = async(event:any) =>{
  event.PreventDefault()


  const isAuthenticated = useIsAuthenticated();
  const authHeader = useAuthHeader();
 
 
  try{
      axios.get(`${import.meta.env.VITE_SERVER_URL}api/plans`,  {
        headers: { 'Content-Type': 'application/json',
                    'Authorization': `${authHeader()}`

                },
            withCredentials: true
    }
      ).then((res)=>{
        return defer(res.data)
      })
  } catch (err){
    console.log("Cannot Retreive Data")
  }

}
// interface isAuth{
//   isAuthenticated: () => boolean
// }





export const  userloader =  ()=>{

  

    try{
  
    // const email = document.cookie
    // .split("; ")
    // .find((row) => row.startsWith("email="))
    // ?.split("=")[1];
  
   const email = localStorage.getItem('_auth_state.email')
  
  
  
   const getUser=  axios.get(`${import.meta.env.VITE_SERVER_URL}api/user/${email}`,  {
      headers: { 'Content-Type': 'application/json'
  
              },
          withCredentials: true
  }
    ).then((res)=>{
      console.log(res.data.user)
      return (res.data.user)
    })
  
  
    return getUser
  
  }catch(err){
    throw(err)
  }
   }