import React, { useEffect, useState } from 'react';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import axios from 'axios';
import SingResult, { RecentProps } from './SingResult';
import { useSnapCarousel } from 'react-snap-carousel';


interface Props  {}

const RecentVip = (props: Props) => {
    const [results, setresults] = useState<[]>();
    const { scrollRef } = useSnapCarousel();

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER_URL}api/results`,  {
          headers: { 'Content-Type': 'application/json'
      
                  },
              withCredentials: true
      }
        ).then((res)=>{
          // console.log(res.data.results)
          setresults(res.data.results)
          // return (res.data.user)
        })
        
       }, [])

  return (
    <div><div>
    <span><h5 className='home-sub'>BECOME A VIP TODAY</h5></span> 
      <span className='bgblack'>
      <h5 className='home-sub2'>  DON'T GAMBLE, BET SMART 💡</h5>
      <span className='bgash'>
      <p className='homeal'>Get the most out of our precise daily predictions with up to "2 odds" daily and maximize your profits. 
Take advantage of our VIP service with up to 95% accuracy.
Our team of experts recommends this VIP for individuals who view betting as a strategic means of boosting their daily earnings.</p>
</span>
       <ul className='recvip'
        ref={scrollRef}
        style={{
          display: 'flex',
          overflow: 'scroll',
          scrollSnapType: 'x mandatory'}}
    >
   { results?
    results.map((rec: RecentProps) => { return <li key={rec.id}><SingResult id={0} day={rec.day} status={rec.status} /></li> }):
      <h1>Match Unavailable</h1>
    }
    </ul>
</span>
    </div>
    <span className='iframe'>
   <a href='/vip' ><button className='btn1'>Join VIP</button></a>
   </span>
  
    </div>
  )
}

export default RecentVip