import React from 'react'
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero_image from '../assets/hero_image.png'
import './hero.css'

export const Hero = () => {
  return (
    <div className='hero'>

        <div className='hero-left'>
           <h2>New arrivals only</h2>
        <div className='hero-hand-icon'>
            <p>New</p>
            <img src={hand_icon} alt='' />
        </div>
        <p>collections</p>
        <p>for everyone</p> 
        <div className='hero-latest-btn'>
          <div>latest collection</div>
          <img src={arrow_icon} alt='' />
        </div>
        </div>

        {/* <div className='hero-right'>
           <img src={hero_image} alt=''></img>
        </div> */}

    </div>

  
  )
}

