import React, { useContext } from 'react'
 import './navbar.css';
 import {assets} from '../../assets/assets'
 import {useNavigate} from 'react-router-dom'
import { Context } from '../../context/StoreContext';
const Navbar = () => {
  const {username} = useContext(Context);
  const navigate = useNavigate();
  return (
    <div className='admin-navbar'>
        <h1>{username}</h1>
         <img  onClick={() => navigate('/profile')} className='profile-image' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar