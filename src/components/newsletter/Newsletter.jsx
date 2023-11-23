import React from 'react'
import './newsletter.css'

export const Newsletter = () => {
  return (
    <div className='newsletter'>
      <h1>Get exclusive offers on your email</h1>
      <p>Subscribe to our newsletter and stay updated</p>

      <div>
        <input type='email' placeholder='your email id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

