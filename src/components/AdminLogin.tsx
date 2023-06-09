import axios, {AxiosError, AxiosResponse} from 'axios';
import React from 'react';
import { useSignIn, useIsAuthenticated } from 'react-auth-kit';
import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import '../styles/index.scss';
import Samlogo from '../assets/samglogo.svg';
import Login2Icon from '../assets/login2icon.svg'
import { Link, redirect, useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Props{}

const AdminLogin = (props: Props) => {

  const [Email, setEmail] = useState<string>("");
  const [Password, setPassword] = useState<string>("");
  const [errMsg, setErrMsg] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);

  const emailRef = useRef<HTMLInputElement | null>(null);
  const errRef = useRef<HTMLInputElement | null>(null);

  const navigate = useNavigate();

  const signIn = useSignIn()

  const isAuthenticated = useIsAuthenticated();

  useLayoutEffect(() => {
    emailRef?.current?.focus();
}, [])

useEffect(() => {
    setErrMsg("");
  }, [Email, Password]);



  const LoginFn = () =>{}

  return (
    <>
    <div>
    {isAuthenticated()?<><p>Already Logged in</p>
   <span className='btnspn'><a href='/'><button className='btn1'><span>Go Home</span><em></em></button></a></span>
   </> :<> <span className='erlgspn'> <img className="errlogo" src={Samlogo}></img></span>
   <div className='regbox'>
     <div className='form1'>
<p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
  
        <form
        onSubmit={LoginFn}
        >
            {/* Email */}
    <label htmlFor="email">
     Email:
    </label>

        <input
          type="email"
          id="email"
          ref={emailRef}
          autoComplete="off"
          required
          aria-describedby="uidnote"
        value={Email}
        onChange={(e)=> {setEmail(e.target.value)}} />



    {/* password */}

      <label htmlFor="password">
        Password:
      </label>

        <input
          type="password"
          id="password"
          required
  
          aria-describedby="uidnote"

        value={Password}
        onChange={(e)=> {setPassword(e.target.value)}} />

<span className='btnspn'><button className='btn1' type='submit'> Log In</button></span>

        </form>
        
         <span className='btnspn1'><p>Don't Have An Account? <Link to='/register'>Sign Up</Link>  </p>
         <p>Forgot Password? <Link to='/register'>Request a new one</Link>  </p></span>

         </div>
         <div><img className='regimg' src={Login2Icon} ></img></div>
         </div></>}
    </div>

    </>
  )
}

export default AdminLogin;