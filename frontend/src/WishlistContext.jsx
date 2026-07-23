import { useEffect, useState } from "react";
import { createContext } from "react";


export const WishlistContext=createContext();

export const WishlistProvider=({children})=>{

    const [wishlistCount,setWishlistCount]=useState();
    const [cartCount,setCartCount]=useState();
    const [subtotal,setSubtotal]=useState(0);

    useEffect(()=>{
    const res=fetch("https://e-commerceproject-1-9s8s.onrender.com/Navbar")
        .then(res=>res.json())
        .then(data=>setWishlistCount(data.wishlist))
        


    },[])

    useEffect(()=>{
    const res=fetch("https://e-commerceproject-1-9s8s.onrender.com/Navbar1")
        .then(res=>res.json())
        .then(data=>setCartCount(data.cart))
        


    },[])



    return(
    
        <WishlistContext.Provider value={{ wishlistCount, setWishlistCount ,subtotal ,setSubtotal,cartCount,setCartCount}}>
            {children}
        </WishlistContext.Provider>

        
    )
}
