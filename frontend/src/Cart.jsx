import Navbar from "./Navbar"
// import Cart1 from "../src/images/Cart1.png"
import { Cartcard } from "./Cartcard.jsx"
import { useContext, useState } from "react"
import cancel from "/images/cancel.png"

import End from "./End"
import { useEffect } from "react"
import { WishlistContext } from "./WishlistContext.jsx"

function Cart(){

    const [data1,setData1]=useState([])
    const [data2,setData2]=useState()


    // console.log(data1)
    const {subtotal,setSubtotal,setCartCount}=useContext(WishlistContext);
    
    
    
    


    useEffect(()=>{
                         const res = fetch("https://e-commerceproject-1-9s8s.onrender.com/Cart")
                            .then(res=>res.json())
                            .then(data=>setData1(data))
           
            },[])

             function press(item){
                // console.log(item)

                    const res =  fetch("https://e-commerceproject-1-9s8s.onrender.com/removeCart",{
                                method: "POST",
                                headers:{
                                "Content-Type": "application/json"
                            },
                     body:JSON.stringify({id:item.id})
                        })

                setData1(data1.filter((obj)=>obj.id!=item.id))
                setCartCount(pre=>pre-1)

                const res2 =  fetch("https://e-commerceproject-1-9s8s.onrender.com/productCount",{
                                method: "POST",
                                headers:{
                                "Content-Type": "application/json"
                            },
                     body:JSON.stringify({count:1,id:item.id})
                        })
                

                        const arr=item.newprice.split('')
                        arr.shift()
                        

                        let num =Number(arr.join(''))
                
                        // console.log(item.Quantity)
                    setSubtotal(pre=>pre-num*item.Quantity)

            }

        //    useEffect(()=>{
        //     data1.forEach(obj => {

        //     const arr=obj.newprice.split('')
        //     arr.shift()
            

        //     let num =Number(arr.join(''))
            
        //     // console.log(num)

        //     setSubtotal(pre => pre + num*obj.Quantity)
        // })
        //    },[])
            
           

    return(
        <>
        
        <Navbar />
        <div className="ml-[41px] md:ml-[85px] mt-[30px] md:mt-[70px] mb-[20px] md:mb-[70px] ">
                <span className="text-[#7D8184] text-[12px] md:text-[17px]">Home&nbsp;/&nbsp;</span>
                <span className="text-[12px] md:text-[17px]">Cart</span>
        </div>

        <div className="md:ml-[85px] mx-[10px] md:mr-[40px] py-[14px] px-[10px] md:py-[17px] md:pl-[40px]  shadow-md  rounded-[8px] mb-[20px]" >
            <div className="grid grid-cols-4">
                <span className="text-[12px] md:text-[17px] ml-[20px] md:ml-[0px] md:pl-[40px]">Product</span>
                <span className="text-[12px] md:text-[17px]  md:ml-[0px] justify-self-center">Price</span>
                <span className="text-[12px] md:text-[17px] pr-[15px] justify-self-center">Quantity</span>
                <span className="text-[12px] md:text-[17px] md:mr-[50px]  justify-self-center">Subtotal</span>
            </div>
        </div>

        {

            data1.map((item)=>(
                            <>
                                <button onClick={()=>press(item)} className=" size-[15px] md:size-auto md:ml-[70px] absolute"><img src={cancel} alt=""  /></button>
                                 <Cartcard id={item.id} image={item.image} star={item.star} name={item.name} newprice={item.newprice} oldprice={item.oldprice} keywords={item.keywords} quantity={item.Quantity} />

                            </>
                        ))

            
        }
        


        <div className="flex justify-between md:ml-[85px] md:mr-[40px] mx-[10px] mb-[20px] md:mb-[100px]">
            <a href="/"><div className="flex justify-center md:justify-end ">
                            <span className=" text-[12px] md:text-[17px] md:py-[13px] py-[10px] md:px-[40px] px-[35px] border border-black outline-none rounded-[7px]">Return To Shop</span>
                        </div>
                        </a>
            <div className="flex justify-center md:justify-end ">
                            <span className=" text-[12px] md:text-[17px] md:py-[13px] py-[10px] md:px-[40px] px-[35px] border border-black outline-none rounded-[7px]">Update Cart</span>
                        </div>
        </div>
        <div className="md:ml-[85px] md:mr-[40px] mx-[10px] flex flex-col md:flex-row justify-between mb-[100px]">
            <div className="flex justify-between md:w-[490px] h-[40px] pr-[80px] md:pr-[0px] md:h-[50px] my-[50px] md:my-[0px]">
                <input type="textbox" placeholder="Coupon Code" className=" text-[12px] md:text-[16px] py-[13px] pl-[16px] md:pr-[90px] rounded-[7px] outline-none border border-black" />
                <div className="flex justify-center md:justify-start ">
                    <span className="text-white text-[12px] md:text-[17px] md:py-[13px] py-[10px] md:px-[40px] px-[35px] bg-[#DB4444] rounded-[7px]">Apply Coupon</span>
                </div>
            </div>
            <div className="border border-black outline-none py-[25px] px-[20px] mx-[30px] md:mx-[0px] md:w-[470px] md:h-[374px]">
                <span className="font-medium text-[15px] md:text-[23px] ">Cart Total</span>
                <div className="pb-[16px] border-b border-b-gray-600 mt-[30px] md:mt-[60px] flex justify-between">
                    <span className="text-[12px] md:text-[17px]">Subtotal:</span>
                    <span className="text-[12px] md:text-[17px]">${subtotal}</span>
                </div>
                <div className="pb-[16px] border-b border-b-gray-600 mt-[16px] flex justify-between">
                    <span className="text-[12px] md:text-[17px]">Shipping:</span>
                    <span className="text-[12px] md:text-[17px]">Free</span>
                </div>
                <div className="pb-[16px] mb-[16px] mt-[16px] flex justify-between">
                    <span className="text-[12px] md:text-[17px]">Total:</span>
                    <span className="text-[12px] md:text-[17px]">${subtotal}</span>
                </div>
                <a href="/Home/Cart/Checkout">
                <div className="flex justify-center md:justify-center ">
                    <span className="text-white text-[12px] md:text-[17px] md:py-[13px] py-[10px] md:px-[40px] px-[35px] bg-[#DB4444] rounded-[7px]">Procees to checkout</span>
                </div>
                </a>
            </div>
        </div>
        
        <End />
        
        
        </>
    )
}
export default Cart;
