import React from 'react'
import './FoodDisplay.css'
import { assets } from '../assets/assets'
import Counter from '../Counter/Counter'

const FoodDisplay = ({ id, image, name, price, desc}) => {
    return (
        <div className='container display-container'>
            <div className="image-box">
                <img src={image} alt="" />
                <Counter  id={id} />
            </div>
            <div className="info-box p-1">
                <div className="name-start-box">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p>{desc}</p>
                <p style={{ color: 'tomato', fontWeight: 'bold' }}>{price}</p>
            </div>
        </div>

    )
}

export default FoodDisplay