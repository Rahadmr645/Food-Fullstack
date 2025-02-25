import { createContext, useEffect, useState } from "react";
import Cookies from 'js-cookie'
// import jwtDecode from 'jwt-decode';
import jwtDecode from "jwt-decode";
// import { decode } from 'jwt-decode';
// import jwtDecode from 'jwt-decode/dist/jwt-decode';  
export const Context = createContext();

// const jwtDecode = require('jwt-decode'); 
export const StoreContextProvider = ({children}) => {

    const [username, setUsername] = useState("");


    useEffect(() => {
        try {
            // get the token from cookies
            const token = Cookies.get("token");
           
            if(token) {
                // decode the user token
                const decoded = jwtDecode(token);
                console.log("Decoded Token:", decoded);


                // Extract username or email
                setUsername(decoded.name || decoded.id)
            }
         
        } catch (error) {
            console.log("Error decoding token:", error)
        }
    },[])

    const contextValue = {
        username,
        setUsername,
    }

    return(
        <Context.Provider value={contextValue} >
            {children}
        </Context.Provider>
    );
}
