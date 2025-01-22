import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import './Login.css'
import { assets } from '../assets/assets';
import { StoreContext } from '../context/StoreConext';
const Login = ({ setShowlogin }) => {
  const [currentState, setCurrentState] = useState('Sign Up');
   const {url,setToken} = useContext(StoreContext);
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  })
 
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData(data => ({ ...data, [name]: value }))
  }
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

  

  // login
const onLogin = async(e) => {
     e.preventDefault();
     let newUrl = url;
     if(currentState==='Login'){
      newUrl += "/api/user/login"
     } else {
      newUrl += "/api/user/register"
     }

     const response = await axios.post(newUrl,data);
     if(response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token",response.data.token);
        setShowlogin(false);
     } else{
        alert(response.data.message)
     }
}


  return (
    <div className='login-container'>
      <form onSubmit={onLogin} className='login-form'>
        <div className="login-title">
          <h1>{currentState}</h1>
          <img onClick={() => setShowlogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-input">
          {
            currentState === 'Sign Up' ?
              <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Enter your name' />
              : <></>
          }
          <input name='email' onChange={onChangeHandler} type="email" value={data.email} placeholder='Enter your email' />
          <input onChange={onChangeHandler} name='password' value={data.password} type="password" placeholder='Enter password' />
        </div>
        <div className='btn-state'>
          <button type='submit' >{currentState}</button>
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