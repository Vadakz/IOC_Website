import nodemailer from "nodemailer";

/* ==========================================================
   CREATE EMAIL TRANSPORTER
   Created only after environment variables are loaded.
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
    from: `"IOC Website" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_RECEIVER,
    replyTo: email,
    subject: `New website enquiry from ${name}`,

    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>New Website Enquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Service:</strong> ${service || "Not selected"}</p>

        <h3>Message</h3>
        <p>${message}</p>
      </div>
    `,
  };

  /* ----------------------------------------------------------
     ACKNOWLEDGEMENT SENT TO CUSTOMER
  ---------------------------------------------------------- */

  const customerEmail = {
    from: `"International Operations Company" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "We have received your enquiry",

    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <p>Dear ${name},</p>

        <p>
          Thank you for contacting International Operations Company.
          Your enquiry has been received successfully.
        </p>

        <p>
          Our team will review your requirements and contact you
          as soon as possible.
        </p>

        <p>
          Regards,<br />
          International Operations Company<br />
          +966 9200 51300<br />
          info@iocl.sa
        </p>
      </div>
    `,
  };

const adminResult = await transporter.sendMail(adminEmail);

console.log("Admin email result:", {
  messageId: adminResult.messageId,
  accepted: adminResult.accepted,
  rejected: adminResult.rejected,
  response: adminResult.response,
});

const customerResult = await transporter.sendMail(customerEmail);

console.log("Customer email result:", {
  messageId: customerResult.messageId,
  accepted: customerResult.accepted,
  rejected: customerResult.rejected,
  response: customerResult.response,
});
};