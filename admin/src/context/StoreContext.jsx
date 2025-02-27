import { createContext, useEffect, useState } from "react";
import Cookies from 'js-cookie'

export const Context = createContext();

export const StoreContextProvider = ({ children }) => {

    const [user, setUser] = useState({ username: "Guest", profileImage: "/assets/user.png" });

    useEffect(() => {
        try {
            const token = Cookies.get("token");
            if (token) {

                // decode jwt payload safely
                const base64Url = token.split(".")[1];
                const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
                const payload = JSON.parse(atob(base64));


                setUser({
                    username: payload.name || "Guest",
                    profileImage: payload.profileImage || '/assets/user.png',
                });
            }
        } catch (error) {
            console.error("Invalid token:", error);
            return "Guest"
        }
    }, [])



    const contextValue = {
        user,
        setUser,
    }

    return (
        <Context.Provider value={contextValue} >
            {children}
        </Context.Provider>
    );

}