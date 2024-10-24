const express = require("express");
const multer = require("multer");
const csvParser = require("csv-parser");
const router = express.Router();
const upload = multer({ dest: "public/uploads/" });

router.post("/upload-csv", upload.single("file"), async (req, res) => {
  const file = req.file;
  const contacts = [];

  fs.createReadStream(file.path)
    .pipe(csvParser())
    .on("data", (row) => {
      // Validate and process each row (e.g., save to DB)
      contacts.push(row);
    })
    .on("end", () => {
      res.json({ message: "File processed successfully", contacts });
    });
});

module.exports = router;
