import axios from 'axios'
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import FreeInplay from './FreeInplay';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BetOfTheDay from '../components/BetOfTheDay';
import CookieConsent, { Cookies } from "react-cookie-consent";



const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({duration: 800});
  }, [])

  return (
    <div data-aos="fade-up">
      <Hero/>
      <FreeInplay/>
      <BetOfTheDay/>

      {/* <CookieConsent
  location="bottom"
  buttonText="Accept"
  cookieName="myAwesomeCookieName2"
  style={{ background: "#2B373B" }}
  buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
  expires={150}
>
  This website uses cookies to enhance the user experience.{" "}
</CookieConsent> */}



    </div>
  )
}


export default Home;