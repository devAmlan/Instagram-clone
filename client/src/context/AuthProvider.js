import React, { createContext, useState } from 'react'
export const AuthContext = createContext(null)

function AuthProvider({children}) {
    const [authuser,setAuthuser] = useState("")
    return (
        <AuthContext.Provider
        value={{authuser,setAuthuser}}
        >
        {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
