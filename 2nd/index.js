const { log } = require("console");
const fsPromises = require("fs").promises;
const path = require("path");

const filePath = path.join(__dirname, "dummydata", "rename.txt");
const content = "Assalamu alaykum bu yangi faylning matni!!!";
const encode = "utf8";

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(filePath, encode);
    await fsPromises.writeFile(
      path.join(__dirname, "dummydata", "newfsPromise.txt"),
      data
    );

    await fsPromises.appendFile(
      path.join(__dirname, "dummydata", "newfsPromise.txt"),
      "\n\n bu esa davomi"
    );

    log(data);
  } catch (err) {
    console.error(err);
  }
};
fileOps();
// - fs.readFile(filePath, encode, callback);

// fs.writeFile("./dummydata/yangi.txt", content, (err) => {
//   if (err) throw err;
//   log("process complete");

//   fs.rename("./dummydata/yangi.txt", "./dummydata/rename.txt", (err) => {
//     if (err) throw err;
//     log("rename complete");
//   });
// });

process.on("uncaughtException", (err) => {
  console.error(`there is some error -> ${err}`);
  process.exit(1);
});
