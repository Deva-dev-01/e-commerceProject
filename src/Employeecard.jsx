import Linkedinblack from "/images/Linkedinblack.png"
import instagramblack from "/images/instagramblack.png"
import Twitterblack from "/images/Twitterblack.png"
function Employeecard({id,image,name,position}){
    return(
        <>
        
        <div >
            <img src={image} alt="" className="h-[270px] w-[220px] md:h-[370px] md:w-[320px]" />
            <h1 className="text-[20px] md:text-[27px] mt-[15px] md:mb-[3px]"><b>{name}</b></h1>
            <div className="mb-[7px]"><span className="text-[12px] md:text-[15px] ">{position}</span></div>
            <div className="flex ">
                <img src={Linkedinblack} alt="" className="size-[18px] size-auto" />
                <img src={instagramblack} alt="" className="px-[10px] size-[18px] size-auto" />
                <img src={Twitterblack} alt="" className="size-[18px] size-auto" />
            </div>
        </div>
        
        
        </>
    )
}
export default Employeecard;