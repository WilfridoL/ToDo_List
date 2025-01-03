import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/index.css'
// import './assets/css/reset.css'
import App from './App.jsx'
import GlobalContext from './context/GlobalContext.jsx'
import RouterApp from './router.jsx'
import LoginContext from './context/LoginContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalContext>
      <LoginContext>
        <App />
      {/* <RouterApp /> */}
      </LoginContext>
    </GlobalContext>
  </StrictMode>,
)
