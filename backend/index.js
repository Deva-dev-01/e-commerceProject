import express from "express"
import { dbCon } from "./data.js";
import cors from "cors"
const app = express();


app.use(express.json())

app.use(cors())

const arr = ["1","2","3"]
const obj ={arr}




// app.get("/api",(req,res)=> {
//     const query = "Select * from customer_tbl ;"
//         dbCon.query(query,(err,resl)=>{

//             if(err) console.log(err)

//                 res.send(resl)
//         })

// })





app.post("/add",(req,res)=> {

            console.log(req.body)

            const{id,username,password} = req.body;


    const query = "insert into customer_tbl(id,username,password) values(?,?,?);"
        dbCon.query(query,[id,username,password],(err,resl)=>{

            if(err) console.log(err)

                res.send("added")
        })

})










// app.post("/include",(req,res)=>{

//         console.log(req.body);

//         const {id,descriptions,ratings}=req.body;

//         const statement="insert into product_details(id,descriptions,ratings) values(?,?,?)"
//         dbCon.query(statement,[id,descriptions,ratings],(err,resl)=>{

//             if(err) console.log(err)

//             res.send("ADDED")

//         })


// })


app.put("/update-product",(req,res)=>{

    const {id,new_name,new_price}=req.body;
    console.log(new_name)

    const statement=`update product_tbl set price=coalesce(?,price),name=coalesce(?,name) where id=?`
    dbCon.query(statement,[new_price,new_name,id],(err,resl)=>{

        if(err) console.log(err)

        res.send(resl)

    })


})

app.delete("/delete-product",(req,res)=>{

        const {id}=req.body;
        const del="delete from product_tbl where id=?"
        dbCon.query(del,[id],(err,resl)=>{
                if(err) console.log(err)
                
                res.send("DELETED");
        })

})


app.post("/SignUp",(req,res)=>{
console.log(req.body)
    const {name,email,phoneNumber,password}=req.body;

    const statements="insert into user_tbl(name,email,phone_number,password) values(?,?,?,?)"
    dbCon.query(statements,[name,email,phoneNumber,password],(err,result)=>{

        if(err) console.log(err)

        res.send("Account Created")
    })
})


app.post("/Login",(req,res)=>{
    console.log(req.body)
    const {email,password}=req.body;
    const state="Select * from user_tbl where email=? and password=? ;"

    dbCon.query(state,[email,password],(err,result)=>{
        if(err) console.log(err);
            // console.log(result.length)
            // console.log(result[0])
            // console.log(result[0].password)
            
            
            const data ={
                            data:""
                        }
            if(result.length==0){
                data.data="User Not Found !!!";
                res.send(JSON.stringify(data))
                // return;
            }else if(result[0].password===password){
                data.data="Logged In";
                res.send(JSON.stringify(data))
            }

        // res.send(result)
        // console.log(result)
    })
})


// app.get("/Todaysales",(req,res)=>{
//     const querye = "Select * from flash_sales_details ;"
//         dbCon.query(querye,(err,resl)=>{

//             if(err) console.log(err)

//                 // console.log(resl)
//                 res.send(resl)
//         })
// })



app.get("/Todaysales", (req, res) => {
    const querye = "Select * from flash_sales_details;"
    dbCon.query(querye, (err, res1) => {
        if (err) {
            console.log(err)
            return res.status(500).send({ error: err.message })
        }
        res.send(res1)
    })
})


app.get("/Products",(req,res)=>{
    const querye = "Select * from best_sellings ;"
        dbCon.query(querye,(err,resl)=>{

            if(err) console.log(err)

                // console.log(resl)
                res.send(resl)
        })
})

app.get("/Ourproducts",(req,res)=>{
    const querye = "Select * from exploreour ;"
        dbCon.query(querye,(err,resl)=>{

            if(err) console.log(err)

                // console.log(resl)
                res.send(resl)
        })
})

app.post("/getWishlist",(req,res)=>{
console.log(req.body)
    const {id,image,star,name,newprice,oldprice,keywords,quantity}=req.body;

    const statements="insert into wish_list(id,image,star,name,newprice,oldprice,keywords,Quantity) values(?,?,?,?,?,?,?,?)"
    dbCon.query(statements,[id,image,star,name,newprice,oldprice,keywords,quantity],(err,result)=>{

        if(err) console.log(err)

        const data ={
                        data:""
                    }
        if(result.affectedRows==1){
            data.data="Added To Wishlist"
            res.send(JSON.stringify(data))
        }else{
            data.data="NOT Added To Wishlist ,'RETRY!!!'"
            res.send(JSON.stringify(data))
        }
    })
})

app.get("/Wishlist",(req,res)=>{
    const querye = "Select * from wish_list ;"
        dbCon.query(querye,(err,resl)=>{

            if(err) console.log(err)

                // console.log(resl)
                res.send(resl)
        })
})

