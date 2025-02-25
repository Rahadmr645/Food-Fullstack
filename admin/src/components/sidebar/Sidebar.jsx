import React from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
    return (
        <div className='sidebar-container'>
            <div className="sidebar-options">
                <NavLink to='/'className="sidebar-option">
                    <img src={assets.add_icon} alt="" />
                    <p>add Items</p>
                </NavLink>
                <NavLink to='/order'  className="sidebar-option">
                    <img src={assets.order_icon} alt="" />
                    <p>order</p>
                </NavLink>
                <NavLink to='/list' className="sidebar-option">
                    <img src={assets.order_icon} alt="" />
                    <p>List</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar