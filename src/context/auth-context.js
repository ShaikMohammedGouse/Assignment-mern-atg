import { createContext, useContext, useState } from "react";

const AuthContext = createContext({joinToggle : false});

const AuthProvider = ({children}) => {
    const [joinToggle, setJoinToggle] = useState(false);
    const [signupToggle, setSignupToggle] = useState(false);
    const [loginToggle, setLoginToggle] = useState(false);

    return(
        <AuthContext.Provider value={{joinToggle, setJoinToggle, signupToggle, setSignupToggle, loginToggle, setLoginToggle}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth};