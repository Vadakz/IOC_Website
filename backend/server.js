import dns from "node:dns";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import contactRouter from "./routes/contactRoutes.js";
import connectDB from "./config/db.js";
import { verifyEmailConnection } from "./utils/sendEmail.js";

/* ==========================================================
   DNS CONFIGURATION
   Required because your router DNS was blocking MongoDB SRV.
========================================================== */

dns.setServers([
  "8.8.8.8",
  "1.1.1.1",
]);

/* ==========================================================
   ENVIRONMENT VARIABLES
========================================================== */

dotenv.config();

/* ==========================================================
   DATABASE CONNECTION
========================================================== */

await connectDB();
try {
  await verifyEmailConnection();
} catch (error) {
  console.error("Email server connection failed:", error.message);
}


/* ==========================================================
   EXPRESS APPLICATION
========================================================== */

const app = express();

const PORT = process.env.PORT || 5000;

const CORS_ORIGIN = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(",").map((origin) => origin.trim())
  : "*";

/* ==========================================================
   MIDDLEWARE
========================================================== */

app.use(
  cors({
    origin: CORS_ORIGIN,
  })
);

app.use(express.json());

/* ==========================================================
   TEST ROUTES
========================================================== */

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    service: "IOC ECO Backend",
    message: "Backend is running successfully.",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    status: "healthy",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

/* ==========================================================
   API ROUTES
========================================================== */

app.use("/api/contact", contactRouter);

/* ==========================================================
   404 HANDLER
========================================================== */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found.",
  });
});

/* ==========================================================
   GLOBAL ERROR HANDLER
========================================================== */

app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    success: false,
    message: "Internal server error.",
  });
});

/* ==========================================================
   START SERVER
========================================================== */

app.listen(PORT, () => {
  console.log(
    `IOC/ECO backend listening on http://localhost:${PORT}`
  );
});