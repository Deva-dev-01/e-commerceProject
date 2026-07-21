import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hero from './Hero.jsx';
import { WishlistProvider } from './WishlistContext.jsx';


const wishlistCount=createContext();


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  
  <WishlistProvider>
    <App />
  </WishlistProvider>

  // </StrictMode>,
)
