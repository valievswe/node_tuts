const { log } = require("console");
const os = require("os");
const path = require("path");

console.log("os turi: ", os.type());
console.log("os versiyasi: ", os.version());
console.log("admin dir: ", os.homedir());

console.log("current dir", __dirname);
console.log("current filename", __filename);

log("path dirname: ", path.dirname(__filename));
log("path filename: ", path.basename(__filename));
log("path file extention: ", path.extname(__filename));
console.log("path parsing: ", path.parse(__filename));
