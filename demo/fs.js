// File System
const fs = require("fs");
const path = require("path");
// always first parameter in callback function err in Node
/*
fs.mkdir(path.join(__dirname, "test"), err => {
  if (err) {
    throw err;
  }
  console.log("Directory created");
});
*/

const filePath = path.join(__dirname, "test", "text.txt");
/*
fs.appendFile(filePath, "Hello Again!", err => {
  if (err) {
    throw err;
  }

  console.log("File created");
});
*/
// Method writeFile overwrite existing content of the created file
// appendFile to save old content of the file

fs.readFile(filePath, (err, content) => {
  if (err) {
    throw err;
  }
  console.log("Content: ", content);
});
