import './App.css'
import { Footer } from './components/Footer.jsx'
import { Bienvenido } from './routes/Bienvenida.jsx'
import { Contacto } from './routes/Contacto.jsx';
import { Roulette } from './routes/Roulette.jsx'
import { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import  LoginButton  from './components/Login.jsx'
import LogoutButton from './components/Logout.jsx'

const renderItem = new Map()
renderItem.set(1, <Bienvenido/>)
renderItem.set(2, <Roulette/>)
renderItem.set(3, <Contacto/>)

function App() {

  const { user, isAuthenticated } = useAuth0();
  const [item, setItem] = useState(1)

  if (isAuthenticated) {
    console.log(user)
  }

  return (
    <>
      <header className="header">
        <div className="logo">
            <img src='src/assets/img/chatW.png' alt="logo"/>
        </div>
        <nav>
            <ul className="nav-links">
                <li><a onClick={() => setItem(1)}>Inicio</a></li>
                <li><a onClick={() => setItem(2)}>Chatear</a></li>
                <li><a onClick={() => setItem(3)}>Contacto</a></li>
            </ul>
        </nav>
        <div className="botones">
            {
              isAuthenticated ? (
                  <> 
                      <h4>Hola, {user.given_name}</h4>
                      <img src={user.picture} alt="profile"/>
                      <LogoutButton />
                  </>
              ) : (
                  <LoginButton/>
              )
            } 
        </div>        
      </header>
      
      {renderItem.get(item)}
      
      
      <Footer/>
    </>
  )
}

export default App