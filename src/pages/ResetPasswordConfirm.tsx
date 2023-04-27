import axios from 'axios';
import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

interface Props {}

const ResetPasswordConfirm = (props: Props) => {

  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();


  const ResetConf = () =>{
    axios.post(`http://16.16.166.53/api/plan/${searchParams.get('plan')}`,  {
      headers: { 'Content-Type': 'application/json'
  
              },
          withCredentials: true
  }
    )
  }


  return (
<>

<form onSubmit={ResetConf}>
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

    <button className='btn1'> Reset Password</button>


</form>
    

    </>
  )
}

export default ResetPasswordConfirm;