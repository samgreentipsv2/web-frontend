import React from 'react';
import field from '../assets/footballfield.svg'

export interface FreeProps{
    id: number;
    time: Date;
    match: string;
    prediction: string;


}

export const SingleFree= ( {time, match,prediction}:FreeProps) => {
  return (
    <div className='freeinsing'>
    <p><strong>{time.toLocaleTimeString()} </strong></p>
     <p> {match}</p>
     <p className='odddd' > <strong>{prediction}</strong></p>
     <img className='freefield' src={field}></img>
    </div>
  )
}