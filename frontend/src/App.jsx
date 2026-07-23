import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
// import Navbar from './Navbar'
import Hero from './Hero'
// import Todaysales from './Todaysales'
// import Categories from './Categories'
// import Products from './Products'
// import OurProducts from "./OurProducts"
// import Featured from './Featured'
// import Services from './Services'
// import End from './End'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Signup from './Signup'
import Login from './Login'
import Cart from './Cart'
import Wishlist from './Wishlist'
import Checkout from './Checkout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {





  //  useEffect(()=>{


  //       const res=fetch("http://localhost:3000/api")
  //       .then(res=>res.json())
  //       .then(data=>console.log(data))

  //   },[])


  return (
    <>
    
    {/* <h1 className='bg-blue-100'>Hello</h1> */}
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="https://e-commerce-project-klrzqnwg6-dev642008-6750s-projects.vercel.app//SignUp" element={<Signup/>} />
        <Route path="/SignUp/Login" element={<Login/>} />
        <Route path="/Home/Cart" element={<Cart/>} />
        <Route path="/Home/Wishlist" element={<Wishlist/>} />
        <Route path="/Home/Cart/Checkout" element={<Checkout/>} />
      </Routes>
</BrowserRouter>
      {/* <Home /> */}
      {/* <About /> */}
      {/* <Contact /> */}
      {/* <Signup /> */}
      {/* <Login /> */}
      {/* <Cart /> */}

    
    </>
  )
}

export default App
