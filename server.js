const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;

// Enable CORS for frontend access
app.use(cors());
app.use("/uploads", express.static("uploads")); // Serve uploaded images

// Set up Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = "./uploads";
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  }
});
const upload = multer({ storage });

// POST route to handle profile saving
app.post("/profile", upload.single("profileImage"), (req, res) => {
  const { name, email, bio } = req.body;
  const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

  console.log("Profile Saved:");
  console.log({ name, email, bio, imagePath });

  // TODO: Save to database here if needed

  res.status(200).json({
    message: "Profile saved successfully!",
    image: imagePath
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
