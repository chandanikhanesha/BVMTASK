const fs = require("fs");
const path = require("path");

const store = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.mkdir(path, { recursive: true }, function (err) {
      if (err) return cb(err);
      cb(null, "uploads/photos");
    });
  },
  filename: function (req, file, cb) {
    const name = file.originalname.toLowerCase().split(" ").join("_");
    cb(null, name + "-" + Date.now());
  },
});
const upload = multer({ storage: store }).single("file");
