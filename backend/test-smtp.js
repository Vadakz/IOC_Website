import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  requireTLS: true,
});

try {
  await transporter.verify();
  console.log("SMTP LOGIN SUCCESSFUL");
} catch (error) {
  console.log("SMTP LOGIN FAILED");
  console.log("Code:", error.code);
  console.log("Response:", error.response);
  console.log("Command:", error.command);
} finally {
  transporter.close();
}