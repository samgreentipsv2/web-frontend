import React from 'react';
import { useNavigate } from 'react-router-dom';

export interface PlanProps{
  id: number;
  name:string;
  price: number;


}


const SinglePlan = ({id, name, price}:PlanProps) => {
  const navigate = useNavigate();

  const checkout = ()=>{
    navigate(`/checkout?plan=${name}`)

    
  }
  return (
    <><div className='planbox'>
      <p>{name}</p>
      <h2>	₦{price} </h2>
      <button onClick={checkout}  className='planbtn btn2'>GET STARTED</button>
      </div></>
  )
}



export default SinglePlan;