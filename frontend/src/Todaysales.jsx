// import Cart1 from "/images/Cart1.png"
// import Cart2 from "/images/Cart2.png"
// import Cart3 from "/images/Cart3.png"
// import Cart4 from "/images/Cart4.png"
// import star1 from "/images/fsale.png"
// import star2 from "/images/ssale.png"
// import star3 from "/images/tsale.png"
// import star4 from "/images/sale4.png"
import image5 from "/images/Search.png"
import Card from "./Card"

import Cart1 from "/images/Cart1.png"
import star1 from "/images/fsale.png"
import { flashsales } from "./product"
import { createContext, useEffect, useState } from "react"
function Todaysales(){

    const [data, setData]= useState("")

    const [filtersData,setFilterData] = useState([])

// console.log(flashsales.map((items)=>items.image))




    function Filter(){

        const arr =[]
// console.log(data)

    //    console.log(flashsales.filter((items)=>items.key.map((words)=>{words==data})) )

//    console.log(flashsales.map((card)=>(card.key.filter((items)=>items===data))))
//    const filterData = data1.map((obj)=>obj.keywords.join.map((card)=>(card.key.find((items)=>items==data.toLowerCase()?(arr.push(card)):null))))

   const filterData = data1.map((obj)=>obj.keywords.split(',').find((items)=>items==data.toLowerCase()?(arr.push(obj)):null))
        // console.log(filterData,"mes")   
        // console.log(filterData.filter((items)=>items.length>=1))
// setFilterData(filterData)
// setFilterData
// arr.push(filterData)

setFilterData(arr)
//  console.log(arr)
    }
    const [data1,setData1]=useState([])

    useEffect(()=>{
                 const res = fetch("http://localhost:3000/Todaysales")
                    .then(res=>res.json())
                    .then(data=>setData1(data))
   
    },[])
    
    // console.log(data1);
    // objkey.find((items)=>items==temp.toLowerCase()?(arr.push(obj)):null) .map((objkey)=>console.log(objkey))



    return(

        <>
        
        <div>

            <div className="flex ml-[14px] mt-[30px]  mb-[10px] md:ml-[85px] md:mt-[140px] items-center ">
                <div className="w-[10px] md:w-[20px] h-[20px] md:h-[40px] rounded-[2px] bg-[#DB4444] md:rounded-[5px]"></div>
                <span className="text-[#DB4444] text-[9px] ml-[6px] md:text-[15px] "><b>Today's</b></span>
            </div>

            <div className="mb-[20px] flex justify-between items-start  md:w-[1409px]">
                <span className="ml-[14px] text-[30px] md:ml-[85px] md:text-[44px] mb-[20px]"><b>Flash Sales</b></span>
                <div className="flex  md:hidden items-center mb-[2px] ">
                
                    <div><input
                    
                        onChange={(e)=>setData(e.target.value)}

                    className="  bg-neutral-100 text-[12px] pr-[12px] py-[10px] pl-[10px] rounded-l-[6px] outline-none" type="textbox" placeholder="Search"/></div>
                    <button onClick={Filter}>
                        <div className="bg-neutral-100 py-[6.5px] rounded-r-[6px]">
                            <img src={image5} alt="" className="h-[25px] ml-[-3px]  "/>
                        </div>
                    </button>
                
                </div>
                <div className="hidden md:flex items-center">
                    <input

                        onChange={(e)=>setData(e.target.value)}
                    
                    className="bg-neutral-100 text-[15px] md:pr-[75px] py-[10px] pl-[10px] rounded-l-[6px] outline-none hidden md:block" type="textbox" placeholder="Search"/>
                    <button onClick={Filter} className="outline-none">
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
                      filtersData.length>0 ? <>
                        <div className=" md:flex  md:justify-between md:ml-[71px] md:mr-[40px]">
                            <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4  md:gap-[40px] mb-[40px] md:w-[1409px] ">

                        {filtersData.map((items)=>(

                            <>
                               <Card id={items.id} image={items.image} star={items.star} name={items.name} newprice={items.newprice} oldprice={items.oldprice} keywords={item.keywords} />
                            
                            </>
                        )) } 
                            </div>
                        </div> 
                         </> : <>
                            <div className='flex justify-center'>
                                    <b><h1 className='text-[22px]'>No Products Found</h1></b>
                            </div>
                            
                            </>

                    }    

{/* 
                    {filtersData.map((items)=>{
<>
                               <Card key={items.id} image={items.image} star={items.star} name={items.name} newprice={items.newprice} oldprice={items.oldprice} />
                            
                            </>
                    })} */}
                     
                

                

            <div className="flex justify-center my-[50px]">
                <span className="text-white py-[13px] px-[40px] bg-[#DB4444] rounded-[7px]">View All Products</span>
            </div>

            <hr className=""/>














        </div>
        
        
        
        

        
        </>








    )



}

export default Todaysales;

// export const cardRecord = createContext(0);