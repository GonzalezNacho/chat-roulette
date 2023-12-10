import './App.css'
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx'
import { Bienvenido } from './routes/Bienvenida.jsx'
import { Contacto } from './routes/Contacto.jsx';
import { Chat } from './routes/Chat.jsx'
import { Roulette } from './routes/Roulette.jsx'
import ErrorPage from './routes/error-page.jsx';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { useRef } from 'react';
import Login from './components/LoginForm.jsx';
import Register from './components/RegisterForm.jsx';

function App() {

  const isLogin= useRef(false)
  const user = useRef('')
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Bienvenido />,
      errorElement: <ErrorPage />
    },
    {
      path: "contacto",
      element: <Contacto />
    },
    {
      path: "chat",
      element: <Chat isLogin={isLogin} user={user}/>
    },
    {
      path: "ruleta",
      element: <Roulette/>
    },
    {
      path: "login",
      element: <Login isLogin={isLogin} user={user} />
    },
    {
      path:"register",
      element: <Register/>
    }
  ]);

  return (
    <>
      <Header isLogin={isLogin} user={user}/>
      <RouterProvider router={router}/>
      <Footer/>
    </>
  )
}

export default App
