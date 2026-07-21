import Navbar from "./Navbar";
import Sideimage from "/images/Sideimage.png"
import { companydetails } from "./product";
import Aboutuscard from "./Aboutuscard";
import { employees } from "./product";
import Employeecard from "./Employeecard";
import Services from "./Services";
import End from "./End";

function About(){

    

    return(
        <>
        
        <Navbar />
        <div className="ml-[41px] md:ml-[85px] mt-[30px] md:mt-[70px] mb-[20px] md:mb-[40px] ">
            <span className="text-[#7D8184] text-[12px] md:text-[17px]">Home&nbsp;/&nbsp;</span>
            <span className="text-[12px] md:text-[17px]">About</span>
        </div>
        <div className="block md:flex justify-between items-center ">
            <div>
                <h1 className="text-[32px] md:text-[55px] ml-[40px] md:ml-[85px] mb-[20px]"><b>Our Story</b></h1>
                <p className="text-[11px] md:text-[18px] ml-[42px] md:ml-[85px] mb-[14px]">Launced in 2015, Exclusive is South Asia’s premier online shopping <br /> makterplace with an active presense in Bangladesh. Supported <br /> by wide range of tailored marketing, data and service solutions, <br /> Exclusive has 10,500 sallers and 300 brands and serves 3 <br /> millioons customers across the region. <br /> </p>
                <p className="text-[11px] md:text-[18px] ml-[42px] md:ml-[85px] mb-[40px]">Exclusive has more than 1 Million products to offer, growing at a <br /> very fast. Exclusive offers a diverse assotment in categories <br /> ranging  from consumer.</p>
            </div>
            <img src={Sideimage} alt="" className="size-[300px] md:h-[609px] md:w-[705px] ml-[41px] mb-[40px]" />
            
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-[20px] md:gap-[100px] mx-[40px] md:mx-[85px] my-[50px] md:my-[100px]">
            {
                companydetails.map((items)=>(
                        <>
                            <Aboutuscard id={items.id} image={items.image} value={items.value} text={items.text} />
                        </>

                ))
            }

        </div>


        <div className="flex justify-center  mx-[40px] md:mx-[85px] mb-[90px] "> 
            <div className="grid grid-rows-3 md:grid-rows-none md:grid-cols-3 gap-[40px] md:gap-[100px]  ">
            
                {
                    employees.map((items)=>(
                            <>
                                <Employeecard id={items.id} image={items.image} name={items.name} position={items.position} />
                            </>

                    ))
                }
            
            </div>
        </div>   

        <Services />
        <End />
        
        </>
    )
}
export default About;