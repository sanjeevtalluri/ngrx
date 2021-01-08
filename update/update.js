const express=require("express");
const mongodb=require("mongodb");
const client=mongodb.MongoClient;
const update=express.Router().put("/",(req,res)=>{
    client.connect("mongodb+srv://root:root@cluster0.75tm4.mongodb.net/angdb?retryWrites=true&w=majority",(err,con)=>{
        if(err) throw err;
        else{
            let db=con.db("angdb");
            db.collection("products").updateOne({"p_id":req.body.p_id},{$set:{"p_name":req.body.p_name,"p_cost":req.body.p_cost}},(err,result)=>{

                if(err) throw err;
                else{
                    res.send({"update":"success"});
                }
            });
        }

    })

})
module.exports=update;