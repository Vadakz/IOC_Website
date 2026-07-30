import express from "express";
import { loginAdmin } from "../controllers/authController.js";

const router = express.Router();

/* ==========================================================
   ADMIN AUTHENTICATION ROUTES
========================================================== */

/*
  POST /api/auth/login
  Admin login route
*/
router.post("/login", loginAdmin);

/* ==========================================================
   DEFAULT EXPORT
========================================================== */

export default router;