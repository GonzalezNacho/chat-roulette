import { createContext, useState } from "react";


export const UserContext = createContext()

export function UserProvider ({ children}) {
    const userFromStorage = window.localStorage.getItem('user')
    const isLoginFromStorage = window.localStorage.getItem('isLogin')
    const [login, setLogin] = useState({
        user: userFromStorage, 
        isLogin: isLoginFromStorage ?? false
    })

    return (
        <UserContext.Provider value={{
            login,
            setLogin
        }}>
            {children}
        </UserContext.Provider>
    )
}