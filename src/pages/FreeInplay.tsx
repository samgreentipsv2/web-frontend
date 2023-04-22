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
    <span><h5>FREE INPLAY TIPS</h5></span>  
    
    <ul
      ref={scrollRef}
      style={{
        display: 'flex',
        overflow: 'scroll',
        scrollSnapType: 'x mandatory'
      }}
    >
   { odds?
    odds.map((free: FreeProps) => { return <li key={free.id}><SingleFree time={free.time} match={free.match} prediction={free.prediction} id={0}/></li> }):
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
   
   
    
          const getodds= axios.get('http://16.170.170.77:8000/api/freeinplay',  {
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