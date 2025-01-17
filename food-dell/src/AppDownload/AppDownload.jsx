import React from 'react'
import { assets } from '../assets/assets'
import './AppDownload.css';
const AppDownload = () => {
  return (
    <div className='container download-container'>
      <div className="text-h1">
         <h1>For better Expreince Dowenload </h1> 
        <h1>Tomato App</h1>
      </div>
        <div className="app-button" id='mobile-app'>
          <img src={assets.app_store} alt="app_store" />
          <img src={assets.play_store} alt="playsoter" />
        </div>
    </div>
  )
}

export default AppDownload;