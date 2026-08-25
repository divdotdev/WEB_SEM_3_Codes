const express=require("express");
const app=express();

let student={
    "name":"divyansh agarwal",
    "friend":"divyansh agarwal",
    "age":20,
    "gf":false
};
let college ="mirai";

app.set("view engine","ejs");




app.get("/",(req,res)=>{
    res.send("home page...");
})
 

app.get("/aktu/result/:year/:roll",(req,res)=>{
    console.log(req.params);
    if(req.params.roll>50){
        res.send("pass")
    }else{
        res.send("fail")
    }
    // res.send("fail ho gya bhai")
})

app.get("/search",(req,res)=>{
  console.log(req.query);
  // query db mei search ki jayegi
  // resukt aayega
  // phir ender hoga
  res.send("your data has been found and rendered")
  
})






app.get("/api/services")



app.get("/user",(req,res)=>{
    console.log("inside / user route...");
    res.render("user",{student,college});
    
})


app.listen(3000,()=>{
    console.log("server is running on port 3000");  
})