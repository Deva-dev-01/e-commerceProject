import Navbar from "./Navbar";
import Signupimage from "/images/Signupimage.png"
import Google from "/images/Google.png"
import End from "./End";
import { useEffect, useState } from "react";


function Signup(){


    const [data, setData] = useState({name:"",email:"",phoneNumber:"",password:""})
    const [data1,setData1]=useState()
    const [data2,setData2]=useState()
    const [data3,setData3]=useState()
    const [data4,setData4]=useState()
        function required(key){
            // console.log(key)
            // console.log(data[key])

            if(data[key].length==0){
                switch(key){
                    case "name" : setData1("Name is required.");
                                  break;
                    case "email" : setData2("email is required.");
                                    break;
                    case "phoneNumber" : setData3("phoneNumber is required.");
                                          break;
                    case "password" : setData4("password is required.");
                                       break;
                }
                return false;
            }else{
                switch(key){
                    case "name" : setData1();
                                  break;
                    case "email" : setData2();
                                    break;
                    case "phoneNumber" : setData3();
                                          break;
                    case "password" : setData4();
                                       break;
                }
                return true;
            }
        }

       

        function press(){
            // required(data.name)
            const result=Object.keys(data).map(data=>required(data)===false)   
            console.log(result)         
            if(result.some(data=> data==true)){
                return;
            }

            const res =fetch("https://e-commerceproject-1-9s8s.onrender.com/SignUp",{
                method:"POST",
                headers: {
                            "Content-Type": "application/json",
                         },
                body:JSON.stringify(data)
            }
           
        )

            // console.log(data);


        }



        // useEffect(()=>{
            
        // },[])

        // console.log(data1)




    return(
        <>
        
        <Navbar />
        <div className="my-[50px] md:mr-[135px] md:my-[100px] flex flex-col items-between md:flex-row justify-between">
            <div className="flex justify-center md:justify-start mb-[50px] md:mb-[0px]">
                <img src={Signupimage} alt="" className="size-[280px] md:size-auto" />
            </div>
            <div className="flex md:items-center justify-center">
                <div className="mx-[10px] md:mx-[0px]">
                    <h1 className=" text-[30px] md:text-[40px] font-medium mb-[18px]">Create an account</h1>
                    <div className="mb-[48px]"><span className="text-[14px] md:text-[17px] ">Enter your details below</span></div>
                    <div><input onChange={(e)=>setData({...data,name:e.target.value})} type="text" placeholder="Name" className="outline-none border-b border-b-black pr-[100px] md:pr-[225px] pb-[3px] text-[14px] md:text-[19px]"/></div>
                    <span className="text-red-600 text-[14px] md:text-[16px]">{data1}</span>
                    <div><input onChange={(e)=>setData({...data,email:e.target.value})} type="text" placeholder="Email" className="outline-none border-b border-b-black pr-[100px] md:pr-[225px] pb-[3px] text-[14px] md:text-[19px] mt-[40px] md:mt-[40px]"/></div>
                    <span className="text-red-600 text-[14px] md:text-[16px]">{data2}</span>
                    <div><input onChange={(e)=>setData({...data,phoneNumber:e.target.value})} type="text" placeholder="Phone Number" className="outline-none border-b border-b-black pr-[100px] md:pr-[225px] pb-[3px] text-[14px] md:text-[19px] mt-[40px]"/></div>
                    <span className="text-red-600 text-[14px] md:text-[16px]">{data3}</span>
                    <div><input onChange={(e)=>setData({...data,password:e.target.value})}  type="text" placeholder="Password" className="outline-none border-b border-b-black pr-[100px] md:pr-[225px] pb-[3px] text-[14px] md:text-[19px] mt-[40px]"/></div>
                    <span className="text-red-600 text-[14px] md:text-[16px]">{data4}</span>
                    <div className="flex justify-center mb-[20px] mt-[25px] md:mt-[50px]">
                        <button onClick={press} className="text-white py-[10px] md:py-[13px] px-[100px] md:px-[167px] bg-[#DB4444] rounded-[5px]">Create Account</button>
                    </div>
                    <div className="flex mt-[20px] mb-[40px] py-[10px] md:py-[13px] px-[60px] md:px-[125px] bg-white border border-[#7D8184] outline-none rounded-[5px]">
                        <img src={Google} alt="" className="size-[30px] md:size-auto" />
                        <span className=" pl-[10px] ">Sign up with Google</span>
                    </div>
                    <div className="flex justify-center">
                        <span>Already have account?</span>
                        <a href="/SignUp/Login"><span className="ml-[10px] hover:font-medium"><u>Log in</u></span></a>
                    </div>

                </div>
            </div>
        </div>

        <End />
        
        
        
        
        </>
    )
}
export default Signup;
