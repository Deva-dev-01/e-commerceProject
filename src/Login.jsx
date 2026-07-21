import Navbar from "./Navbar";
import Signupimage from "/images/Signupimage.png"
// import Google from "/images/Google.png"
import End from "./End";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Login(){

    const [data,setData]=useState({email:"",password:""})
    const [data1,setData1]=useState()
    const [data2,setData2]=useState()
    const [data3,setData3]=useState()




    function required(key){
            // console.log(key)
            // console.log(data[key])

            if(data[key].length==0){
                switch(key){
                    case "email" : setData2("email is required.");
                                    break;
                    case "password" : setData3("password is required.");
                                       break;
                }
                return false;
            }else{
                switch(key){
                    
                    case "email" : setData2();
                                    break;
                    case "password" : setData3();
                                       break;
                }
                return true;
            }
        }



    // console.log(data);
        const navigate = useNavigate();

    function press(){
        const result=Object.keys(data).map(data=>required(data)===false)   
            console.log(result)         
            if(result.some(data=> data==true)){
                return;
            }

       const res =  fetch("http://localhost:3000/Login",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(data)
        })
        
        .then(res=>res.json())
        .then(data=>setData1(data.data))
        // console.log(ans)

        if(data1=="Logged In"){
            navigate("/")
        }
    }
    useEffect(()=>{

        
        if(data1=="Logged In"){
            navigate("/")
        }

    },[data1])

console.log(data1)
    return(
        <>
        <Navbar />
        <div className="my-[50px] md:mr-[135px] md:my-[100px] flex flex-col items-between md:flex-row justify-between">
            <div className="flex justify-center md:justify-start mb-[50px] md:mb-[0px]">
                <img src={Signupimage} alt="" />
            </div>
            <div className="flex md:items-center justify-center">
                <div className="mx-[10px] md:mx-[0px]">
                    <h1 className="text-[30px] md:text-[40px] font-medium mb-[18px]">Log in to Exclusive</h1>
                    <div className="mb-[48px]"><span className="text-[14px] md:text-[17px] ">Enter your details below</span></div>
                    
                    <div><input onChange={(e)=>setData({...data,email:e.target.value})} type="text" placeholder="Email" className="outline-none border-b border-b-black pr-[100px] md:pr-[225px] pb-[3px] text-[14px] md:text-[19px] "/></div>
                    <span className="text-red-600 text-[14px] md:text-[16px]">{data2}</span>
                    <div><input onChange={(e)=>setData({...data,password:e.target.value})} type="text" placeholder="Password" className="outline-none border-b border-b-black pr-[100px] md:pr-[225px] pb-[3px] text-[14px] mt-[30px] md:mt-[40px] md:text-[19px]"/></div>
                    <span className="text-red-600 text-[14px] md:text-[16px]">{data3}</span>

                    <div className="flex justify-between items-center mb-[20px] mt-[50px]">
                    
                                <button onClick={press}><span className="text-white py-[8px] px-[30px] md:py-[13px] md:px-[60px] bg-[#DB4444] rounded-[5px]">Log in</span></button>
                            
                            <span className="text-[15px] md:text-[17px] text-[#DB4444]">Forget Password?</span>
                    </div>

                    <div className="mt-[40px] text-center text-[17px] md:text-[20px] text-red-600">{data1}</div>

                    <button>
                        <div className="flex mt-[20px] mb-[40px] py-[10px] md:py-[13px] px-[60px] md:px-[125px] bg-white border border-[#7D8184] outline-none rounded-[5px]">
                            <span className=" pl-[10px] ">Login with phone Number</span>
                        </div>
                    </button>

                </div>
            </div>
        </div>

        <End />
        
        
        
        
        </>
    )
}
export default Login;