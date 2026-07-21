# IOC / ECO — Company Website

Full project for the International Operations Company (IOC/ECO) marketing site,
split into a **frontend** (React + Vite) and a **backend** (Node + Express) that
receives the "Request a quote" form submissions.

```
ioc-website/
├── frontend/     React app (components, styles, data)
└── backend/      Express API that handles contact form submissions
```

## Quick start

Open two terminals — one for each service.

### 1. Backend (API)

```bash
cd backend
npm install
npm start
```

Runs on **http://localhost:4000**. Submissions are appended to
`backend/data/submissions.json` (see `backend/README.md` to wire in real email
delivery instead).

### 2. Frontend (website)

```bash
cd frontend
npm install
npm run dev
```

Runs on **http://localhost:5173**. The contact form posts to the backend at
`http://localhost:4000/api/contact` (configurable via `frontend/.env`,
`VITE_API_URL`).

## Structure at a glance

**Frontend** — one component per section:
- `Header.jsx` / `MobileMenu.jsx` — nav bar + slide-out mobile menu
- `Hero.jsx` — headline, stats strip, network graphic
- `About.jsx` — company history, mission/vision/goal, values, market chart
- `Services.jsx` — the five service lines + sectors served
- `Coverage.jsx` — kingdom-wide coverage map
- `Contact.jsx` — contact details + quote request form
- `Footer.jsx`
- `data/services.js`, `data/coverage.js` — content, kept separate from markup

**Backend**:
- `server.js` — Express app + CORS + JSON body parsing
- `routes/contact.js` — `POST /api/contact` route, validates input and stores it

Both are independent — the frontend can be deployed as a static site (Vercel,
Netlify, S3...) and the backend as a small API service (Render, Railway,
a VPS...). Update `VITE_API_URL` to point at wherever the backend ends up.
