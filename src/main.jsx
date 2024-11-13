import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GlobalContext from './context/GlobalContext.jsx'
import RouterApp from './router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalContext>
      <RouterApp />
      {/* <App /> */}
    </GlobalContext>
  </StrictMode>,
)