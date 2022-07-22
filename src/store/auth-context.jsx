import React, {useEffect, useState} from 'react'

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogin: ()=>{},
    onLogout: ()=>{} //just for ide auto-completion dummy function don't do anything
})

function AuthContextProvider(props){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

        useEffect(() => {
          const storedUserLoggedInInformation = localStorage.getItem('auth');
      
          if (storedUserLoggedInInformation === '1') {
            setIsLoggedIn(true);
          }
        }, []);
      
        const loginHandler = () => {
          setIsLoggedIn(localStorage.getItem("auth"));
        };
      
        const logoutHandler = () => {
          localStorage.clear()
          setIsLoggedIn(false);
        };
    return (
        <AuthContext.Provider value={{isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export {AuthContextProvider}
export default AuthContext