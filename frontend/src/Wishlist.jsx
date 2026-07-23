import Navbar from "./Navbar";
import { flashsales } from "./product";
import Card from "./Card";
import End from "./End";
import { useState } from "react";
import { useEffect } from "react";
import { WishlistContext } from "./WishlistContext";
import { useContext } from "react";
import cancel from "/images/cancel.png"
function Wishlist(){

    const [data1,setData1]=useState([])
    // const [data2,setData2]=useState([{wishlist:""}])
    const {wishlistCount,setWishlistCount}=useContext(WishlistContext)

    

    
     useEffect(()=>{
                     const res = fetch("https://e-commerceproject-1-9s8s.onrender.com/Wishlist")
                        .then(res=>res.json())
                        .then(data=>setData1(data))
       
        },[])

        
        

    return(
        <>
        
        <Navbar />
        <div className="md:ml-[85px] md:mr-[40px] mx-[10px] mt-[50px]">
            <div className="flex justify-between md:mx-[35px] items-center mb-[50px]">
                <div>
                    <span className="text-[17px] md:text-[25px] font-medium">Wishlist&nbsp;</span>
                    <span className="text-[17px] md:text-[25px] font-medium">({wishlistCount})</span>
                </div>
                <div className="flex justify-center md:justify-end ">
                    <span className=" text-[12px] md:text-[17px] md:py-[13px] py-[10px] md:px-[40px] px-[35px] border border-black outline-none rounded-[7px]">Move All To Bag</span>
                </div>
            </div>
            <div className=" md:flex md:justify-between md:ml-[71px] md:mr-[40px] mb-[40px] ">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 md:gap-[40px] mb-[40px] md:w-[1409px] ">
                                
                      {
                        data1.map((item)=>(
                            <>

                            
                                
                                 <Card  id={item.id} image={item.image} star={item.star} name={item.name} newprice={item.newprice} oldprice={item.oldprice} keywords={item.keywords} cancel={cancel} />
                                
                            
                            </>
                        ))
                      }              
                                
                                
                </div>
            </div>
        </div>
        
        <End />
        
        </>
    )
}
export default Wishlist;
