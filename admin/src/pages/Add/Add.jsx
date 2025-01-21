import React from 'react'
import { assets } from '../../assets/assets'
import './add.css'
const Add = () => {
    return (
        <div className='add'>
            <form className='flex-col'>
                <div className="add-img-upload flex-col">
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        <img src={assets.upload_area} alt="" />
                    </label>
                    <input type="file" id='image' hidden required />
                </div>
                <div className="add-product-name">
                    <p>Product Name</p>
                    <input type="text" name='name' placeholder='Type here' />
                </div>
                <div className="add-product-description">
                    <p>Product Description </p>
                    <textarea name="description" rows='6' placeholder='write content here'></textarea>

                </div>
                <div className="add-category-price">
                    <div className="add-category flex-col">
                        <p>Product Category</p>
                        <select name="category">
                            <option value="Salad">Salad</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Deserts">Deserts</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Cake">Cake</option>
                            <option value="Pure Veg">Pure Veg</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Noodles">Noodles</option>
                        </select>
                        <div className="add-price flex-col">
                            <p>Price</p>
                            <input type="number" name='price' placeholder='$20' />
                        </div>
                        <button type='submit' className='add-btn'>ADD</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Add