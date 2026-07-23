import Card from './Card'
import speaker from "/images/speaker.png"
import { bestselling } from './product';
import image5 from "/images/Search.png"
import { useEffect, useState } from 'react';
function Products(){

        const [data,setData]=useState("");
        const [data1,setData1]=useState([]);
        const [filterData,setFilterData]=useState([])
        


        function Filter(){
            const arr=[];
            data1.map((obj)=>obj.keywords.split(',').find((items)=>items==data.toLowerCase()?(arr.push(obj)):null))
            setFilterData(arr);
            
        }
        
        useEffect(()=>{
            const res = fetch("https://e-commerceproject-1-9s8s.onrender.com/Products")
                .then(res=>res.json())
                .then(data=>setData1(data))
        },[])


    return(

        <>
        
        
            <div className="flex ml-[14px] mt-[30px]  mb-[10px] md:ml-[85px] md:mt-[90px] items-center ">
                    <div className="w-[10px] md:w-[20px] h-[20px] md:h-[40px] rounded-[2px] bg-[#DB4444] md:rounded-[5px]"></div>
                    <span className="text-[#DB4444] text-[9px] ml-[6px] md:text-[15px] "><b>This Month</b></span>
                </div>

                <div className="mb-[20px] flex justify-between items-center md:items-start md:w-[1409px]">
                    <span className="ml-[14px] text-[30px] md:ml-[85px] md:text-[44px] mb-[20px] w-[200px]  w-[200px] md:w-0 md:whitespace-nowrap"><b>Best Selling Products</b></span>
                    <div className="flex  md:hidden items-center mb-[2px] ">
                                                        
                                                            <div><input
                                                                    onChange={(e)=>setData(e.target.value)}
                                                            
                                                            className="  bg-neutral-100 text-[12px] pr-[12px] py-[10px] pl-[10px] rounded-l-[6px] outline-none" type="textbox" placeholder="Search"/></div>
                                                            <button onClick={Filter} ><div className="bg-neutral-100 py-[6.5px] rounded-r-[6px]"><img src={image5} alt="" className="h-[25px] ml-[-3px]  "/></div></button>
                                                        
                    </div>
                    <div className="hidden md:flex items-center">
                                        <input
                    
                                            onChange={(e)=>setData(e.target.value)}
                                        
                                        className="bg-neutral-100 text-[15px] md:pr-[75px] py-[10px] pl-[10px] rounded-l-[6px] outline-none hidden md:block" type="textbox" placeholder="Search"/>
                                        <button onClick={Filter} className='outline-none' >
                                            <div className="bg-neutral-100 rounded-r-[6px] py-[8.75px] ml-[-3px]">
                                                <img src={image5} alt="" className=" hidden md:block h-[25px]  ml-[-3px] "/>
                                            </div>
                                        </button>
                    </div>
            
                </div>

                
        
                

                        {
                            data.length==0 ? <>
                        <div className=" md:flex md:justify-between md:ml-[71px] md:mr-[40px] mb-[40px] ">
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 md:gap-[40px] mb-[40px] md:w-[1409px] ">
                            {data1.map((item) =>(
                                <>
                                    <Card id={item.id} image={item.image} star={item.star} name={item.name} newprice={item.newprice} oldprice={item.oldprice} keywords={item.keywords} quantity={1} />
                                </>
                            ))} 
                            </div>
                        </div> </>:
                          filterData.length>0? <>
                           <div className=" md:flex md:justify-between md:ml-[71px] md:mr-[40px] mb-[40px] ">
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 md:gap-[40px] mb-[40px] md:w-[1409px] ">
                            {filterData.map((item) =>(
                                <>
                                    
                       
                                            <Card id={item.id} image={item.image} star={item.star} name={item.name} newprice={item.newprice} oldprice={item.oldprice} keywords={item.keywords} />
                                        
                                        
                                </>
                            ))  }
                            </div>
                        </div>
                        </>:<>
                            <div className='flex justify-center'>
                                    <b><h1 className='text-[22px]'>No Products Found</h1></b>
                            </div>
                            
                            </>
                        }





                       {/* {
                            bestselling.map((item) =>(
                                <>
                                    <Card key={item.id} image={item.image} star={item.star} name={item.name} newprice={item.newprice} oldprice={item.oldprice} />
                                </>
                            ))
                       }
                        */}

                    
                       
                        

            
            <div className='flex justify-center my-[40px]'>
                <div className="flex"><span className="text-white py-[13px] px-[40px] bg-[#DB4444] rounded-[7px] mr-[14px] ">View All</span></div>
            </div>

            <div className="flex justify-center">
            
                            <img src={speaker} alt="" className="mb-[10px] mt-[3px] mx-[5px] w-[350px] md:w-[1367px] md:h-[516px]" />
            
                        </div>
        
        
        
        
        
        
        
        
        </>






    )
}

export default Products;
