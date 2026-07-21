import Cart1 from "/images/Cart3.png"



export const CheckoutCard = ({id,image,star,name,newprice,oldprice,keywords,quantity}) => {
    // const img  = image;
// console.log(quantity)

const arr=newprice.split('')
            arr.shift()
            

            let num =Number(arr.join(''))
            
    return(

        <>
      
            <div className="flex justify-around items-center mb-[20px]">
                <div className="grid grid-cols-3 ">
                    
                        <div className="flex  items-center">
                            <img src={ image} alt="" className="size-[30px] md:size-[50px]" />
                            <span className="md:ml-[15px] text-[12px] md:text-[17px]">{name}</span>
                        </div>
                        <div className="justify-self-center">
                            <span>{quantity}</span>
                        </div>
                        <div>
                            <span className="text-[12px] md:text-[17px] " >{num*quantity}</span>
                        </div>
                    
                </div>
            </div>
        
        
        
        </>
    )
}