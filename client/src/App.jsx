import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Bienvenido } from './routes/Bienvenida.jsx'
import { Contacto } from './routes/Contacto.jsx';
import { Chat } from './routes/Chat.jsx';
import { Roulette } from './routes/Roulette.jsx'
import ErrorPage from './routes/error-page.jsx';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { useRef } from 'react';
import Login from './components/LoginForm.jsx';

function App() {

  const isLogin= useRef(false)
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
      element: <Chat isLogin={isLogin}/>
    },
    {
      path: "ruleta",
      element: <Roulette/>
    },
    {
      path: "login",
      element: <Login/>
    }
  ]);

  return (
    <>
      <Header isLogin={isLogin}/>
      <RouterProvider router={router}/>
      <Footer/>
    </>
  )
}

export default App
