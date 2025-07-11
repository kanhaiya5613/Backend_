/*
1. use the inquirer npm package to get user input .
2. use qr-image npm package to turn  the user entered url into a qr code image
3. Create a text file to save the user input using the native fs node module.
*/
 import qr from "qr-image";
import inquirer from "inquirer";

 import fs from "fs";
inquirer
  .prompt([
    {
        message: "Type in your URL : ",
        name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('i_love_qr.png'));

    fs.writeFileSync("URL.txt",url,(err)=> {
        if(err) throw err;
        console.log("the file has been saved")
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });





// fs.writeFile("Image.jpg" , image) 