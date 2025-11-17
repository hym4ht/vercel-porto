import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Belajar from './assets/components/belajar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Belajar />
  </StrictMode>,
  
)

