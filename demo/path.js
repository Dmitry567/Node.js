const path = require("path");

console.log("Name of the file: ", path.basename(__filename));

console.log("Name of the directory: ", path.dirname(__filename));

console.log("Expansion of the file: ", path.extname(__filename));

console.log("Parse: ", path.parse(__filename).name);

console.log(path.join(__dirname, "server", "index.html")); // We receives absolute path
