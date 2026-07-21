import Services1 from '/images/Services1.png'
import Services2 from '/images/Services2.png'
import Services3 from '/images/Services3.png'


function Services(){
    return(
        <>
        
            <div className="flex justify-center mb-[50px] md:my-[90px] ">

                <div className='flex justify-between w-[370px] md:w-[900px]'>

                    <div className="flex flex-col items-center">
                        <img className='size-[50px] md:size-auto ' src={Services1} alt="" />
                        <span className='text-[9px] md:text-[15px]'><b>FREE AND FAST DELIVERY</b></span>
                        <span className='text-[7px] md:text-[12px]'>Free delivery for all orders over $140</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <img className='size-[50px] md:size-auto ' src={Services2} alt="" />
                        <span className='text-[9px] md:text-[15px]'><b>24/7 CUSTOMER SERVICE</b></span>
                        <span className='text-[7px] md:text-[12px]'>Friendly 24/7 customer support</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <img className='size-[50px] md:size-auto ' src={Services3} alt="" />
                        <span className='text-[9px] md:text-[15px]'><b>MONEY BACK GUARANTEE</b></span>
                        <span className='text-[7px] md:text-[12px]'>We reurn money within 30 days</span>
                    </div>


                </div>


            </div>
        
        
        
        
        
        </>
    )
}

export default Services;