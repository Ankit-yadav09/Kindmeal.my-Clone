import React, { createContext, useState } from 'react'

export const AuthContext=createContext();

const AuthContextProvider = ({children}) => {
const [isAuth,setIsAuth] = useState(false);
const [token,setToken] = useState(null);

  return (
    <div>
        <AuthContext.Provider value={{isAuth,setIsAuth,token,setToken}}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}
export default AuthContextProvider;