import React, { useEffect } from 'react';
import axios from "axios";
import {useAuthUser, useIsAuthenticated, useAuthHeader} from 'react-auth-kit';
import { defer, useLoaderData } from "react-router-dom";
import ResetPassword from "./ResetPassword";
import SinglePlan, { PlanProps } from "../components/SinglePlan";
import AOS from 'aos';
import 'aos/dist/aos.css';





export const Pricing = () => {
  const plans:any = useLoaderData();


  useEffect(() => {
    AOS.init({duration: 800});
  }, [])

    
  return (
    
    <>
    <div data-aos="fade-up">
    
    <h1 className='title'>VIP Plans</h1>

  

  <div className='pricing-box'>  
    { plans?
    plans.map((pln: PlanProps) => { return <SinglePlan key={pln.name} name={pln.name} price={pln.price} id={pln.id}/>}):
      <h1>Plans Unavailable</h1>
    }
  </div>

  </div>

    </>
  )
}


export const planLoader = async() =>{

// const cookieValue = document.cookie
//   .split("; ")
//   .find((row) => row.startsWith("_auth="))
//   ?.split("=")[1];
 
 
  
        const getPlans= axios.get('http://127.0.0.1:8000/api/plans',  {
        headers: { 'Content-Type': 'application/json'

                },
            withCredentials: true
    }
      ).then((res)=>{
        console.log(res.data.plans)
        return (res.data.plans)
      })


      return getPlans;

}