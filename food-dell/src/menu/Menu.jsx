import React, { useContext } from 'react'
import './Menu.css'
import { StoreContext } from '../context/StoreConext'

const Menu = ({category,SetCategory}) => {
 
    const {menu_list} = useContext(StoreContext)
    return (
        <div id='menu' className='container menu-container'>
            <h1>Explore our Menu</h1>
            <p  >Explore our wide range of delicious meals, crafted with fresh ingredients and packed with flavor. Choose from your favorite cuisines and enjoy!</p>
            <div className="manu-items" >

                {menu_list.map((item, index) => (
                    <div onClick={() => SetCategory(prev=>prev===item.menu_name?'All':item.menu_name)}  key={index} className="manu-item">
                        <img  className={category=== item.menu_name ?'actives':''} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Menu