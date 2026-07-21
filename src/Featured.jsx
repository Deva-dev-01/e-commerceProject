import new1 from "/images/new1.png"
import new2 from "/images/new2.png"
import new3 from "/images/new3.png"
import new4 from "/images/new4.png"


function Featured(){



    return(

        <>
        
            <div className="flex ml-[14px] mt-[30px]  mb-[10px] md:ml-[85px] md:mt-[90px] items-center ">
                    <div className="w-[10px] md:w-[20px] h-[20px] md:h-[40px] rounded-[2px] bg-[#DB4444] md:rounded-[5px]"></div>
                    <span className="text-[#DB4444] text-[9px] ml-[6px] md:text-[15px] "><b>Featured</b></span>
                </div>

                <div className="mb-[20px]">
                    <span className="ml-[14px] text-[30px] md:ml-[85px] md:text-[44px] mb-[20px]"><b>New Arrival</b></span>
                </div>
        


                <div className=" flex justify-center items-center md:ml-[71px]  md:mr-[40px]">
                    <div className="grid justify-items-center md:grid-cols-2 gap-[20px] md:gap-[40px] mb-[40px] ">

                        <img className="h-[325px] w-[300px] md:h-full md:w-full" src={new1} alt="" />
                        <div className="grid grid-rows-2 w-[346px] gap-[20px] md:w-full md:gap-[40px]">

                            <img className="w-[350px] md:w-full" src={new2} alt="" />
                            <div className="grid grid-cols-2 gap-[20px] md:gap-[40px]">
                                <img className="size-[170px] md:size-full" src={new3} alt="" />
                                <img className="size-[170px] md:size-full" src={new4} alt="" />
                            </div>

                        </div>

                    </div>

                </div>
        
        
        
        
        
        
        </>
    )
}

export default Featured;