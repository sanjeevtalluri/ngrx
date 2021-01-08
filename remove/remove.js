const express=require("express");
const mongodb=require("mongodb");
const client=mongodb.MongoClient;
const remove=express.Router().delete("/",(req,res)=>{

    client.connect("mongodb://localhost:27017/angdb",(err,con)=>{
        if(err) throw err;
        else{
            let db=con.db("angdb");
            db.collection("products").deleteOne({"p_id":req.body.p_id},(err,result)=>{
                if(err) throw err;
                else{
                    res.send({"delete":"success"});
                }

            })
        }

    })
})

module.exports=remove