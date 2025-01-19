import React, { useContext, useState } from 'react'
import './Carts.css';
import { StoreContext } from '../context/StoreConext';
import { Link } from 'react-router-dom';
const Carts = () => {

  const { cartItems, removeFromCart, food_list,Subtotal,deliveryFee,Total } = useContext(StoreContext);

  // calculate subtotal and total 



  return (
    <div className='container cart-container'>
      <h1>Carts</h1>
      <div className="cart-items">
      <div className="carts-item-title cart-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr className='title-hr' />

        {Object.keys(cartItems).length === 0 && <h1
      style={{marginTop:'30px',color:'tomato',marginLeft:'100px',width:'300px'}}>Oops,<br/>no
      pruduct in your cart</h1>}

      </div>
      <div className="cart-info"  >
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <>
                <div className="carts-item-title cart-foodlist ">
                  <img src={item.image} alt='' />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${cartItems[item._id] * item.price}</p>
                  <p style={{cursor:'pointer'}} onClick={() => removeFromCart(item._id)}>x</p>
                </div>
                <hr className='hr-row' />
              </>
            )
          }
        })}
      </div>
      <div className='carts-bottom'>
        <div className='carts-totals'>
        <h1 style={{marginBottom:'20px'}}>Carts Total</h1>
          <div className='carts-total-para'>
            <h4>Subtotal</h4>
            <p>${Subtotal}</p>
          </div>
          <hr className='totals-hr' />
          <div className='carts-total-para'>
            <h4>Delivery fee</h4>
            <p>${deliveryFee}</p>
          </div>
          <hr className='totals-hr' />
          <div className='carts-total-para'>
          <h4 style={{color:'tomato'}}>Total</h4>
            <p>${Total}</p>
          </div>
        <Link to='/checkout'  > <button>PROCEED TO CHECKOUT</button>
        </Link>
        </div> 
        <div className="promocode">
          <h4>If you have any promocode, Enter it here</h4>
          <input type='text' placeholder='promo code' />
          <button>Submit</button>
        </div>
      </div>
    </div>

  )
}

export default Carts