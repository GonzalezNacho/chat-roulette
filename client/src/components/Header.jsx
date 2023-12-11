/*import LogoutButton from "./Logout"
import LoginButton  from "./Login"
import { useAuth0 } from "@auth0/auth0-react";*/
import { useContext } from 'react'
import { UserContext } from '../context/user'
import { logoutToStorage } from '../assets/js/localStorage'

export function Header () {

    //const { user, isAuthenticated } = useAuth0();
    const {login, setLogin} = useContext(UserContext)

    const handleClick = () => {
        setLogin({
            user: null, 
            isLogin: false
        })
        logoutToStorage()
        window.location.replace("/");
    }
    /*if(isAuthenticated) {
        isLogin.current = true
    }*/
    return (
        <>
            <header className="header">
                <div className="logo">
                    <img src='src/assets/img/chatW.png' alt="logo"/>
                </div>
                <nav>
                    <ul className="nav-links">
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/chat">Chatear</a></li>
                        <li><a href="/contacto">Contacto</a></li>
                    </ul>
                    
                </nav>
                <div className="botones">
                    {/*
                        isAuthenticated ? (
                            <> 
                                <h4>{user.name}</h4> 
                                <LogoutButton isLogin={isLogin}/>
                            </>
                        ) : (
                            <LoginButton/>
                        )
                    */} 
                    {
                        login.isLogin ? (
                            <>
                                <h4>{login.user}</h4> 
                                <button className="btn btn-success" onClick={handleClick}>Log Out</button>
                            </>
                        ): (
                            <>
                                <a className="btn btn-success" href="/login">Log In</a>
                                <a className="btn btn-success" href="/register">SingUp</a>
                            </>
                        )

                    }
                </div>        
            </header>
        </>
    )
}