
import increase from "/images/increase.png"
import decrease from "/images/decrease.png"
import cancel from "/images/cancel.png"
import { useState } from "react";
import { useContext } from "react";
import { WishlistContext } from "./WishlistContext";
import { useEffect } from "react";


export const Cartcard = ({id,image,star,name,newprice,oldprice,keywords,quantity}) => {

    let [count,setCount]= useState(quantity)
    const {subtotal,setSubtotal}= useContext(WishlistContext);

    const dataArr=newprice.split('')
    dataArr.shift();
    const num=Number(dataArr.join(''));
    // console.log(num*count)

    function Increment(){
        let Count=count;
            setCount(++Count);
            setSubtotal(prev => prev + num)


            console.log(id)

            const res =  fetch("https://e-commerceproject-1-9s8s.onrender.com/productCount",{
                                method: "POST",
                                headers:{
                                "Content-Type": "application/json"
                            },
                     body:JSON.stringify({count:Count, id:id})
                        })
    

    }

    function Decrement(){
        let Count=count;
        if(Count>0){
            setCount(--Count);
            setSubtotal(subtotal - num)

            const res =  fetch("https://e-commerceproject-1-9s8s.onrender.com/productCount",{
                                method: "POST",
                                headers:{
                                "Content-Type": "application/json"
                            },
                     body:JSON.stringify({count:Count, id:id})
                        })
        }
        
        
            
    

    }

   
    
    
useEffect(()=>{
    setSubtotal(prev => (prev + num*quantity))
},[])

    // console.log(subtotal)

    
        
    return(
        <>
        
        <div className="md:ml-[85px] md:mr-[40px] mx-[10px] md:py-[17px] pr-[12px] md:px-[50px] shadow-md   items-center rounded-[8px] mb-[20px] "  >
            <div className="grid grid-cols-4">
                <div className="flex items-center">
                    <img src={image} alt="" className="size-[30px] md:size-[50px] " />
                    <span className="md:ml-[10px] text-[12px] md:text-[17px]">{name}</span>
                </div>
                <span className="text-[12px] md:text-[17px] justify-self-center self-center " >{newprice}</span>
                <div className=" flex items-center justify-self-center self-center">
                    <button onClick={Increment}><img src={increase} alt=""  className="size-[10px] md:size-[20px]"/></button>
                    <span className=" text-[12px] px-[5px] md:text-[17px]">{count}</span>
                    <button onClick={Decrement}><img src={decrease} alt="" className="size-[10px] md:size-[20px]" /></button>
                </div>
                <span className=" text-[12px] md:text-[17px] justify-self-center self-center">${num*count}</span>
            </div>
        </div>
    
        </>
    )
}
