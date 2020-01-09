const fs = require("fs");
const path = require("path");
const mimiTypes = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".jpe": "image/jpeg",
  ".svg": "image/svg+xml"
};
// function to encode file data to base64 encoded string
module.exports.encode = function encode(file) {
  var ext = path.extname(file);
  console.log("ext::", ext);
  let mimiType = mimiTypes[ext];
  // read binary data
  var bitmap = fs.readFileSync(file);
  // convert binary data to base64 encoded string
  return `data:${mimiType};base64,${Buffer.from(bitmap).toString("base64")}`;
};

// function to create file from base64 encoded string
module.exports.decode = function decode(base64str, file) {
  // create buffer object from base64 encoded string, it is important to tell the constructor that the string is base64 encoded
  var bitmap = new Buffer(base64str, "base64");
  // write buffer to file
  fs.writeFileSync(file, bitmap);
  console.log("******** File created from base64 encoded string ********");
};
