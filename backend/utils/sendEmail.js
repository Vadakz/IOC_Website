import nodemailer from "nodemailer";
import path from "node:path";
import { fileURLToPath } from "node:url";

/* ==========================================================
   FILE PATH
========================================================== */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logoPath = path.join(__dirname, "../assets/ioc-logo.png");

/* ==========================================================
   CREATE EMAIL TRANSPORTER
========================================================== */

const createTransporter = () => {
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
  } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    throw new Error(
      "Missing SMTP configuration. Check SMTP_HOST, SMTP_PORT, SMTP_USER and SMTP_PASS in .env."
    );
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: false,

    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },

    requireTLS: true,

    tls: {
      minVersion: "TLSv1.2",
    },
  });
};

/* ==========================================================
   VERIFY EMAIL CONNECTION
========================================================== */

export const verifyEmailConnection = async () => {
  const transporter = createTransporter();

  await transporter.verify();

  console.log("Email server connected successfully.");
};

/* ==========================================================
   SEND CONTACT EMAILS
========================================================== */

export const sendContactEmails = async (contact) => {
  const transporter = createTransporter();

  const {
    name,
    email,
    phone,
    company,
    service,
    message,
  } = contact;

  /* ----------------------------------------------------------
     EMAIL SENT TO IOC
  ---------------------------------------------------------- */

  const adminEmail = {
    from: `"International Operations Company" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_RECEIVER,
    replyTo: email,
    subject: `New Website Enquiry From ${name}`,

    html: `
      <div style="
        font-family: Arial, Helvetica, sans-serif;
        line-height: 1.6;
        color: #333333;
      ">

        <h2 style="color:#1f2f93;">
          New Website Enquiry
        </h2>

        <p>
          <strong>Name:</strong> ${name}
        </p>

        <p>
          <strong>Email:</strong> ${email}
        </p>

        <p>
          <strong>Phone:</strong> ${phone || "Not Provided"}
        </p>

        <p>
          <strong>Company:</strong> ${company || "Not Provided"}
        </p>

        <p>
          <strong>Service:</strong> ${service || "Not Selected"}
        </p>

        <h3 style="color:#1f2f93;">
          Message
        </h3>

        <p>
          ${message}
        </p>

      </div>
    `,
  };

  /* ----------------------------------------------------------
     ACKNOWLEDGEMENT SENT TO CUSTOMER
  ---------------------------------------------------------- */

  const customerEmail = {
    from: `"International Operations Company" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "We Have Received Your Enquiry",

    html: `
      <div style="
        font-family: Arial, Helvetica, sans-serif;
        line-height: 1.6;
        color: #333333;
        max-width: 650px;
        margin: 0 auto;
      ">

        <p>
          Dear ${name},
        </p>

        <p>
          Thank you for contacting International Operations Company.
          Your enquiry has been received successfully.
        </p>

        <p>
          Our team will review your requirements and contact you
          as soon as possible.
        </p>

        <p style="margin-bottom: 8px;">
         <strong>Regards,</strong>
        </p>

        <!-- IOC SIGNATURE -->
        <div style="
          margin-top: 10px;
          padding-top: 10px;
        ">



          <!-- COMPANY DETAILS -->
          <div style="
            font-size:14px;
            line-height:1.7;
            color:#333333;
          ">

          <!-- IOC LOGO -->
          <img
            src="cid:ioc-logo"
            alt="International Operations Company"
            width="180"
            style="
              display:block;
              width:160px;
              max-width:90%;
              height:auto;
              margin-bottom:14px;
            "
          />

            <br />
            <strong>
            International Operations Company (IOC ECO) | Riyadh
          
            <br />
            Waste | Janitorial | Pest Control | MEP            
            <br />
            +966 9200 51300 | www.iocl.sa |  info@iocl.sa
            <br /> 
            <a
              href="mailto:info@iocl.sa"
              style="
                color:#333333;
                text-decoration:none;
              "
            >
             
            </a>
              </strong>

          </div>
          

          <!-- SLOGAN -->
          <div style="
            margin-top:12px;
            font-size:14px;
            font-weight:bold;
            color:#198754;
          ">
          <strong>
            Embracing Sustainable Living
          </strong>
          </div>

        </div>

      </div>
    `,

    /* --------------------------------------------------------
       EMBED IOC LOGO
    -------------------------------------------------------- */

    attachments: [
      {
        filename: "ioc-logo.png",
        path: logoPath,
        cid: "ioc-logo",
      },
    ],
  };

  /* ----------------------------------------------------------
     SEND IOC EMAIL
  ---------------------------------------------------------- */

  const adminResult = await transporter.sendMail(adminEmail);

  console.log("Admin email result:", {
    messageId: adminResult.messageId,
    accepted: adminResult.accepted,
    rejected: adminResult.rejected,
    response: adminResult.response,
  });

  /* ----------------------------------------------------------
     SEND CUSTOMER EMAIL
  ---------------------------------------------------------- */

  const customerResult = await transporter.sendMail(customerEmail);

  console.log("Customer email result:", {
    messageId: customerResult.messageId,
    accepted: customerResult.accepted,
    rejected: customerResult.rejected,
    response: customerResult.response,
  });
};