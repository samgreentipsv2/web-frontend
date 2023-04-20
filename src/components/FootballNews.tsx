import { extractFromXml } from '@extractus/feed-extractor'
import axios from 'axios';
import React, { useEffect } from 'react';
import RssFeedComponent from './RSSFeed';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lottie from 'lottie-react';
import spinner from '../assets/spinner.json';
import ErrorPage from '../pages/ErrorPage';
import LoadingIframe from 'react-loading-iframe';


interface Props {}

const FootballNews = (props: Props) => {

  // const Skeleton = () => {
  //   return <spinner/>;
  // };
  
  

  const url = 'https://rss.app/feeds/rM1E3FRaGcsbXXpW.xml';

  useEffect(() => {
    AOS.init({duration: 800});
  }, [])

  return (
    <>
    <div data-aos="fade-up">
      {/* <RssFeedComponent 
          url={url}
          subscribe={true}
          loadingComponent={() => <div><Lottie animationData={spinner} /></div>}
          errorComponent={e => {
            console.error(e);
            return <div><ErrorPage /></div>;
          } } label={''}        
      /> */}
      <div data-aos="fade-up" className='iframe'><iframe loading='lazy' width="900" height="600" src="https://rss.app/embed/v1/imageboard/rM1E3FRaGcsbXXpW" frameBorder={0}></iframe></div>
      </div>
    </>
  )
}

export default FootballNews