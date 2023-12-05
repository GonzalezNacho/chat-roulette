import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App.jsx'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider 
      domain="dev-2rvhjqhmexxi0073.us.auth0.com" 
      clientId='zy2nR1UExuKJiV6X3m5qsuMVouxq8cHm' 
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
      >
      <App/>
    </Auth0Provider>
  </React.StrictMode>,
)
