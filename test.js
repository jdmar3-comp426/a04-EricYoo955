var db = require("./database.js")
var md5 = require('md5')

const all = db.prepare('SELECT * FROM userinfo');

console.log("\nAll records in my database:");
console.log(all)