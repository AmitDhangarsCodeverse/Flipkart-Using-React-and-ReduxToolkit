import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles/index.css'
import { RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import { router } from '../routes/router.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
</StrictMode>,
)
