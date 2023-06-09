import React, { useState } from 'react';
import { useSnapCarousel } from 'react-snap-carousel';
import {SingleFree, FreeProps} from '../components/SingleFree';
import { defer, useLoaderData } from "react-router-dom";
import axios from 'axios';


const FreeInplay = () => {
  const odds:any = useLoaderData();
  const { scrollRef } = useSnapCarousel();

  return (
    <>
    <div className='freeinbox'>
    <span><h5 className='home-sub'>FREE INPLAY TIPS</h5></span> 
    
    <ul
      ref={scrollRef}
      style={{
        display: 'flex',
        overflow: 'scroll',
        scrollSnapType: 'x mandatory'
        
      }}
    >
   { odds?
    odds.map((free: FreeProps) => { return <li key={free.id}><SingleFree time={new Date(free.time)} match={free.match} prediction={free.prediction} id={0}/></li> }):
      <h1>Match Unavailable</h1>
    }
    </ul>
    </div>
    </>
  );
};

export default FreeInplay;



export const freeloader = async() =>{

  // const cookieValue = document.cookie
  //   .split("; ")
  //   .find((row) => row.startsWith("_auth="))
  //   ?.split("=")[1];
   
   
    
          const getodds= axios.get(`${import.meta.env.VITE_SERVER_URL}api/freeinplay`,  {
          headers: { 'Content-Type': 'application/json',
                      // 'Authorization': `Token ${cookieValue}`
  
                  },
              withCredentials: true
      }
        ).then((res)=>{
          console.log(res.data.Freeinplaygames)
          return (res.data.Freeinplaygames)
        })
  
  
        return getodds;
  
  }