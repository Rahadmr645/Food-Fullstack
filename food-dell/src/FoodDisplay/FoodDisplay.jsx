import React, { useContext } from 'react'
import './FoodDisplay.css'
import { assets } from '../assets/assets'
import Counter from '../Counter/Counter'
import { StoreContext } from '../context/StoreConext'

const FoodDisplay = ({ id, image, name, price, desc }) => {
    const { url } = useContext(StoreContext);
    return (
        <div className='container display-container'>
            <div className="image-box">
                <img src={url+"/uploads/"+image} alt="faild" />
                <Counter id={id} />
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