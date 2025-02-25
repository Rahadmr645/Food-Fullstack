import React from 'react'
 import './navbar.css';
 import {assets} from '../../assets/assets'
 import {useNavigate} from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='admin-navbar'>
        <img src={assets.logo} alt="" />
         <img  onClick={() => navigate('/profile')} className='profile-image' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar