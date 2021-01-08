const express=require("express");
const mongodb=require("mongodb");

const client=mongodb.MongoClient;

const fetch=express.Router().get("/",(req,res)=>{
    client.connect("mongodb://localhost:27017/angdb",(err,con)=>{
        if(err)
        throw err;
        else{
            let db=con.db("angdb");
            db.collection("products").find().toArray((err,array)=>{
                if(err)
                throw err;
                else{
                    res.send(array);
                }

            })
        }

    })

});
module.exports=fetch;