import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router'
import { AppRouter } from './router/AppRouter.jsx'
import './Styles.css'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //</HashRouter>
  <HashRouter>
    <AppRouter />
  </HashRouter>
  // </BrowserRouter>
  // </StrictMode>
)
