import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import './Counter.css'
import { StoreContext } from '../context/StoreConext'
const Counter = ({id}) => {
    
    const {addToCart,removeFromCart,cartItems} = useContext(StoreContext);

    return (
        <div className='counter-container'>
            {!cartItems[id] ?
                <img onClick={() => addToCart(id)} src={assets.add_icon_white} alt='' /> :
                <div className='counter-div'>
                    <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                </div>}

        </div>
    )
}

export default Counter