import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CookieConsent from 'react-cookie-consent';
import { PaystackButton, usePaystackPayment } from 'react-paystack';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useAuthUser } from 'react-auth-kit';



const Checkout = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const publicKey: string= import.meta.env.VITE_PUBLIC_KEY
  const [amount, setamount] = useState<number>(0) // Remember, set in kobo!
  const [email, setEmail] = useState("");
  const [plan, setplan] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [duration, setduration] = useState("");

  const navigate = useNavigate();
  const auth = useAuthUser();

  const user = auth()?.email

   const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("_auth="))
    ?.split("=")[1];

  useEffect(() => {

   
    axios.get(`http://16.170.170.77:8000//api/plan/${searchParams.get('plan')}`,  {
      headers: { 'Content-Type': 'application/json'
  
              },
          withCredentials: true
  }
    ).then((res)=>{
      console.log(res.data)
      setamount(res.data.plan[0]?.price)
      setplan(res.data.plan[0]?.name)
      setduration(res.data.plan[0]?.duration)
      console.log(publicKey)

    })
  
  
  }, [])


  const config = {
    email: email,
    name: name,
    amount: amount * 100,
    publicKey: publicKey

  };


  const onSuccess = () => {
   axios.post('http://16.170.170.77:8000/api/addvip',
  JSON.stringify({
 
    email: user,
    plan: plan
  }),
  {
  headers: { 'Content-Type': 'application/json',
            'Authorization': `Token ${cookieValue}`

},
  withCredentials: true
  }).then((res)=>{
//clear state and controlled inputs
//need value attrib on inputs for this
console.log(res.data)     
navigate("/vip");
setName('');
setEmail('');
setPhone('');



    })

    
  };

  const onClose = () => {
    alert("Please Finish Your Transaction")
  }


  const PaystackHook = () => {
    const initializePayment = usePaystackPayment(config);
    return (
      <div>
        <button className='btn2' onClick={() => {
          initializePayment(onSuccess, onClose)
        }}
        >
          Complete Subscription
        </button>
      </div>
    )

  }


 
  




  return (
    <><div>
      <span className=' faq viphdtxt'>
        <h1>Check Out</h1>
      </span>
    <div>
      <h4>Complete Subscription To {plan} Plan For ₦{amount}</h4>
      <span>

        <form>
          <label>Name:</label>
          <input
      type="text"
      id="firstname"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />



          <label>Email:</label>

          <input
      type="text"
      id="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />


      <label>Phone Number:</label>

          <input
      type="phone"
      id="phone"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
    />
  
  </form>
  <PaystackHook/>
        
      </span>
    </div>
    </div>

    </>
  )
}

export default Checkout;