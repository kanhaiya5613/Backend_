import express from "express";
import ejs from "ejs";

const app = express();
const port = 3000;

 import dayjs from "dayjs";
  const today = dayjs();
  const dayOfWeek = today.day();
//   console.log(today)
//  console.log(dayOfWeek);

//app.set("view engine", "ejs");

app.get("/",(req,res)=>{
 if(dayOfWeek===0 || dayOfWeek===6){
    console.log("Enjoy , Today is Weakend");
    res.render("index.ejs", {
        dayType: "a weekend",
        advice:"enjoy"
       
    })
 }  else{
    console.log("Work Hard , Today is Weekdays")
    res.render("index.ejs",{
        dayType:"Weekdays",
         advice: "it's time to work hard",
    })
  }
    
})

 app.listen(port,()=>{ 
    console.log(`App is listening on ${port}`)
 })