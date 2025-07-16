import express from "express";
const app = express();
const Port = 3000;

app.get("/",(req,res) => {
    res.send("Home page ");
}) 
app.listen(Port,()=> {
    console.log(`erver is running on port ${Port}`);
})