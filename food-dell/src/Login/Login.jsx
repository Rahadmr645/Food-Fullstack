import React, { useState, useEffect } from 'react'
import './Login.css'
import { assets } from '../assets/assets';
const Login = ({ setShowlogin }) => {
  const [currentState, setCurrentState] = useState('Sign Up');


  useEffect(() => {
    // Disable scrolling on body when modal is shown
    if (setShowlogin) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto'; // Re-enable scrolling when modal is closed
    }
    return () => {
      document.body.style.overflow = 'auto'; // Cleanup and re-enable scrolling when the component is unmounted
    };
  }, [setShowlogin]);

  return (
    <div className='login-container'>
      <form className='login-form'>
        <div className="login-title">
          <h1>{currentState}</h1>
          <img onClick={() => setShowlogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-input">
          {
            currentState === 'Sign Up' ?
              <input type="text" placeholder='Enter your name' />
              : <></>
          }
          <input type="email" placeholder='Enter your email' />
          <input type="password" placeholder='Enter password' />
        </div>
        <div className='btn-state'>
          <button >{currentState}</button>
        </div>

        <div className='login-info'>
          <div className="check">
            <label htmlFor='chackbox'>Agree with us </label>
            <input id='chackbox' type="checkbox" />
          </div>
          <div className="info">
            {currentState === 'Sign Up' ?
              <p>Alrady have a account <span onClick={() => setCurrentState('Login')} >click here</span></p>
              : <p>Don't have a account <span onClick={() => setCurrentState('Sign Up')} >click here</span></p>
            }
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login