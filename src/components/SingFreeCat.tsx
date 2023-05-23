import React from 'react';
import {useNavigate} from 'react-router-dom';

interface Props {
    name: string;
}

const SingFreeCat = (props: Props) => {

    const navigate = useNavigate();
    

  return (
 
          <>
          <a href={`/games?category=${props.name}`}><div className='tipcatbox'>
              <span><strong><p>FREE!</p></strong></span>
      <h2 >{props.name}</h2>
     
      </div>
      </a>
      </>

  )
}

export default SingFreeCat;