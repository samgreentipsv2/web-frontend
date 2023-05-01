import React from 'react';
import herbtnimg from '../assets/herbtn.svg';
import  heroimg from '../assets/heroimg.svg';
import TelegramIcon from '@mui/icons-material/Telegram';
import Lottie from 'lottie-react';
import Blinking from '../assets/blink.json'



const Hero: React.FC = () => {
  return (
    <>
    <div className='hersctn'>
        <div>
            <div className='herotxt'>
            <h1 className='herotxt1'>THE WORLD'S</h1>
            <h1 className='herotxt2'>MOST OUTSTANDING</h1>
            <h1 className='herotxt1'>TIPSTER</h1>
            <span className='blnkspn'><p>Over 200+ Tips</p> <Lottie className='blinkcls' animationData={Blinking}/></span>
            </div>
            <span className='herbtnspn'>
              <a href='/vip'> <button className='herbtn'><span><img src={herbtnimg}></img></span> JOIN VIP</button></a>
              <a target="_blank" href='https://t.me/+Oni7J8ZYh3g1MzFk'> <button className='herbtn2'><span><TelegramIcon sx={{height: '18px', marginBottom: '-4.6px'}}/></span>Telegram Channel</button></a>
            </span>
        </div>
        <div><img className='regimg' src={heroimg} ></img></div>
    </div>
    </>
  )
}

export default Hero;