import axios from 'axios'
import React, { useEffect, useRef } from 'react';
import Hero from '../components/Hero';
import FreeInplay from './FreeInplay';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BetOfTheDay from '../components/BetOfTheDay';
import CookieConsent, { Cookies } from "react-cookie-consent";
import { Scrollbar } from "smooth-scrollbar-react";
import type { Scrollbar as BaseScrollbar } from "smooth-scrollbar/scrollbar";
import TipsCategories from '../components/TipsCategories';
import NewsBanner from '../components/NewsBanner';
import RecentVip from '../components/RecentVip';



const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({duration: 800});
  }, [])

  const scrollbar = useRef<BaseScrollbar | null>(null);

  useEffect(() => {
    console.log(scrollbar.current);
    
  }, []);


  return (
    <div data-aos="fade-up">

 <Scrollbar
        className="custom-class"
        onScroll={console.log}
        alwaysShowTracks
      >
      <Hero/>
      <FreeInplay/>
      <BetOfTheDay/>
      <RecentVip/>
      <TipsCategories/>
      <NewsBanner/>
  </Scrollbar>


    </div>
  )
}


export default Home;