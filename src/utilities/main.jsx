import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles/index.css' // Ensure you have a CSS file to import
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
