import React from 'react'
import './css/loginsignup.css'

export const LoginSignup = () => {
  return (
    <div className='loginsignup'>

        <div className='loginsignup-container'>
          <h1>sign up</h1>
        <div className='loginsignup-fields'>
           <input type='text' placeholder='enter your name' />
           <input type='email' placeholder='enter your email' />
           <input type='password' placeholder='set your password' />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login' >Already have an account? <span>Login</span></p>
        <div className='loginsignup-agree'>
          <input type='checkbox' name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
        </div>

    </div>
  )
}
