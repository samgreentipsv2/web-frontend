import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyTrustUs = () => {
  useEffect(() => {
    AOS.init({duration: 800});
  }, [])
  return (
    <>
    <div className='aboutbx' data-aos="fade-up">
    <span className=' faq viphdtxt'>
    <h1>Why Trust Us?</h1>
    </span>

    <span className='span1'>
      <h3>What We Offer</h3>
      <p> Our exclusive VIP page unlocks a world of benefits! As a VIP member, you'll gain access to insider tips, exclusive promotions, and personalised support from our expert team. We also offer you well analysed tickets with proper strategies in line to make you profits regardless. We also make available tips on the page daily! </p>
    </span>

    <span className='span1'>
      <h3>What You Stand To Gain</h3>
      <p> Steady Profits, Yes! You will always be on a turnover of profits as a VIP member on our platform.
 You'll receive real-time updates on when we upload the VIP Tickets.
 You can also see the written content of our selection as well as the booking codes of any of your favourite betting sites, which include 1XBET, SPORTYBET, BETKING, BET9JA, 22BET and HELABET. You also stand to get tickets of 95% accuracy level. </p>
      <img></img>
    </span>

    <span className='span1'>
      <h3>Now that you know</h3>
      <p> Joining our VIP page is easy, and the benefits are endless. Whether you're a seasoned bettor or just starting out, our VIP page is the ultimate tool to help you take your game to the next level. So, what are you waiting for? Sign up today and start winning big with SAMGREEN TIPS! </p>
      <img></img>
    </span>
    </div>
    </>
  )
}

export default WhyTrustUs;