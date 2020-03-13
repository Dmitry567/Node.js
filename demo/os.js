const os = require("os");

console.log("Operation system:", os.platform());

console.log("Architecture of the processor:", os.arch());

console.log("Information about processors", os.cpus());

console.log("Free memory: ", os.freemem());

console.log("Whole memory: ", os.totalmem());

console.log("Home directory: ", os.homedir());

console.log("Turn on: ", os.uptime());