app.get("/Navbar",(req,res)=>{
    const querye = "Select count(*) as wishlist from wish_list ;"
        dbCon.query(querye,(err,resl)=>{
            console.log(resl)
            if(err) console.log(err)

            const data ={
                            wishlist:resl[0].wishlist
                        }

                // console.log(resl)
                res.send(data)
        })
})

app.get("/Navbar1",(req,res)=>{
    const querye = "Select count(*) as cart from cart ;"
        dbCon.query(querye,(err,resl)=>{
            console.log(resl)
            if(err) console.log(err)

            const data ={
                            cart:resl[0].cart
                        }

                // console.log(resl)
                res.send(data)
        })
})

app.post("/getCart",(req,res)=>{
console.log(req.body)
    const {id,image,star,name,newprice,oldprice,keywords,quantity}=req.body;
    

    const statements="insert into cart(id,image,star,name,newprice,oldprice,keywords,Quantity) values(?,?,?,?,?,?,?,?)"
    dbCon.query(statements,[id,image,star,name,newprice,oldprice,keywords,quantity],(err,result)=>{

        if(err) console.log(err)

        const data ={
                        data:""
                    }
        if(result.affectedRows==1){
            data.data="Added To Cart"
            res.send(JSON.stringify(data))
        }else{
            data.data="NOT Added To Cart ,'RETRY!!!'"
            res.send(JSON.stringify(data))
        }
    })
})

app.get("/Cart",(req,res)=>{
    const querye = "Select * from cart ;"
    
        dbCon.query(querye,(err,resl)=>{

            if(err) console.log(err)

                // console.log(resl)
                res.send(resl)
        })
})

app.post("/removeCart",(req,res)=>{
    // console.log(req)
    const state="delete from cart where id=?"
    const {id}=req.body;
    dbCon.query(state,[id],(err,result)=>{
        if(err) console.log(err)
            res.send("Deleted")
    })
})

app.post("/removeWishlist",(req,res)=>{
    // console.log(req)
    const state="delete from wish_list where id=?"
    const {id}=req.body;
    dbCon.query(state,[id],(err,result)=>{
        if(err) console.log(err)
            res.send("Deleted")
    })
})

app.post("/productCount",(req,res)=>{
    const {count,id} = req.body;
    const query="update cart set Quantity=? where id=?"
    dbCon.query(query,[count,id],(err,result)=>{
        if(err) console.log(err)
            res.send("Updated")
    })
})

app.post("/billingDetails",(req,res)=>{
console.log(req.body)
    const {firstName,address,extra,city,phoneNumber,email}=req.body;

    const statements="insert into user_details(firstName,address,extra,city,phoneNumber,email) values(?,?,?,?,?,?)"
    dbCon.query(statements,[firstName,address,extra,city,phoneNumber,email],(err,result)=>{

        if(err) console.log(err)

        const data ={
                        data:""
                    }
        if(result.affectedRows==1){
            data.data="Billing details added"
            res.send(JSON.stringify(data))
        }else{
            data.data="Billing details are not added ,'RETRY!!!'"
            res.send(JSON.stringify(data))
        }
    })
})

app.post("/billingProducts",(req,res)=>{
console.log(req.body)
    const {productsId,quantity,total,payment,couponCode}=req.body;

    const statements="insert into billing_products(productsId,quantity,total,payment,couponCode) values(?,?,?,?,?)"
    dbCon.query(statements,[productsId,quantity,total,payment,couponCode],(err,result)=>{

        if(err) console.log(err)

        const data ={
                        data:""
                    }
        if(result.affectedRows==1){
            data.data="Billing products details added"
            res.send(JSON.stringify(data))
        }else{
            data.data="Billing products details are not added ,'RETRY!!!'"
            res.send(JSON.stringify(data))
        }
        // console.log(result)
    })
})

app.post("/fetchingOrderId",(req,res)=>{
    const {productsId,quantity,total,payment,couponCode}=req.body;
    const querye = "Select orderId from billing_products where productsId=? and quantity=? and total=? and payment=? and couponCode=? ;"
        dbCon.query(querye,[productsId,quantity,total,payment,couponCode],(err,resl)=>{
            // console.log(resl)
            if(err) console.log(err)

            const data ={
                            id:resl[0].orderId
                        }

                // console.log(resl)
                res.send(data)
        })
})



app.post("/linkingUserWithOrder",(req,res)=>{
    console.log(req.body)
    const {firstName,phoneNumber,email,orderId} = req.body;
    // console.log(orderId)
    const query="update user_details set orderId_fk=? where firstName=? and phoneNumber=? and email=?"
    dbCon.query(query,[orderId,firstName,phoneNumber,email],(err,result)=>{
        if(err) console.log(err)
            res.send("Updated")
    })
})


const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
  if (err) console.log(err);

  dbCon.connect((err) => {
    if (err) console.log(err);

    console.log("MySQL Connected");
  });

  console.log(`Server is running on port ${PORT}`);
});


