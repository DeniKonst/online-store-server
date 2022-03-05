const express = require("express");
const router = express.Router();
const uploadsController = require("../controllers/uploadsController");
const upload = require("../middleware/upload");

router.post("/", upload.single("image"), uploadsController.uploads);
