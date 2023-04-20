import React from 'react';
import '../styles/index.scss';
import Errorimg from '../assets/samerror.svg';
import Samlogo from '../assets/samglogo.svg';
import { Box } from '@mui/material';
import Link from 'react-router-dom';



const ErrorPage = () => {
  return (
    <>
  
 <span className='erlgspn'> <img className="errlogo" src={Samlogo}></img></span>
   <span className='erimgspn'><img className="errimg" src={Errorimg}></img></span>
    <span className='btnspn'><button className='btn1'><span>Go Home</span><em></em></button></span>
    </>
  )
}

export default ErrorPage