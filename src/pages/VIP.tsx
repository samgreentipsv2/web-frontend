import React, { useEffect, useState } from 'react';
import axios from "axios";
import {useAuthUser, useIsAuthenticated, useAuthHeader, useSignOut} from 'react-auth-kit';
import { useNavigate, useLoaderData } from 'react-router-dom';
import { planLoader } from './Pricing';
import SingVip, { catProps } from '../components/SingVip';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SinglePlan, { PlanProps } from '../components/SinglePlan';
import FAQs from './FAQs';





 const VIP:React.FC = () => {

  const isAuthenticated = useIsAuthenticated();
  const auth = useAuthUser();
  const signOut = useSignOut();
  const [vip, setvip] = useState<boolean>();
  const [first, setfirst] = useState<string>();
  const [plans, setplans] = useState<[]>();
  const [categories, setcategories] = useState<[]>();
  

  const email = auth()?.email

  useEffect(() => {
    AOS.init({duration: 800});
  }, [])



  if (isAuthenticated()){
    const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("_auth="))
    ?.split("=")[1];
    

    useEffect(() => {
      axios.get('http://16.16.166.53/api/vipcat',  {
        headers: { 'Content-Type': 'application/json',
                    'Authorization': `Token ${cookieValue}`
      
                },
                  withCredentials: true
          }
            ).then((res) =>{
              setcategories(res.data.categories)
              console.log(res.data.categories)
            })
    }, [])
    

  



    useEffect(() => {
       axios.get(`http://16.16.166.53/api/user/${email}`,  {
        headers: { 'Content-Type': 'application/json'
    
                },
            withCredentials: true
    }
      ).then((res)=>{
        // console.log(res.data.user[0].first_name)

        setvip(res.data.user[0].is_vip)
        setfirst(res.data.user[0].first_name)
        // return (res.data.user)

      })
    
    
    }, [])


    useEffect(() => {

      axios.get('http://16.16.166.53/api/plans',  {
        headers: { 'Content-Type': 'application/json'

                },
            withCredentials: true
    }
      ).then((res)=>{
        console.log(res.data.plans)
        setplans (res.data.plans)
      })
    }, [])



    
    
    
    
    
    
    }
 



  return (
    <>
    <div data-aos="fade-up">
    {
        vip?
      
      <div>
        <span className='viphdtxt'>
        <h1>Good Day {first},</h1>
        <h3 >Do have a blissful day ahead, Below are your VIP Predictions.</h3>
        <h5>Make Sure You Gamble Responsibly.</h5>
        </span>
        <span className='vipbox'>
        {categories?.map((cat: catProps) => {  return <SingVip key={cat.id} category_name={cat.category_name} id={0}/>})
        
        }
        </span>

      </div>
      
      
      
      :
      
      
      
      <div><span className='titbox'><h1 className='title'> JOIN VIP FOR THE BEST BETTING TIPS.</h1></span>
       <div className='pricing-box'>  
    { plans?
    plans.map((pln: PlanProps) => { return <SinglePlan key={pln.name} name={pln.name} price={pln.price} id={pln.id}/>}):
      <h1>Plans Unavailable</h1>
    }
  </div>
      </div>
    }
  

    
  </div>
  <FAQs/>
    </>
  )
}

export default VIP;