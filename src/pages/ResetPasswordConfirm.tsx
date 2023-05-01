
import axios from 'axios';
import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

interface Props {}

const ResetPasswordConfirm = (props: Props) => {

  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  const uid = searchParams.get('uid');
  const token = searchParams.get('token');

  const ResetConf = (): void =>{
    axios.post(`${import.meta.env.VITE_SERVER_URL}api/auth/password/reset/confirm/${uid}/${token}`,  
      JSON.stringify({
        uid: uid,
        token: token,
        password: password,
        confirmpassword: confirmpassword

      }),
      {headers: { 'Content-Type': 'application/json'
  
              },
          withCredentials: true
  }
    )
  }


  return (
<>

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