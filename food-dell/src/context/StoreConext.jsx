import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie"; // Import js-cookie
import { menu_list } from "../assets/assets";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const url = 'http://localhost:4420';

    //  Use Cookies to store token instead of localStorage
    const [token, setToken] = useState(() => Cookies.get('token') || '');  // Get token from Cookies
    const [cartItems, setCartItems] = useState({});
    const [foodList, setFoodList] = useState([]);
    const [userName, setUserName] = useState('');
 
    // Decode JWT token safely
    const decodeToken = (token) => {
        try {
            if (!token) return "Guest";  
            const payload = JSON.parse(atob(token.split('.')[1])); // Decode JWT payload
            return payload?.name || "Guest";
        } catch (error) {
            console.error("Invalid token:", error);
            return "Guest";
        }
    };

    //  Set token from Cookies & update username on mount
    useEffect(() => {
        const storedToken = Cookies.get('token');  // Get token from Cookies
        if (storedToken) {
            console.log("Fetched token from Cookies:", storedToken);
            setToken(storedToken);
            setUserName(decodeToken(storedToken));
        }
    }, []);

    // Sync token across tabs
    useEffect(() => {
        const handleStorageChange = (event) => {
            if (event.key === 'token') {
                console.log("Token changed in another tab:", event.newValue);
                setToken(event.newValue || '');  
                setUserName(decodeToken(event.newValue || '')); 
            }
        };

        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    //  Log whenever token updates
    useEffect(() => {
        console.log("Token updated:", token);
    }, [token]);

    //  Ensure token updates in Cookies when setToken is called
    useEffect(() => {
        if (token) {
            Cookies.set('token', token, { expires: 2 });  // Set token in Cookies with expiry of 2 days
        } else {
            Cookies.remove('token');  // Remove token if empty
        }
    }, [token]);

    //  Fetch food list
    const fetchFoodList = async () => {
        try {
            const response = await axios.get(`${url}/api/food/list`);
            setFoodList(response.data.data || []);
        } catch (error) {
            console.error("Failed to fetch food list:", error);
        }
    };

    useEffect(() => {
        fetchFoodList();
    }, []);

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev };
            if (updatedCart[itemId] > 1) {
                updatedCart[itemId] -= 1;
            } else {
                delete updatedCart[itemId];
            }
            return updatedCart;
        });
    };

    const Subtotal = foodList.reduce((total, item) => {
        return cartItems[item._id] > 0 ? total + item.price * cartItems[item._id] : total;
    }, 0);

    const deliveryFee = Subtotal > 0 ? 2 : 0;
    const Total = Subtotal + deliveryFee;

    const contextValue = {
        menu_list,
        foodList,
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
        setFoodList,
        userName,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
