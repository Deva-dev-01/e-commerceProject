import Navbar from "./Navbar";
import End from "./End";
import { CheckoutCard } from "./CheckoutCard.jsx";
import { useContext, useEffect, useState } from "react";
import { WishlistContext } from "./WishlistContext.jsx";

function Checkout(){

        const [data1,setData1]=useState([])
        const [data3,setData3]=useState({firstName:"",address:"",extra:"",city:"",phoneNumber:"",email:""})
        const [data2,setData2]=useState(0)
        const [data4,setData4]=useState()
        const [data5,setData5]=useState()
        const [data6,setData6]=useState()
        const [data7,setData7]=useState()
        const [data8,setData8]=useState()
        const [coupon,setCoupon]=useState("")
        const [payment,setPayment]=useState("")
        const [orderId,setOrderId]=useState()

            const {subtotal}=useContext(WishlistContext);
        
    
    useEffect(()=>{
                             const res = fetch("http://localhost:3000/Cart")
                                .then(res=>res.json())
                                .then(data=>setData1(data))
               
                },[])

        // data1.map((item)=>console.log( item.newprice.split('')))
        // data1.map((items)=>items.newprice.shift())
        // data1.map((items)=>items.newprice.join(''))

            // console.log(data1)

        
        // data2.map((string)=>setData2(string.shift()))
        let val=0;

        data1.forEach(obj => {

            const arr=obj.newprice.split('')
            arr.shift()
            

            let num =Number(arr.join(''))
            val= val+num*obj.Quantity;
            // console.log(num)
        })


        function required(key){
            // console.log(key)
            // console.log(data[key])

            if(key=="extra")  return true;

            if(data3[key].length==0){
                switch(key){
                    case "firstName" : setData4("Name is required.");
                                  break;
                    case "email" : setData5("email is required.");
                                    break;
                    case "phoneNumber" : setData6("phoneNumber is required.");
                                          break;
                    case "address" : setData7("address is required.");
                                       break;
                    case "city" : setData8("city is required");
                                    break;
                }
                return false;
            }else{
                switch(key){
                    case "firstName" : setData4();
                                  break;
                    case "email" : setData5();
                                    break;
                    case "phoneNumber" : setData6();
                                          break;
                    case "address" : setData7();
                                       break;
                    case "city" : setData8();
                                    break;
                }
                return true;
            }
             
        }

       

        function press(){
            
            const result=Object.keys(data3).map(data=>required(data)===false)   
                     
            if(result.some(data=> data==true)){
                return;
            }

            const res =  fetch("http://localhost:3000/billingDetails",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(data3)
        })
        
        .then(res=>res.json())
        .then(data=>console.log(data.data))





        const idArr=[];
        data1.map((obj)=>idArr.push(obj.id))
        
        const idStr=idArr.join('#')

        const quantityArr=[];
        data1.map((obj)=>quantityArr.push(obj.Quantity))
        const quantityStr=quantityArr.join(',')

        // console.log({productsId:idStr,quantity:quantityStr,total:'$'+String(val),payment:payment,couponCode:coupon})

        const responce =  fetch("http://localhost:3000/billingProducts",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({productsId:idStr,quantity:quantityStr,total:'$'+String(val),payment:payment,couponCode:coupon})
        })
        .then(responce=>responce.json())
        .then(data=>console.log(data.data))


        
    
        const ret =  fetch("http://localhost:3000/fetchingOrderId",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({productsId:idStr,quantity:quantityStr,total:'$'+String(val),payment:payment,couponCode:coupon})
        })
                    .then(ret=>ret.json())
                    .then(data=>setOrderId(data.id))
                    .then(console.log(orderId))

        
        const rete =  fetch("http://localhost:3000/linkingUserWithOrder",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({firstName:data3.firstName,phoneNumber:data3.phoneNumber,email:data3.email,orderId:orderId})
        })

        
        

        }

    return(
        <>
        <Navbar />
        <div className="ml-[41px] md:ml-[85px] mt-[30px] md:mt-[70px] mb-[20px] md:mb-[40px] ">
            <span className="text-[#7D8184] text-[12px] md:text-[17px]">Home&nbsp;/&nbsp;Cart&nbsp;/&nbsp;</span>
            <span className="text-[12px] md:text-[17px]">Checkout</span>
        </div>
        <div className="grid grid-rows-2 md:ml-[85px] md:mr-[40px] mx-[10px] gap-[110px] md:grid-cols-2 md:grid-rows-none md:mb-[150px]">
            <div className="">
                <h1 className="md:text-[40px]">Billing Details</h1>
                <div className="mt-[40px]">
                    <div><label htmlFor="Fname" className="text-[#7D8184] text-[12px] md:text-[17px] ">First Name<span className="text-[#DB4444]">*</span></label></div>
                    <button onChange={(e)=>setData3({...data3,firstName:e.target.value})} className="mt-[5px] "><input type="textbox" id="Fname" className="bg-[#F5F5F5] text-[12px] md:text-[16px] py-[13px] pl-[16px] md:pr-[270px] rounded-[5px] outline-none w-[300px] md:w-auto" /></button>
                    <div><span className="text-red-600 text-[14px] md:text-[16px]">{data4}</span></div>
                
                    <div className="mt-[35px]"><label htmlFor="St" className="text-[#7D8184] text-[12px] md:text-[17px]  ">Street Address<span className="text-[#DB4444]">*</span></label></div>
                    <button onChange={(e)=>setData3({...data3,address:e.target.value})} className="mt-[5px]"><input type="textbox" id="St" className="bg-[#F5F5F5] text-[12px] md:text-[16px] py-[13px] pl-[16px] md:pr-[270px] rounded-[5px] outline-none w-[300px] md:w-auto" /></button>
                    <div><span className="text-red-600 text-[14px] md:text-[16px] ">{data7}</span></div>

                    <div className="mt-[35px]"><label htmlFor="An" className="text-[#7D8184] text-[12px] md:text-[17px]">Apartment, floor, etc. (optional)</label></div>
                    <button onChange={(e)=>setData3({...data3,extra:e.target.value})} className="mt-[5px]"><input type="textbox" id="An" className="bg-[#F5F5F5] text-[12px] md:text-[16px] py-[13px] pl-[16px] md:pr-[270px] rounded-[5px] outline-none w-[300px] md:w-auto" /></button>
                    

                    <div className="mt-[35px]"><label htmlFor="City" className="text-[#7D8184] text-[12px] md:text-[17px]">Town/City<span className="text-[#DB4444]">*</span></label></div>
                    <button onChange={(e)=>setData3({...data3,city:e.target.value})} className="mt-[5px] "><input type="textbox" id="City" className="bg-[#F5F5F5] text-[12px] md:text-[16px] py-[13px] pl-[16px] md:pr-[270px] rounded-[5px] outline-none w-[300px] md:w-auto" /></button>
                    <div><span className="text-red-600 text-[14px] md:text-[16px]">{data8}</span></div>

                    <div className="mt-[35px]"><label htmlFor="Ph" className="text-[#7D8184] text-[12px] md:text-[17px]">Phone Number<span className="text-[#DB4444]">*</span></label></div>
                    <button onChange={(e)=>setData3({...data3,phoneNumber:e.target.value})} className="mt-[5px]"><input type="textbox" id="Ph" className="bg-[#F5F5F5] text-[12px] md:text-[16px] py-[13px] pl-[16px] md:pr-[270px] rounded-[5px] outline-none w-[300px] md:w-auto" /></button>
                    <div><span className="text-red-600 text-[14px] md:text-[16px]">{data6}</span></div>

                    <div className="mt-[35px]"><label htmlFor="Email" className="text-[#7D8184] text-[12px] md:text-[17px]">Email Address<span className="text-[#DB4444]">*</span></label></div>
                    <button onChange={(e)=>setData3({...data3,email:e.target.value})} className="mt-[5px]"><input type="textbox" id="Email" className="bg-[#F5F5F5] text-[12px] md:text-[16px] py-[13px] pl-[16px] md:pr-[270px] rounded-[5px] outline-none w-[300px] md:w-auto" /></button>
                    <div><span className="text-red-600 text-[14px] md:text-[16px]">{data5}</span></div>

                    <div className="flex items-center mt-[20px]">
                        <input type="checkbox" className="size-[15px] accent-[#DB4444]" />
                        <span className="pl-[10px] text-[12px] md:text-[17px]">Save this information for faster check-out next time</span>
                    </div> 
                </div>
            </div>

            <div className="flex items-center">
                <div>
                    
                    {   
                    
                                data1.map((item)=>(
                                                <>
                                                     <CheckoutCard id={item.id} image={item.image} star={item.star} name={item.name} newprice={item.newprice} oldprice={item.oldprice} keywords={item.keywords} quantity={item.Quantity} />
                    
                                                </>
                                            ))
                    
                                
                            }
                        

                    <div className="pb-[16px] border-b border-b-gray-600 mt-[30px] md:mt-[60px] flex justify-between">
                        <span className="text-[12px] md:text-[17px]">Subtotal:</span>
                        <span className="text-[12px] md:text-[17px]">${val}</span>
                    </div>
                    <div className="pb-[16px] border-b border-b-gray-600 mt-[16px] flex justify-between">
                        <span className="text-[12px] md:text-[17px]">Shipping:</span>
                        <span className="text-[12px] md:text-[17px]">Free</span>
                    </div>
                    <div className="pb-[16px] mb-[16px] mt-[16px] flex justify-between">
                        <span className="text-[12px] md:text-[17px]">Total:</span>
                        <span className="text-[12px] md:text-[17px]">${val}</span>
                    </div>

                    <div>
                        <input type="radio" name="payment" onClick={()=>setPayment("Bank")} className="mr-[5px]" />
                        <span className="text-[12px] md:text-[17px]">Bank</span>
                    </div>
                    <div className="md:mt-[10px]">
                        <input type="radio" name="payment" onClick={()=>setPayment("Cash on delivery")} className="mr-[5px]" />
                        <span className="text-[12px] md:text-[17px]">Cash on delivery</span>
                    </div>
                    <div className="flex justify-between h-[40px]  md:pr-[0px] md:my-[30px] md:h-[50px] my-[50px] md:my-[0px]">
                        <input onChange={(e)=>setCoupon(e.target.value)} type="textbox" placeholder="Coupon Code" className=" text-[12px] md:text-[16px] py-[13px] pl-[16px] md:pr-[90px] rounded-[7px] outline-none border border-black" />
                        <div className="flex justify-center md:justify-start ">
                            <span className="text-white text-[12px] md:text-[17px] md:py-[13px] py-[10px] md:px-[40px] px-[35px] bg-[#DB4444] rounded-[7px]">Apply Coupon</span>
                        </div>
                    </div>
                    <div className="flex ">
                            <button onClick={press} className="text-white text-[12px] md:text-[17px] md:py-[13px] py-[10px] md:px-[40px] px-[35px] bg-[#DB4444] rounded-[7px]">Place Order</button>
                        </div>
                    
                </div>
            </div>
        </div>
        <End />
        

        
        
        </>
    )
}
export default Checkout;