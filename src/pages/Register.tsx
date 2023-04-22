import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Samlogo from '../assets/samglogo.svg';
import { useSignIn, useIsAuthenticated } from 'react-auth-kit';
import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import '../styles/index.scss';
import Login from './Login';
import LoginIcon from '../assets/loginicon.svg'
import { Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';




const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[A-Z])(?=.*[\W])(?=.*[0-9])(?=.*[a-z]).{8,128}$/;
const EMAIL_REGEX = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/;


const Register: React.FC = () =>
{
  const FirstNameRef= useRef<HTMLInputElement | null>(null);
  const errRef = useRef<HTMLInputElement | null>(null);

  const [firstName, setfirstName] = useState<string>("");
  const [validFirstName, setValidFirstName] = useState(false);
  const [firstNameFocus, setfirstNameFocus] = useState(false);

  const [LastName, setLastName] = useState<string>("");
  const [validLastName, setValidLasttName] = useState(false);
  const [LastNameFocus, setLastNameFocus] = useState(false);


  const [Email, setEmail] = useState<string>("");
  const [validemail, setValidemail] = useState<boolean>(false);
  const [emailFocus, setemailFocus] = useState<boolean>(false);

  const [Password, setPassword] = useState<string>("");

  const [ConfirmPassword, setConfirmPassword] = useState<string>("");
  const [validConfirmPassword, setValidConfirmPassword] = useState<boolean>(false);
  const [ConfirmPasswordFocus, setConfirmPasswordFocus] = useState<boolean>(false);

  const [errMsg, setErrMsg] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);

  const isAuthenticated = useIsAuthenticated();

  useEffect(() => {
    AOS.init({duration: 800});
  }, [])


  useLayoutEffect(() => {
    FirstNameRef?.current?.focus();
}, [])

useEffect(() => {
    setValidFirstName(USER_REGEX.test(firstName));
}, [firstName])

  useEffect(() => {
      setValidLasttName(USER_REGEX.test(LastName));
  }, [LastName])

  useEffect(() => {
      setValidemail(EMAIL_REGEX.test(Email));
  }, [Email])

useEffect(() => {
    setValidConfirmPassword(Password === ConfirmPassword);
}, [Password, ConfirmPassword])

useEffect(() => {
    setErrMsg('');
}, [firstName, LastName, Email, Password, ConfirmPassword])


const navigate = useNavigate();




const RegisterFn = async (event:any) => {
  event.preventDefault()
  try{
await axios.post('http://16.170.170.77:8000/api/auth/users/',
  JSON.stringify({
    first_name: firstName,
    last_name: LastName,
    email: Email,
    password: Password,
    re_password: ConfirmPassword
  }),
  {
  headers: { 'Content-Type': 'application/json',
},
  withCredentials: true
  }).then((res)=>{
//clear state and controlled inputs
//need value attrib on inputs for this
console.log(res.data)     
setSuccess(!success);
navigate("/login");
setfirstName('');
setLastName('');
setEmail('');
setPassword('');
setConfirmPassword('');


    }) 
} catch (err) {
  if (err && err instanceof Error) setErrMsg(err.message);
  console.log("Error :", err);
}

}

  return (
      <>
      <div data-aos="fade-up">
      {isAuthenticated()?<><p>Already Logged in</p>
   <span className='btnspn'><a href='/'><button className='btn1'><span>Go Home</span><em></em></button></a></span>
   </>:
      <><span className='erlgspn'> <img className="errlogo" src={Samlogo}></img></span>
      <div className='regbox'>
      <div className='form1'>
      <span className='formhd'><h3>CREATE AN ACCOUNT</h3></span>
      
       <><p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
    <form
    onSubmit={RegisterFn}
    
    >

      {/* firstname */}

    <label htmlFor="firstname">
      First Name:
      <FontAwesomeIcon icon={faCheck} className={validFirstName ? "valid" : "hide"} />
      <FontAwesomeIcon icon={faTimes} className={validFirstName || !firstName ? "hide" : "invalid"} />
    </label>
        <input
          type="text"
          id="firstname"
          autoComplete="off"
          required
          aria-invalid={validFirstName ? "false" : "true"}
          aria-describedby="uidnote"
          onFocus={() => setfirstNameFocus(true)}
          onBlur={() => setfirstNameFocus(false)}
        ref={FirstNameRef}
        value={firstName}
        onChange={(e)=> {setfirstName(e.target.value)}} />

      
      <p id="uidnote" className={firstNameFocus && firstName && !validFirstName ? "instructions" : "offscreen"}>
  <FontAwesomeIcon icon={faInfoCircle} />
  4 to 24 characters.<br />
  Must begin with a letter.<br />
  Letters, numbers, underscores, hyphens allowed.
</p>


{/* lastname */}

<label htmlFor="lastname">
      Last Name:
      <FontAwesomeIcon icon={faCheck} className={validLastName ? "valid" : "hide"} />
      <FontAwesomeIcon icon={faTimes} className={validLastName || !LastName ? "hide" : "invalid"} />
    </label>
        <input
          type="text"
          id="lastname"
          autoComplete="off"
          required
          aria-invalid={validLastName ? "false" : "true"}
          aria-describedby="uidnote"
          onFocus={() => setLastNameFocus(true)}
          onBlur={() => setLastNameFocus(false)}
        value={LastName}
        onChange={(e)=> {setLastName(e.target.value)}} />

    <p id="uidnote" className={LastNameFocus && LastName && !validLastName ? "instructions" : "offscreen"}>
      <FontAwesomeIcon icon={faInfoCircle} />
      4 to 24 characters.<br />
      Must begin with a letter.<br />
      Letters, numbers, underscores, hyphens allowed.
    </p>
       
       
       

    {/* Email */}
    <label htmlFor="email">
     Email:
      <FontAwesomeIcon icon={faCheck} className={validemail ? "valid" : "hide"} />
      <FontAwesomeIcon icon={faTimes} className={validemail || !Email ? "hide" : "invalid"} />
    </label>

        <input
          type="email"
          id="email"
          autoComplete="off"
          required
          aria-invalid={validLastName ? "false" : "true"}
          aria-describedby="uidnote"
          onFocus={() => setemailFocus(true)}
          onBlur={() => setemailFocus(false)}
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



    {/* confirm password */}

      <label htmlFor="confirm_pwd">
        Confirm Password:
        <FontAwesomeIcon icon={faCheck} className={validConfirmPassword && ConfirmPassword ? "valid" : "hide"} />
        <FontAwesomeIcon icon={faTimes} className={validConfirmPassword || !ConfirmPassword ? "hide" : "invalid"} />
      </label>

        <input
              type="password"
              id="confirm-password"
              required
              aria-invalid={validLastName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setConfirmPasswordFocus(true)}
              onBlur={() => setConfirmPasswordFocus(false)}
        value={ConfirmPassword}
        onChange={(e)=> {setConfirmPassword(e.target.value)}} />

<p id="confirmnote" className={ConfirmPasswordFocus && !validConfirmPassword ? "instructions" : "offscreen"}>
    <FontAwesomeIcon icon={faInfoCircle} />
    Must match the first password input field.
</p>


<span className='btnspn'><button className='btn1' disabled={!validFirstName  || !validConfirmPassword ? true : false}>Sign Up</button></span>
    </form>
    <p>Already Have An Account? <Link to='/login'>Login</Link>  </p>
  </>
  </div>
  <div><img className='regimg' src={LoginIcon} ></img></div>
  </div>
  </>}
  </div>
    </>
  )

  }


export default  Register;