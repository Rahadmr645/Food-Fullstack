import { createContext, useEffect, useState } from "react";
import { menu_list } from "../assets/assets";
import { food_list } from "../assets/assets";



export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {


    const url = 'http://localhost:4420';
    const [token,setToken] = useState({});
    const [cartItems, setCartItems] = useState({});




    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        } else {
            setCartItems((prev) => ({
                ...prev, [itemId]: prev[itemId] + 1
            }))
        }
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev };

            // Decrease the quantity of the item
            if (updatedCart[itemId] > 1) {
                updatedCart[itemId] -= 1;
            } else {

                delete updatedCart[itemId];
            }

            return updatedCart;
        });
    };

    const Subtotal = food_list.reduce((total, item) => {
        if (cartItems[item._id] > 0) {
            return total + item.price * cartItems[item._id];
        }
        return total;
    }, 0);

    const deliveryFee = Subtotal > 0 ? 2 : 0;
    const Total = Subtotal + deliveryFee;

    const contextValue = {
        menu_list,
        food_list,
        addToCart,
        removeFromCart,
        cartItems,
        setCartItems,
        Subtotal,
        deliveryFee,
        Total,
        url,
        token,
        setToken,
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;