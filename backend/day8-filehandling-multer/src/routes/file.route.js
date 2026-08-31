const express = require("express");
const upload = require("../config/multer");

const router = express.Router();

// // middleware: A function in Express that runs between the incoming request and the final response.
// router.post("/", (req,res,next) => {
//   console.log(" me yahi atak jaunga");
//   next();  // pass control to the next controller
// }, (req, res) => {
//   try {
//     let body = req.body;
//     let file = req.file;

//     console.log(body);
//     console.log(file);

//     res.status(200).json({
//       message: "file received successfully",
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: "Internal server error",
//     });
//   }
// });

// upload.single("image") is middleware — it parses the file, sets req.file, then calls next() so the route handler executes.
router.post("/", upload.single("image"), (req, res) => {
  try {
    let body = req.body;
    let file = req.file;

    console.log(body);
    console.log(file);

    res.status(200).json({
      message: "file received successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

// router.post("/", upload.array("image"), (req, res) => {
//   try {
//     let body = req.body;
//     let file = req.file;
//     let files = req.files

//     // console.log(body);
//     // console.log(file);
//     console.log(files);
    

//     res.status(200).json({
//       message: "file received successfully",
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: "Internal server error",
//     });
//   }
// });

module.exports = router;
