import express from "express";
import cors from "cors";
import contactRouter from "./routes/contact.js";

const PORT = process.env.PORT || 4000;
const CORS_ORIGIN = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(",").map((o) => o.trim())
  : "*";

const app = express();

app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "ok", service: "ioc-eco-backend" });
});

app.get("/health", (req, res) => {
  res.json({ status: "healthy", uptime: process.uptime() });
});

app.use("/api/contact", contactRouter);

app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`IOC/ECO backend listening on http://localhost:${PORT}`);
});
