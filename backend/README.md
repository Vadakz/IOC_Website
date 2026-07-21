# IOC/ECO Backend

A small Express API that receives quote requests from the website's contact form.

## Endpoints

- `GET /health` — health check
- `POST /api/contact` — submit a quote request
  ```json
  {
    "name": "Jane Doe",
    "company": "Acme Towers",
    "email": "jane@acme.com",
    "phone": "+966 5x xxx xxxx",
    "service": "Waste Management",
    "message": "We manage a 12-floor office tower in Riyadh..."
  }
  ```
- `GET /api/contact` — list stored submissions (simple admin view — add auth before exposing publicly)

## Storage

Submissions are appended to `data/submissions.json`. This is intentionally simple
so the project runs with zero external dependencies. For production, swap
`routes/contact.js` to write to a real database (Postgres, MongoDB, etc.) instead.

## Adding real email delivery

`routes/contact.js` has a `TODO` marking where to send a notification email or
push to a CRM/Slack webhook. A common approach with **nodemailer**:

```bash
npm install nodemailer
```

```js
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.yourprovider.com",
  port: 587,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
});

async function sendEmailNotification(entry) {
  await transporter.sendMail({
    from: '"IOC/ECO Website" <noreply@iocl.sa>',
    to: "sales@iocl.sa",
    subject: `New quote request — ${entry.service}`,
    text: `${entry.name} (${entry.email}) from ${entry.company || "n/a"} wrote:\n\n${entry.message}`,
  });
}
```

## Environment variables

Copy `.env.example` to `.env`:

```
PORT=4000
CORS_ORIGIN=http://localhost:5173
```
