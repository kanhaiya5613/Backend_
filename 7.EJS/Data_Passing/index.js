import express from "express";
import bodyparser from "body-parser";
const app = express();
const port = 3000;

app.use(bodyparser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.render("index.ejs")
})
app.post("/submit",(req,res)=>{
 const numLetters =  req.body["fname"].length + req.body["lname"].length;
 res.render("index.ejs",{ numberOfLetters: numLetters})
});
app.listen(port,()=>{
    console.log(`App is Listen on Port ${port}`);
})