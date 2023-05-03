
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams, useNavigate, Navigate } from 'react-router-dom';

interface Props {}

const ResetPasswordConfirm = (props: Props) => {

  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [errMsg, setErrMsg] = useState<string>('');
  const navigate = useNavigate();

  const errRef = useRef<HTMLInputElement | null>(null);
  // const [searchParams, setSearchParams] = useSearchParams();


  useEffect(() => {
    setErrMsg("");
  }, [confirmpassword, password]);

  const url = window.location.href;

  const uid = url.slice(-42, -40)
  const token = url.slice(-39, -1) + url.slice(-1)

  const ResetConf = (event:any): void =>{
    event.preventDefault()

    try{
    axios.post(`${import.meta.env.VITE_SERVER_URL}api/auth/users/reset_password_confirm/`,  
      JSON.stringify({
        uid: uid,
        token: token,
        new_password: password,
        re_new_password: confirmpassword,

      }),
      {headers: { 'Content-Type': 'application/json'
  
              },
          withCredentials: true
  }

    ).then((res)=>{
      if (res.status == 204){
        alert("Password Successfully Changed!")
        navigate("/")
      }
      else if (res.status == 400){
        setErrMsg(res.data.non_field_errors[0])
        setpassword("");
        setconfirmpassword("");
        
      }
    })
  }catch (err) {
    if (err && err instanceof Error) setErrMsg("Invalid Login Details");
    console.log("Error :", err);
  }
  }


  return (
<>
<p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
<form >
    <label htmlFor="password">
    New Password:
  </label>

    <input
      type="password"
      id="password"
      required

      aria-describedby="uidnote"

    value={password}
    onChange={(e)=> {setpassword(e.target.value)}} />


    <label htmlFor="password">
   Confirm Password:
  </label>

    <input
      type="password"
      id="confirm-password"
      required

      aria-describedby="uidnote"

    value={confirmpassword}
    onChange={(e)=> {setconfirmpassword(e.target.value)}} />

    <button onClick={ResetConf} className='btn1'> Reset Password</button>


</form>
    

    </>
  )
}

export default ResetPasswordConfirm;