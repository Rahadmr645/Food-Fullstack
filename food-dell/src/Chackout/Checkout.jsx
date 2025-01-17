import react,{useContext} from 'react' ;
import './Checkout.css'
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/StoreConext';
const Checkout = () => {
  
  const {Subtotal,deliveryFee,Total} =useContext(StoreContext);
  
  return (
    <div className='container checkout-container'>
      <div className='delivery-container'>
         <h1>Delivery Information </h1>
          <div className='delivery-info'>
            <div className='name-box'>
              <input type='text' placeholder='First Name'/>
               <input type='text' placeholder='Last Name'/>
            </div>
            <div className='email-street-box'>
            <input type='email' placeholder='Email address'/>
               <input type='text' placeholder='Street'/>
            </div>
               <div className='city-state-box'>
                  <input type='text' placeholder='city'/>
               <input type='text' placeholder='State'/>
            </div>
              <div className='zip-country-box'>
              <input type='number' placeholder='Zip Code'/>
               <input type='text' placeholder='Country'/>
            </div>
              <input className='number-input' type='number' placeholder='Phone'/>
            
          </div>
      </div>
      <div className='carts-totals'>
          <h1>Carts Total</h1>
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
        <Link to='/payment'> <button className='btn-payment'>PROCEED TO PAYMENT</button>
        </Link>
        </div> 
    </div>
    )
}

export default Checkout;