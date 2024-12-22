import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import './App.css'
import 'swiper/css'
import 'swiper/swiper-bundle.css'

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <App />
   </StrictMode>
)
