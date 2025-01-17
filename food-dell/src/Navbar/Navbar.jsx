import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'

import './Navbar.css'
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/StoreConext';
const Navbar = ({setShowlogin}) => {
const {cartItems} = useContext(StoreContext);
  const [selected, setSelected] = useState('home');

  const [hasItems,setHasItems] = useState(false);
  useEffect(() => {
    setHasItems(Object.keys(cartItems).length > 0 );
  }, [cartItems]); 
  return (
    <div className='navbar-container container '>
      <div className="left">
        <Link to='/' >  <img style={{ cursor: 'pointer' }} src={assets.logo} alt="logo" />
        </Link>
      </div>
      <div className="middle">
        <ul>
          <Link to='/' className={selected === 'home' ? 'borders' : ''} onClick={() => setSelected('home')} >home</Link>
          <a href='#menu' className={selected === 'menu' ? 'borders' : ''} onClick={() => setSelected('menu')} >manu</a>
          <a href='#mobile-app' className={selected === 'mobile-app' ? 'borders' : ''} onClick={() => setSelected('mobile-app')} >mobile-app</a>
          <a href='#contact-us' className={selected === 'contact-us' ? 'borders' : ''} onClick={() => setSelected('contact-us')} >contact-us</a>
        </ul>
      </div>
      <div className="right">
        <img src={assets.search_icon} alt="" />
        <div className="basket">
          <Link to='/carts' >  <img src={assets.basket_icon} alt="basket" /> </Link>
          <div className={hasItems ? 'dot':''}></div>
        </div>
        <button onClick={() => setShowlogin(true)}>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar