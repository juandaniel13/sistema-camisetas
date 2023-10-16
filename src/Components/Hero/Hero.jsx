import React from 'react'
import './Hero.css'
import hand_icon from "../assets/nav_bar_media/logo.jpg"
import arrow_icon from "../assets/nav_bar_media/logo.jpg"
import hero_image from "../assets/nav_bar_media/logo.jpg"


function Hero() {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hand-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt='' height={80} width={80}></img>
                </div>
                <p>collection</p>
                <p>for everyonw</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                {/* <img src={arrow_icon} alt="" /> */}
            </div>
        </div>
        <div className="hero-right">
        <img src={hero_image} alt="" />
        </div>
    </div>
  )
}

export default Hero