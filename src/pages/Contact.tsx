import React from 'react';
import axios from 'axios';
import Samlogo from '../assets/samglogo.svg';
import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Facebook from '../assets/Facebook.svg';
import Telegram from '../assets/Telegram.svg';
import Whatsapp from '../assets/Whatsapp.svg';



const Contact = () => {
  const [email, setemail] = useState<string>("");
  const [message, setmessage] = useState<string>("");
  const navigate = useNavigate();


  const emailRef = useRef<HTMLInputElement | null>(null);


  useLayoutEffect(() => {
    emailRef?.current?.focus();
}, [])

  const onSubmit = () =>{
    alert("message sent successfully!")
    navigate("/")

  }
  return (
    <>
    <div className='contact-box'>
    <span className=' faq viphdtxt'>
    <h1>Contact Us</h1>
    </span>
      <span className='contact-form'>
        <form>
          <label> Email</label>
          
          <input
          type="email"
          id="email"
          autoComplete="off"
          required
          aria-describedby="uidnote"

        value={email}
        onChange={(e)=> {setemail(e.target.value)}} />

          <label> Message</label>

          <input
          type="message"
          id="message"
          autoComplete="off"
          required
          aria-describedby="uidnote"

        value={message}
        onChange={(e)=> {setmessage(e.target.value)}} />

    <button className='btn1' onSubmit={onSubmit}>Send</button>
        </form>

      </span>


      <h3>Reach Us At</h3>

      <p className='homeal'>
      For support: <br /> support@samgreentips.com <br /> 
For General Enquiries: <br /> contact@samgreentips.com <br /> 
For Marketing, Advertisement & Commercial Enquiries:<br />  marketing@samgreentips.com <br /> 
      </p>
      
      </div>
      </>
  )
}

export default Contact;