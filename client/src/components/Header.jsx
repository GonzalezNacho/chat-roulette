/*import LogoutButton from "./Logout"
import LoginButton  from "./Login"
import { useAuth0 } from "@auth0/auth0-react";*/
import { redirect } from 'react-router-dom'

export function Header ({isLogin, user}) {

    //const { user, isAuthenticated } = useAuth0();

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
                        isLogin.current ? (
                            <>
                                <h4>{user.current}</h4> 
                                <button className="btn btn-success" onClick={() => alert('deslogueo') }>Log Out</button>
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