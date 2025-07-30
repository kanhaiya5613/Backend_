import express from "express";
const app=express();
const port = 3000;


app.get("/",(req,res)=>{
    const data = {
        title: "EJS Tags",
        seconds: new Date().getSeconds(),
        items: ["apple","banana","Cherry"],
        htmlContent:
        "<em>This is Some em Text</em>",
    };
    res.render("index.ejs",data);
});


app.listen(port,()=>{
    console.log(`App is Listen on Port ${port}`)
})