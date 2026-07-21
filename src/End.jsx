import send from '/images/send.png'
import Qr from '/images/Qr.png'
import GooglePlay from '/images/GooglePlay.png'
import appstore from  '/images/appstore.png'
import facebook from '/images/facebook.png'
import twitter from '/images/twitter.png'
import instagram from '/images/instagram.png'
import IconLinkedin from '/images/IconLinkedin.png'
import Group from '/images/Group.png'


function End(){

    return(
        <>
        
        <div className="bg-black  pt-60px  md:py-[20px] md:px-[80px] md:pt-[70px]">
            <div className='grid grid-cols-3 md:grid-cols-5 justify-items-center gap-[10px] md:gap-[0px]'>
                <div className="">
                    <h4 className="text-[18px] md:text-[30px] text-white"><b>Exclusive</b></h4>
                    <div className='mb-[10px]'><span className="text-white text-[14px] ">Subscribe</span></div>
                    <span className="text-white text-[11px]">Get 10% off your first order</span>
                    <div className='flex items-center mt-[8px]'> 
                        <input type="textbox" placeholder="Enter your email"  className='bg-black text-[9px] md:text-[13px] border-l border-t border-b py-[4px] md:py-[3px] pl-[8px] rounded-l-[4px] outline-none w-[120px]'/>
                        <div className='border-t border-r border-b py-[4px] md:py-[6px] rounded-r-[4px] pr-[5px] ml-[-2px] '><img className='size-[13px]' src={send} alt="" /></div>    
                    </div>
                </div>
                <div className="">
                    <div className='mb-[10px]'><span className="text-white text-[14px] ">Support</span></div>
                    <div><span className="text-white text-[11px]">111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.</span></div>
                    <div><span className="text-white text-[11px]">exclusive@gmail.com</span></div>
                    <div><span className="text-white text-[11px]">+88015-88888-9999</span></div>

                </div>
                <div className="">
                    <div className='mb-[10px]'><span className="text-white text-[14px]">Account</span></div>
                    <div><span className="text-white text-[11px]">My Account</span></div>
                    <div><span className="text-white text-[11px]">Login / Register</span></div>
                    <div><span className="text-white text-[11px]">Cart</span></div>
                    <div><span className="text-white text-[11px]">Wishlist</span></div>
                    <div><span className="text-white text-[11px]">Shop</span></div>
                </div>
                <div className="">
                    <div className='mb-[10px]'><span className="text-white text-[14px]">Quick Link</span></div>
                    <div><span className="text-white text-[11px]">Privacy Policy</span></div>
                    <div><span className="text-white text-[11px]">Terms Of Use</span></div>
                    <div><span className="text-white text-[11px]">FAQ</span></div>
                    <div><span className="text-white text-[11px]">Contact</span></div>

                </div>
                <div className="">
                    <div className='mb-[10px]'><span className="text-white text-[14px] ">Download App</span></div>
                    <div><span className="text-white text-[8px]">Save $3 with App New User Only</span></div>
                    <div className='grid grid-cols-2 mb-[10px]'>
                        <img src={Qr} alt="" />
                        <div className='grid grid-rows-2'>
                            <img src={GooglePlay} alt="" />
                            <img src={appstore} alt="" />
                        </div>
                    </div>

                    <div className='flex justify-between md:justify-around'>
                        <img src={facebook} alt="" className='size-[20px]' />
                        <img src={twitter} alt="" className='size-[20px]' />
                        <img src={instagram} alt="" className='size-[20px]' />
                        <img src={IconLinkedin} alt="" className='size-[20px]' />
                    </div>
                    

                </div>
            </div>
            <div className='flex justify-center mt-[50px] items-center'>
                <img src={Group} alt="" className='size-[10px]' />
                <span className='text-white text-[10px] pl-[5px]'>Copyright Rimel 2022. All right reserved</span>
            </div>

        </div>
        
        
        
        
        </>
    )
}

export default End;