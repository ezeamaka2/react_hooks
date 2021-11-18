import React, { useState, useEffect} from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () =>{},
    onLoggin: (email, password) => {}
})

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() =>{
    const savedLoggin = localStorage.getItem("isLoggedIn");
    if(savedLoggin === "1"){
        setIsLoggedIn(true)
    }
    },[])

    const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
    }

    const logginHandler = (email, password) => {
        localStorage.setItem("isLoggedIn", "1");
        setIsLoggedIn(true)
    }
    return <AuthContext.Provider value={{
        isLoggedIn,
        onLogout: logoutHandler,
        onLoggin: logginHandler
    }}>
        {props.children}
    </AuthContext.Provider>
}
export default AuthContext;