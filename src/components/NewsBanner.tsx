import React from 'react';
import {useNavigate} from 'react-router-dom';


interface Props  {}

const NewsBanner = (props: Props) => {
    
  return (
    <div className='newsbanner'>
    <a href='mailto:admin@samgreentips.com'><button className='btn1'><h3>Place Your Adverts Here</h3></button></a>
    </div>
  )
}

export default NewsBanner;