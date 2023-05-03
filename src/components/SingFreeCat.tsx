import React from 'react';
import {useNavigate} from 'react-router-dom';

interface Props {
    name: string;
}

const SingFreeCat = (props: Props) => {

    const navigate = useNavigate();
    

    const viewGame = ()=>{
        navigate('/')
    }
  return (
 
          <>
          <a href='/free-predictions'><div className='tipcatbox'>
              <span><strong><p>FREE!</p></strong></span>
      <h2 >{props.name}</h2>
     
      </div>
      </a>
      </>

  )
}

export default SingFreeCat;