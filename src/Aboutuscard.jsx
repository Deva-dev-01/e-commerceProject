import { useEffect } from "react";





function Aboutuscard({id,image,value,text}){

 





    return(
        <>
            
        
                <div className="border border-[#7D8184] rounded-[10px] flex flex-col justify-between items-center md:h-[209px] py-[20px]">
                    <img src={image} alt="" className="size-[50px] md:size-auto" />
                    <h1 className="text-[20px] md:text-[35px]"><b>{value}</b></h1>
                    <span className="text-[11px] md:text-[15px]">{text}</span>
                </div>

        
        
        
        
        </>
    )
}
export default Aboutuscard;