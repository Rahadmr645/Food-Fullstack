import React from 'react'
 import './navbar.css';
 import {assets} from '../../assets/assets'
const Navbar = () => {
  return (
    <div className='admin-navbar'>
         <img src={assets.logo} alt="" />
         <img className='profile-image' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar