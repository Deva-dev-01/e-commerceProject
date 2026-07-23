import React, { createContext, useEffect } from 'react'
import Cart from "/images/Cart.png"
import Navbar from "./Navbar";
import { useState } from 'react';
import Filleye from "/images/Filleye.png"
import Fillheart from "/images/Fillheart.png"
import { Await } from 'react-router-dom';
import { useContext } from 'react';
import { WishlistContext } from './WishlistContext.jsx';



// const [Arr,set]


let arr=[];


const Card = ({id,image,star,name,newprice,oldprice,keywords,quantity,cancel}) => {

    


  // console.log(value)
  // const [count,setCount]=useState()
const [value,setValue]=useState()
function Counter(){
  
  if(arr.some((val)=>(val==id))){} 
  else{arr.push(id)}
  
  setValue(arr.length)
  // // console.log(arr.length)
  }

  const [data,setData]=useState()


// useEffect(()=>{
//  fetch("https://jsonplaceholder.typicode.com/todos")
//     .then(res => res.json())
//     .then(data => setData(data));

// // console.log("From useEffect")

// },[])

const { wishlistCount, setWishlistCount ,cartCount,setCartCount } = useContext(WishlistContext);


    const data1={id:id,image:image,star:star,name:name,newprice:newprice,oldprice:oldprice,keywords:keywords,quantity:quantity}
    
      function press1(){

        const res= fetch("https://e-commerceproject-1-9s8s.onrender.com/getWishlist",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(data1)
        })

            .then(res=>res.json())
            .then(data=>console.log(data.data))

            

            setWishlistCount(wishlistCount + 1);

            

        
      }

      function press2(){
        const res= fetch("https://e-commerceproject-1-9s8s.onrender.com/getCart",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(data1)
        })

            .then(res=>res.json())
            .then(data=>console.log(data.data))


            setCartCount(cartCount +1)
      }



  function press(id){

        const res =  fetch("https://e-commerceproject-1-9s8s.onrender.com/removeWishlist",{
                                method: "POST",
                                headers:{
                                "Content-Type": "application/json"
                            },
                     body:JSON.stringify({id:id})
                        })

                setData1(data1.filter((obj)=>obj.id!=id))
                setWishlistCount(pre=>pre-1)

        }
  
    
  return (
    <div>
  {/* <button onClick={()=>context(id)} className='size-[16px] md:size-[19px]'>CLick</button> */}
                                
<button onClick={()=>press(id)} className=" size-[15px] md:size-auto absolute "><img src={cancel} alt=""  /></button>                        
<div className='ml-[14px] mb-[40px] md:mb-[0px]  '>
                      
                        <div className="size-[155px] md:size-[195px] -z-[200] relative">
                          <img src={image} alt="" className='' />
                          <div className='size-[21px] md:size-[24px] absolute bottom-[13px] right-[7px] md:bottom-[18px] md:right-[7px] bg-white rounded-[30px] flex items-center justify-center'>
                           
                          </div>
                          {/* size-[20px] md:size-[40px] absolute top-[8px] right-[7px] md:top-[10px] md:right-[20px] bg-white rounded-[30px] flex items-center justify-center */}
                          
                              
                          
                          {/* <div  className='size-[20px] md:size-[24px] absolute top-[33px] right-[7px] md:top-[40px] md:right-[9px] bg-white rounded-[30px] flex items-center justify-center'> */}
                            
                          {/* </div> */}
                        </div>
                      
                        
                      
                        <div className="h-[71px] flex flex-col justify-between">
                            <div><span><b>{name}</b></span></div>
                            <div>
                                <span className="text-[#DB4444]">{newprice}</span>
                                <span className="ml-[14px] line-through text-gray-700">{oldprice}</span>
                            </div>
                            <div><img src={star} alt="" /></div>
                        </div>

                      <div className='flex items-center '>
                        <button  onClick={press1}><img className=''  src={Fillheart} alt="" /></button>
                        {/* <button><img className='ml-[10px]' src={Filleye} alt="" /></button> */}
                        <span className='ml-[2px] cursor-default'>&nbsp;</span>
                        <button onClick={press2}><img className='size-[24px]' src={Cart} alt="" /></button>
                      </div>
                    </div>



    </div>
  )
}

export default Card;
