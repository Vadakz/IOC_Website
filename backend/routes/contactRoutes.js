import express from "express";
import multer from "multer";

import {
  createContactSubmission,
} from "../controllers/contactController.js";

const router = express.Router();

/* ==========================================================
   MULTER CONFIGURATION
   Images are kept in memory and passed directly to Nodemailer.
========================================================== */

const upload = multer({
  storage: multer.memoryStorage(),

  limits: {
    files: 20,
    fileSize: 10 * 1024 * 1024, // 10 MB per image
  },

  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed."));
    }
  },
});

/* ==========================================================
   CONTACT SUBMISSION
========================================================== */

router.post(
  "/",
  upload.array("itemImages", 20),
  createContactSubmission
);

export default router;