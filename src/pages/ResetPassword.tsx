import { Box } from '@mui/material';
import axios from 'axios';
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

type Props = {}

const ResetPassword = (props: Props) => {
  const [email, setemail] = useState("");
  const emailRef = useRef<HTMLInputElement | null>(null);
  const errRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();


  const sendReset = (event:any) =>{
    event.preventDefault()

    axios.post(`${import.meta.env.VITE_SERVER_URL}api/auth/users/reset_password/`,
    JSON.stringify({
      email: email
    }), {headers: { 'Content-Type': 'application/json',
  },
    withCredentials: true
}
    ).then((res)=>{
      if (res.status === 204){
        setemail("")
        alert("Password reset link sent.")
        navigate("/");
      }
    }
    )

  }

  
  return (
    <>
    <Box sx={{marginTop: '88px', marginLeft: "33px", marginRight: "33px"}}>
    
    
      <h1 className='title'>RESET PASSWORD</h1>

             {/* Email */}

           
          <form onSubmit={sendReset}>
    <label htmlFor="email">
     Email:
    </label>

        <input
          type="email"
          id="email"
          className='email'
          ref={emailRef}
          autoComplete="off"
          required
          aria-describedby="uidnote"
        value={email}
        onChange={(e)=> {setemail(e.target.value)}} />

      <button className="btn1">RESET</button>
      </form> 
      
        




</Box>
      
    </>
  )
}

export default ResetPassword;