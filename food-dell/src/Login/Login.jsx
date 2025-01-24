import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './Login.css';
import { assets } from '../assets/assets';
import { StoreContext } from '../context/StoreConext';

const Login = ({ setShowlogin }) => {
  const [currentState, setCurrentState] = useState('Sign Up');
  const { url, setToken } = useContext(StoreContext);
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
<<<<<<< HEAD
  })

=======
  });
  const [isChecked, setIsChecked] = useState(false);
>>>>>>> 6fe359816e76eff5bc5ecd1a44a2ddcd2c17df84

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };

  useEffect(() => {
    // Disable scrolling on body when modal is shown
    document.body.style.overflow = setShowlogin ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto'; // Cleanup and re-enable scrolling when the component is unmounted
    };
  }, [setShowlogin]);

<<<<<<< HEAD


  // login
  const onLogin = async (e) => {
    e.preventDefault();
    let newUrl = url;
    if (currentState === 'Login') {
      newUrl += "/api/user/login"
    } else {
      newUrl += "/api/user/register"
    }

    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowlogin(false);
    } else {
      alert(response.data.message)
    }
     
    // make input clear 
    setData({
      name: '',
      email: '',
      password: ''
    })

  }

=======
  const onLogin = async (e) => {
    e.preventDefault();
    let endpoint = currentState === 'Login' ? '/api/user/login' : '/api/user/register';
    const newUrl = `${url}${endpoint}`;

    try {
      const response = await axios.post(newUrl, data);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
        setShowlogin(false);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Error during login/register:', error);
      alert('An error occurred. Please try again.');
    }
  };
>>>>>>> 6fe359816e76eff5bc5ecd1a44a2ddcd2c17df84

  return (
    <div className='login-container'>
      <form onSubmit={onLogin} className='login-form'>
        <div className="login-title">
          <h1>{currentState}</h1>
          <img onClick={() => setShowlogin(false)} src={assets.cross_icon} alt="Close modal" />
        </div>
        <div className="login-input">
          {currentState === 'Sign Up' && (
            <input
              name='name'
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder='Enter your name'
              aria-label='Name'
            />
          )}
          <input
            name='email'
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder='Enter your email'
            aria-label='Email'
          />
          <input
            name='password'
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder='Enter password'
            aria-label='Password'
          />
        </div>
        <div className='btn-state'>
          <button disabled={!isChecked} type='submit'>
            {currentState}
          </button>
        </div>

        <div className='login-info'>
          <div className="check">
            <label htmlFor='checkbox'>Agree with us</label>
            <input
              id='checkbox'
              type="checkbox"
              checked={isChecked}
              onChange={onCheckboxChange}
            />
          </div>
          <div className="info">
            {currentState === 'Sign Up' ? (
              <p>
                Already have an account?{' '}
                <span onClick={() => setCurrentState('Login')}>Click here</span>
              </p>
            ) : (
              <p>
                Don't have an account?{' '}
                <span onClick={() => setCurrentState('Sign Up')}>Click here</span>
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
