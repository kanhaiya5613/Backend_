const fs = require("fs");

fs.writeFile("message.txt" , "Hello from Node.js", (err) => {
  if (err) throw err;
  console.log("File has been saved!");
  })
fs.readFile("message.txt", "utf8",(err, data)=> { // utf8 is content type of file 
    if (err) throw err;
    console.log("File content:", data);
})