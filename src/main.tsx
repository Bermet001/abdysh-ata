import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import './App.css'
import 'swiper/css'
import 'swiper/swiper-bundle.css'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <HelmetProvider>
         <Provider store={store}>
            <App />
         </Provider>
      </HelmetProvider>
   </StrictMode>
)
