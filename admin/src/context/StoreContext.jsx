import { createContext, useEffect, useState } from "react";
import Cookies from 'js-cookie'

export const Context = createContext();
 
export const StoreContextProvider = ({children}) => {

    const [username, setUsername] = useState("");

   
    const decodeToken = (token) => {
        try {
           
            if(!token) return "Guest";

            // decode jwt payload safely
            const base64Url = token.split(".")[1];
            const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
            const payload = JSON.parse(atob(base64));


            return payload?.name || "Guest";

        } catch (error) {
            console.error("Invalid token:", error);
            return "Guest"
        }
    }

    useEffect(() =>{
        const token = Cookies.get("token");
        setUsername(decodeToken(token));
    },[]);
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
