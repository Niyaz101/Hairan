// const fs = require("fs");
// // fs.writeFile("message.txt", "Hello From Node Js", (err) => {
// //   if (err) throw err;
// //   console.log("The file has been saved!");
// // });
// fs.readFile("message.txt", "utf8",(err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// var generateName = require("sillyname");
// var sillyName = generateName();

// console.log(`My Name is ${sillyName}.`);

// import superheroes from "superheroes";

// const name = superheroes;
// console.log(name);

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
import { error } from "console";

inquirer
  .prompt([
    {
      message: "Type your Question URL here",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("The File Has Been Saved");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
