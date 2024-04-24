const fs = require("fs");
const path = require("path");

function getAllFilesSync(directoryPath) {
  const files = fs.readdirSync(directoryPath);
  const fullPaths = files.map((file) => path.join(directoryPath, file)); // Create full paths
  return fullPaths;
}

const directory =
  "/Users/aja0137/Documents/personal/bands/keith-scott/web/keith-scott-blues-nextjs/public/photos";
const allFiles = getAllFilesSync(directory);

console.log(
  "Files in the directory:",
  allFiles.map((file) => path.basename(file))
);
