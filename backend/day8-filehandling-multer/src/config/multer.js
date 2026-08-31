const multer = require("multer");

// disk storage for local
const storageForLocal = multer.diskStorage({
  // this is FTP so we got -> req,file,cb(callback)
  destination: (req, file, cb) => {
    // syntax: cb(error,destination(folderName))

    // if (!file) return cb(new Error("No file provided"), null);
    cb(null, "uploads/"); // Defines where the uploaded file will be stored (e.g., uploads/).
  },
  filename: (req, file, cb) => {
    // size and ratio and format check kr sakte ho
    console.log("diskstorage me file", file);
    // if (!file.originalname) return cb(new Error("Invalid filename"), null);
    cb(null, Date.now() + "-" + file.originalname); // Defines how the uploaded file will be named (e.g., keep original name or generate unique name).
  },
});

// for local 
const upload = multer({ storage: storageForLocal });

// for server
// const storageForServer = multer.memoryStorage();
// const upload = multer({ storage: storageForServer });

module.exports = upload;


