import React, { useContext } from 'react'
import './FoodList.css'
import { StoreContext } from '../context/StoreConext'
import FoodDisplay from '../FoodDisplay/FoodDisplay';
 

const FoodList = ({category}) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className=' container foodList-container mt-3' >
      <h1 className='mt-2'>Top deshes near you</h1>
      <hr />
      <div className="food-container">
        {food_list.map((item, index) => {
           if (category==="All" || category === item.category) {
           return <FoodDisplay key={index} id={item._id} image={item.image} name={item.name} price={item.price}  desc={item.description}  />
           }
        })}
      </div>
    </div>
  )
}

export default FoodList