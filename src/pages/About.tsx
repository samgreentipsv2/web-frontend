import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



const About = () => {
    useEffect(() => {
        AOS.init({duration: 800});
      }, [])
  return (
      <>
      <div data-aos="fade-up">
    <span className=' faq viphdtxt'>
    <h1>About Us</h1>
    </span>

    <span className='span1'>
      <h3>Who Are We?</h3>
      <p> You need to know this beforehand - We are reliable, accurate and detailed.
      A team of passionate sports enthusiasts who are committed to transforming your recreational desires and sport passion into a reliable and lasting source of income. Our mission is to provide you the tips and make available opportunities where you can indulge in your favorite sports while earning a steady income.
      </p>
    </span>
    <span className='span1'>
      <h3>All For You</h3>
      <p> We understand that sports betting analysis and research could be very challenging for beginners and probably time-consuming for pros, which is why we have developed this user-friendly platform that makes available already-drafted analysis and tips with over 90% accuracy to both new and experienced bettors. Our team of experts are always at hand to offer valuable advice and support, ensuring that our customers make informed decisions when placing bets. We do the work, you do the cashing out! That simple. </p>
    </span>
    <span className='span1'>
      <h3>Safety And Policies</h3>
      <p>At SAMGREEN TIPS, we prioritise responsible gambling and aim to provide a safe and secure environment for our customers. We adhere to strict industry standards, ensuring that all personal and financial information is protected at all times. Surfing through this website is a life-changing decision you would make in your sports betting ride.</p>
    </span>
    <span className='span1'>
      <h3>Services Brief</h3>
      <p> It is very necessary to inform that we offer a wide range of sports to bet on, including football, basketball, tennis, cricket, and many more. Our VIP platform is a paradise we recommend for all bettors. Regardless of the offer we give on the free packages, the VIP page is designed with services to suit you as a VIP. Keep scrolling through this site to find out more about the VIP page.</p>
    </span>
    <span className='span1'>
      <h3>Brand Info</h3>
      <p>We are a registered brand with the Corporate Affairs Commission, Nigeria, registration number - BN6886061. You have nothing to be worried about as we have bagged ourselves 5 years of experience in the industry. 
You're in safe hands</p>
    </span>
    </div>
    </>
  )
}

export default About;