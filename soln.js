import express from "express";
const app=express();
app.set('view engine', 'html');

app.get("/",(req,res)=>{
    res.render("index.html",{});
})

const port=8000;
app.listen(port,()=>{
    console.log("running on port "+port)
 })
    