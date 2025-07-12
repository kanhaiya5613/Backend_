import express from "express";
const app = express();
const PORT = 3000;
app.get("/", (req,res) => {
    res.send("Hello")
})
app.get("/About",(req,res) => {
    res.send("About me")
})
app.get("/contact",(req,res) => {
    res.send("Contact Us")
})
app.listen(3000,()=>{
    console.log(`Server is listening at port ${PORT}`)
})