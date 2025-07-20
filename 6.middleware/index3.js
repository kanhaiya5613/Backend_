import express from "express";
import bodyparser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";

const _dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
//var bandName = "";

app.use(bodyparser.urlencoded({ extended: true}));
function bandNameGenerator(req,res,next){
    console.log(req.body);
    req.bandName = req.body["street"] + req.body["pet"];
    next();

}
//app.use(bandNameGenerator);

app.get("/",(req,res)=>{
    res.sendFile(_dirname+"/public/index.html");
}); 
app.post("/submit",bandNameGenerator,(req,res) =>{
    res.send(`<h1>Your band Name is :<h1><h2>${req.bandName}<h2>`);
      
});
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});
