import image6 from "/images/iphone.png"
import image7 from "/images/Dropright.png"
import "./design.css"
import image5 from "/images/Search.png"




function Hero(){

    // const arr=[{id:1,data:"hello1"},{id:2,data:"hello2"},{id:3,data:"hello3"}]
    // console.log(arr.filter((item)=>item.id==2))
    
    return(
        <>
        <div className="flex justify-center md:hidden items-center mb-[2px] ">

            <div><input className="  bg-neutral-100 text-[12px] pr-[50px] py-[10px] pl-[10px] rounded-l-[6px] outline-none" type="textbox" placeholder="What are you looking for?"/></div>
            <div className="bg-neutral-100 py-[6.5px] rounded-r-[6px]"><img src={image5} alt="" className="h-[25px] ml-[-3px]  "/></div>

        </div>
        <div className=" md:flex justify-between md:pr-[110px]">

        <div className=" hidden md:flex border-r border-black pr-[50px]">
            <div className="hidden md:flex flex-col justify-around ml-[85px]">

                <div className="flex justify-between w-[200px]">
                    <span>Woman’s Fashion</span>
                    <img src={image7} alt="" />
                </div>

                <div className="flex justify-between w-[200px]">
                    <span>Men’s Fashion</span>
                    <img src={image7} alt="" />
                </div>

                
                <div ><span className="">Electronics</span></div>
                <div ><span>Home & Lifestyle</span></div>
                <div ><span>Sports & Outdoor</span></div>
                <div ><span>Baby’s & Toys</span></div>
                <div ><span>Groceries & Pets</span></div>
                <div ><span>Health & Beauty</span></div>
                
                

            </div>

        </div>

            <div className="flex justify-center">

                <img src={image6} alt="" className="mb-[10px] mt-[3px] md:mt-[40px] mx-[5px] w-[350px] md:w-[892px] md:h-[344px]" />

            </div>

        </div>
        
        
        
        
        
        
        </>

    )


}

export default Hero;
