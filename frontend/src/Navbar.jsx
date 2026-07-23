import image from "/images/Downvector.png"
import image1 from "/images/Hamburger.png"
import image2 from "/images/Wishlist.png"
import image3 from "/images/Cart.png"
import image4 from "/images/user.png"
import image5 from "/images/Search.png"
import Cart from "./Cart"
import { useContext, useEffect, useState } from "react"
// import Card, { cardRecord } from "./Card"

import { Link, NavLink } from 'react-router-dom';
import { WishlistContext } from "./WishlistContext.jsx"
// import { CardData } from "./Card"



function Navbar(){
    // console.log(CardData.Consumer.name)
    
        // console.log(useContext(CardData))

    // const data = useContext(CardData)    

    // console.log(data,"hh")

    // const [data1,setData1]=useState({wishlist:0})
    



// useEffect(()=>{
//     const res=fetch("http://localhost:3000/Navbar")
//         .then(res=>res.json())
//         .then(data=>setData1(data))
        


// },[])

// console.log(data1.wishlist)


const {wishlistCount,cartCount}=useContext(WishlistContext)



    
    

    return(

<>
{/* sticky top-[-25px]  */}
<div className="md:flex md:justify-between md:flex-col border-b border-black bg-white ">

<div className="bg-black py-[6px] md:py-[4px] ">

        <div className="flex justify-around lg:ml-[450px] lg:justify-between lg:pr-[200px] ">
            <div className="flex items-center">
                <span className="text-white text-[9px] lg:text-[12px]">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
                <a href="" className="underline decoration-white text-white pl-[5px] text-[9px] lg:text-[12px] outline-none"><b>ShopNow</b></a>
            </div>
            <div className="flex items-center">
                <span className="text-white text-[9px] lg:text-[12px]">English</span>
                <div className="flex items-center"><img src={image} alt="" className="mb-[2px] ml-[2px] w-[9px] lg:w-[11px]" /></div>
            </div>

        </div>

</div>

<div className="flex justify-between md:my-[13px] md:ml-[85px] md:mr-[30px]">

        <div className="flex">
            <img src={image1} alt="" className="size-[40px] lg:hidden"/>
            <h4 className="text-[24px] md:text-[30px]"><b>Exclusive</b></h4>
        </div>


        <div className="hidden md:block md:flex md:justify-between md:items-center md:w-[335px]">

        <a href="/">
            <span className="hover:font-medium hover:underline ">Home</span>
        </a>
         
        <a href="/Contact">
            <span className="hover:font-medium hover:underline">Contact</span>
        </a>

        <a href="/about">
            <span className="hover:font-medium hover:underline">About</span>
        </a>
         
            
        <Link href="/SignUp">
            <span className="hover:font-medium hover:underline">SignUp</span>
        </Link>



        </div>

        <div className="flex w-[153px] md:w-[420px] items-center md:justify-between " >
            <a href="/SignUp"><span className="text-[15px] md:hidden">Sign Up</span></a>
            <div className="flex items-center">
                <input className="bg-neutral-100 text-[12px] md:pr-[105px] py-[10px] pl-[10px] rounded-l-[6px] outline-none hidden md:block" type="textbox" placeholder="What are you looking for?"/>
                <div className="bg-neutral-100 rounded-r-[6px] py-[6.5px] ml-[-3px]"><img src={image5} alt="" className=" hidden md:block h-[25px]  ml-[-3px] "/></div>
            </div>
            <a href="/Home/Wishlist">
            <div className="relative ">
                <img src={image2} alt="" className="size-[35px]" />
            </div>
            </a>
            <div className="flex justify-center text-white bg-[#DB4444] px-[3px] size-[12px] md:size-[15px] rounded-[20px] items-center absolute top-[32px] right-[68px] md:top-[45px] md:right-[116px]">
                                        <span className=" text-[10px] md:text-[12px] ">{wishlistCount}</span>
                    </div>
             
           
             
            <a href="/Home/Cart">
                <div >
                    <div className="relative">
                        <img src={image3} alt="" />
                    </div>
                    
                    <div className="flex justify-center text-white bg-[#DB4444] px-[3px] size-[12px] md:size-[15px] rounded-[20px] items-center absolute top-[30px] right-[32px] md:top-[44px] md:right-[73px]">
                                        <span className=" text-[10px] md:text-[12px] ">{cartCount}</span>
                    </div>
                </div>
            </a>
              
            <img src={image4} alt="" />
        </div>



</div>
</div>









</>

    )

}

export default Navbar;
