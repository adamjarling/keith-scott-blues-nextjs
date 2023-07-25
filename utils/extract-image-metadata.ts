// include node fs module
var fs = require("fs/promises");
var path = require("path");
const sizeOf = require("image-size");

// Command line argument of directory names
const dirName = process.argv[2];
const sourceDirName = process.argv[3];

async function doIt() {
  // Get filenames from a directory
  const imageDirectory = path.join(process.cwd(), `/public/${sourceDirName}`);
  let imageFilenames = await fs.readdir(imageDirectory, (err, files) => {
    if (err) {
      console.error("Could not list the directory.", err);
      process.exit(1);
    }
    return files;
  });
  imageFilenames = imageFilenames.filter((fn) => fn !== ".DS_Store");

  const images = imageFilenames.map((ifn) => {
    const dimensions = sizeOf(`${imageDirectory}/${ifn}`);
    return {
      filename: `/${sourceDirName}/${ifn}`,
      ...dimensions,
    };
  });

  await fs.writeFile(
    `${process.cwd()}/app/${dirName}/images-meta.json`,
    JSON.stringify(images)
  ),
    (err) => {
      if (err) {
        console.error(err);
      }
    };
  console.log("File written successfully\n");
}
doIt();
