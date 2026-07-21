import React from 'react'
import BBC1 from "/images/BBC1.png"
import BBC2 from "/images/BBC2.png"
import BBC3 from "/images/BBC3.png"
// import BBC4 from "/images/BBC4.png"
import Camera from "/images/Camera.png"
import BBC5 from "/images/BBC5.png"
import BBC6 from "/images/BBC6.png"
import image5 from "/images/Search.png"

const Categories= () => {
        return(
            <div>

                <div className="flex ml-[14px] mt-[30px]  mb-[10px] md:ml-[85px] md:mt-[90px] items-center ">
                    <div className="w-[10px] md:w-[20px] h-[20px] md:h-[40px] rounded-[2px] bg-[#DB4444] md:rounded-[5px]"></div>
                    <span className="text-[#DB4444] text-[9px] ml-[6px] md:text-[15px] "><b>Categories</b></span>
                </div>

                <div className="mb-[20px] flex justify-between items-center md:items-start  md:w-[1409px]">
                    <span className="ml-[14px] text-[30px] md:ml-[85px] w-[150px] md:w-[420px]  md:text-[44px] mb-[20px]"><b>Browse By Category</b></span>
                    
                </div>

                    <div className='flex md:justify-between md:ml-[88px] md:mr-[40px]'>
                        <div className=' ml-[14px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[15px] md:gap-[57px] mb-[40px]'>

                            <img src={BBC1} alt="" />
                            <img src={BBC2} alt="" />
                            <img src={BBC3} alt="" />
                            <img src={Camera} alt="" className='' />
                            <img src={BBC5} alt="" />
                            <img src={BBC6} alt="" />

                        </div>


                    </div>

                <hr className=''/>






            </div>






        )






}

export default Categories ;