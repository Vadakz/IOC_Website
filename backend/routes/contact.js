import { Router } from "express";
import { readFile, writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, "..", "data");
const DATA_FILE = path.join(DATA_DIR, "submissions.json");

async function ensureStore() {
  if (!existsSync(DATA_DIR)) await mkdir(DATA_DIR, { recursive: true });
  if (!existsSync(DATA_FILE)) await writeFile(DATA_FILE, "[]", "utf-8");
}

async function readSubmissions() {
  await ensureStore();
  const raw = await readFile(DATA_FILE, "utf-8");
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function appendSubmission(entry) {
  const submissions = await readSubmissions();
  submissions.push(entry);
  await writeFile(DATA_FILE, JSON.stringify(submissions, null, 2), "utf-8");
}

const router = Router();

// POST /api/contact — receive a quote request from the website
router.post("/", async (req, res) => {
  const { name, company, email, phone, service, message } = req.body || {};

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required." });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return res.status(400).json({ error: "Please provide a valid email address." });
  }

  const entry = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
    name,
    company: company || null,
    email,
    phone: phone || null,
    service: service || "Not specified",
    message: message || "",
    receivedAt: new Date().toISOString(),
  };

  try {
    await appendSubmission(entry);

    // TODO: plug in real delivery here, e.g. nodemailer / a CRM webhook / Slack alert.
    // Example:
    // await sendEmailNotification(entry);

    return res.status(201).json({ ok: true, message: "Request received." });
  } catch (err) {
    console.error("Failed to store submission:", err);
    return res.status(500).json({ error: "Could not save your request. Please try again." });
  }
});

// GET /api/contact — list stored submissions (simple admin view)
router.get("/", async (req, res) => {
  const submissions = await readSubmissions();
  res.json({ count: submissions.length, submissions });
});

export default router;
