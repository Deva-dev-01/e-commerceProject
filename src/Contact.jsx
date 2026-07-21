import Navbar from "./Navbar";
import iconmail from "/images/iconmail.png"
import iconphone from "/images/iconphone.png"
import End from "./End";

function Contact(){
    return(
        <>
            <Navbar />

            <div className="ml-[41px] md:ml-[85px] mt-[30px] md:mt-[70px] mb-[20px] md:mb-[40px] ">
                <span className="text-[#7D8184] text-[12px] md:text-[17px]">Home&nbsp;/&nbsp;</span>
                <span className="text-[12px] md:text-[17px]">Contact</span>
            </div>


            <div className="mx-[41px] md:ml-[85px] flex flex-col md:flex-row gap-[40px] mb-[50px]">
                <div className="shadow-xl rounded-[20px] border">
                    <div className="mx-[35px] mt-[40px] mb-[51px] ">
                        <div className="pb-[32px] border-b border-b-black">
                            <div className="flex items-center mb-[15px]">
                                <img src={iconphone} alt="" className=" h-[30px] w-[40px] md:size-auto pr-[10px]" />
                                <h1 className="text-[15px] md:text-[17px] font-medium">Call To Us</h1>
                            </div>
                            <div className="mb-[3px]"><span className="text-[13px] md:text-[14px]">We are available 24/7, 7 days a week.</span></div>
                            <span className="text-[13px] md:text-[14px]">Phone: +8801611112222</span>
                        </div>
                        {/* <hr className=" " /> */}

                        <div className="pt-[32px]">
                            <div className="flex items-center mb-[15px]">
                                <img src={iconmail} alt="" className="h-[30px] w-[40px] md:size-auto pr-[10px]" />
                                <h1 className="text-[15px] md:text-[17px] font-medium">Write To Us</h1>
                            </div>
                            <div><span className="text-[13px] md:text-[14px]">Fill out our form and we will contact <br /> you within 24 hours.</span></div>
                            <div className="my-[10px]"><span className="text-[13px] md:text-[14px]">Emails: customer@exclusive.com</span></div>
                            <span className="text-[13px] md:text-[14px]">Emails: support@exclusive.com</span>
                        </div>
                    </div>

                </div>

                <div className="md:w-[1000px] shadow-xl rounded-[20px] border">
                    <div className="my-[40px] mx-[32px] ">
                        <div className="grid md:grid-cols-3 gap-[16px]">
                            <input type="textbox" placeholder="Your Name *" className="bg-[#F5F5F5] text-[12px] md:text-[16px] py-[13px] pl-[16px] md:pr-[118px] rounded-[12px] outline-none" />
                            <input type="text" placeholder="Your Email *" className="bg-[#F5F5F5] text-[12px] md:text-[16px] py-[13px] pl-[16px] md:pr-[118px] rounded-[12px] outline-none" />
                            <input type="text" placeholder="Your Phone *" className="bg-[#F5F5F5] text-[12px] md:text-[16px] py-[13px] pl-[16px] md:pr-[118px] rounded-[12px] outline-none" />
                        </div>
                        <textarea name="" id="" placeholder="Your Message" className="bg-[#F5F5F5] text-[12px] pt-[13px] pl-[16px] rounded-[12px] my-[32px] outline-none md:hidden" rows={5} cols={40}></textarea>
                        <textarea name="" id="" placeholder="Your Message" className="bg-[#F5F5F5] pt-[13px] pl-[16px] rounded-[12px] my-[32px] outline-none hidden md:block" rows={10} cols={123}  ></textarea>
                        
                        <div className="flex justify-center md:justify-end ">
                            <span className="text-white text-[12px] md:text-[17px] md:py-[13px] py-[10px] md:px-[40px] px-[35px] bg-[#DB4444] rounded-[7px]">Send Message</span>
                        </div>
                        
                    </div>
                </div>
            </div>
            <End />
        
        </>
    )
}
export default Contact;