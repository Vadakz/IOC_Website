import nodemailer from "nodemailer";
import path from "node:path";
import { fileURLToPath } from "node:url";

/* ==========================================================
   FILE PATH
========================================================== */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logoPath = path.join(
  __dirname,
  "../assets/ioc-logo.png"
);

/* ==========================================================
   HTML ESCAPE
   Prevents customer-entered values from becoming HTML.
========================================================== */

const escapeHtml = (value = "") => {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

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
   CREATE ITEM IMAGE ATTACHMENTS
========================================================== */

const createItemAttachments = (
  selectedItems = [],
  uploadedImages = []
) => {
  const attachments = [];
  const imageMap = new Map();

  uploadedImages.forEach((file) => {
    const filename = file.originalname || "";
    const itemId = path.parse(filename).name;

    if (!itemId) {
      return;
    }

    const cid = `item-${itemId}`;

    imageMap.set(itemId, {
      cid,
      filename: file.originalname,
      content: file.buffer,
      contentType: file.mimetype,
    });
  });

  selectedItems.forEach((item) => {
    const image = imageMap.get(item.id);

    if (image) {
      attachments.push({
        filename: image.filename,
        content: image.content,
        contentType: image.contentType,
        cid: image.cid,
      });
    }
  });

  return {
    attachments,
    imageMap,
  };
};

/* ==========================================================
   SELECTED ITEMS HTML
========================================================== */

const createSelectedItemsHtml = (
  selectedItems = [],
  imageMap
) => {
  if (!selectedItems.length) {
    return `
      <p style="
        color:#777777;
        margin:0;
      ">
        No items selected.
      </p>
    `;
  }

  return selectedItems
    .map((item) => {
      const image = imageMap.get(item.id);

      return `
        <div style="
          margin-bottom:16px;
          padding:14px;
          border:1px solid #dce5e8;
          border-radius:10px;
          background:#f8fafb;
        ">

          ${
            image
              ? `
                <div style="
                  margin-bottom:10px;
                ">
                  <img
                    src="cid:${image.cid}"
                    alt="${escapeHtml(item.title)}"
                    style="
                      display:block;
                      width:140px;
                      height:100px;
                      object-fit:contain;
                      border-radius:7px;
                      border:1px solid #dce5e8;
                      background:#ffffff;
                    "
                  />
                </div>
              `
              : ""
          }

          <div style="
            font-size:14px;
            color:#333333;
          ">

            <strong>
              ${escapeHtml(item.title)}
            </strong>

            <div style="
              margin-top:5px;
              color:#555555;
            ">
              <strong>Quantity:</strong>
              ${Number(item.quantity) || 1}
            </div>

          </div>

        </div>
      `;
    })
    .join("");
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
    selectedItems = [],
    message,
    uploadedImages = [],
  } = contact;

  /* --------------------------------------------------------
     IMAGE ATTACHMENTS
  -------------------------------------------------------- */

  const {
    attachments: itemAttachments,
    imageMap,
  } = createItemAttachments(
    selectedItems,
    uploadedImages
  );

  const selectedItemsHtml = createSelectedItemsHtml(
    selectedItems,
    imageMap
  );

  /* --------------------------------------------------------
     COMMON ATTACHMENTS
  -------------------------------------------------------- */

  const adminAttachments = [
    {
      filename: "ioc-logo.png",
      path: logoPath,
      cid: "ioc-logo",
    },

    ...itemAttachments,
  ];

  const customerAttachments = [
    {
      filename: "ioc-logo.png",
      path: logoPath,
      cid: "ioc-logo",
    },

    ...itemAttachments,
  ];

  /* ========================================================
     EMAIL SENT TO IOC
  ======================================================== */

  const adminEmail = {
    from: `"International Operations Company" <${process.env.SMTP_USER}>`,

    to: process.env.CONTACT_RECEIVER,

    replyTo: email,

    subject: `New Website Enquiry From ${name}`,

    html: `
      <div style="
        font-family:Arial,Helvetica,sans-serif;
        line-height:1.6;
        color:#333333;
        max-width:750px;
        margin:0 auto;
      ">

        <h2 style="
          color:#1f2f93;
          margin-bottom:20px;
        ">
          New Website Enquiry
        </h2>

        <div style="
          border:1px solid #dce5e8;
          border-radius:10px;
          padding:18px;
          margin-bottom:20px;
          background:#f8fafb;
        ">

          <p>
            <strong>Name:</strong>
            ${escapeHtml(name)}
          </p>

          <p>
            <strong>Email:</strong>
            ${escapeHtml(email)}
          </p>

          <p>
            <strong>Phone:</strong>
            ${escapeHtml(phone || "Not Provided")}
          </p>

          <p>
            <strong>Company:</strong>
            ${escapeHtml(company || "Not Provided")}
          </p>

          <p>
            <strong>Service:</strong>
            ${escapeHtml(service || "Not Selected")}
          </p>

        </div>

        <h3 style="
          color:#1f2f93;
          margin-bottom:12px;
        ">
          Selected Items & Quantity
        </h3>

        ${selectedItemsHtml}

        <h3 style="
          color:#1f2f93;
          margin-top:25px;
        ">
          Message
        </h3>

        <div style="
          padding:15px;
          border:1px solid #dce5e8;
          border-radius:10px;
          background:#ffffff;
          white-space:pre-wrap;
        ">
          ${escapeHtml(message)}
        </div>

        <div style="
          margin-top:25px;
          padding-top:15px;
          border-top:1px solid #dddddd;
          font-size:13px;
          color:#777777;
        ">
          Submitted through the IOC website.
        </div>

      </div>
    `,

    attachments: adminAttachments,
  };

  /* ========================================================
     CUSTOMER ACKNOWLEDGEMENT
  ======================================================== */

  const customerEmail = {
    from: `"International Operations Company" <${process.env.SMTP_USER}>`,

    to: email,

    subject: "We Have Received Your Enquiry",

    html: `
      <div style="
        font-family:Arial,Helvetica,sans-serif;
        line-height:1.6;
        color:#333333;
        max-width:650px;
        margin:0 auto;
      ">

        <p>
          Dear ${escapeHtml(name)},
        </p>

        <p>
          Thank you for contacting International Operations Company.
          Your enquiry has been received successfully.
        </p>

        <p>
          Our team will review your requirements and contact you
          as soon as possible.
        </p>

        <h3 style="
          color:#1f2f93;
          margin-top:25px;
        ">
          Your Selected Items
        </h3>

        ${selectedItemsHtml}

        <p>
          <strong>Regards,</strong>
        </p>

        <div style="
          margin-top:10px;
          padding-top:10px;
        ">

          <img
            src="cid:ioc-logo"
            alt="International Operations Company"
            width="160"
            style="
              display:block;
              width:160px;
              max-width:90%;
              height:auto;
              margin-bottom:14px;
            "
          />

          <div style="
            font-size:14px;
            line-height:1.7;
            color:#333333;
          ">

            <strong>
              International Operations Company (IOC ECO) | Riyadh
              <br />
              Waste | Janitorial | Pest Control | MEP
              <br />
              +966 9200 51300 | www.iocl.sa | info@iocl.sa
            </strong>

          </div>

          <div style="
            margin-top:12px;
            font-size:14px;
            font-weight:bold;
            color:#198754;
          ">
            Embracing Sustainable Living
          </div>

        </div>

      </div>
    `,

    attachments: customerAttachments,
  };

  /* ========================================================
     SEND IOC EMAIL
  ======================================================== */

  const adminResult = await transporter.sendMail(adminEmail);

  console.log("Admin email result:", {
    messageId: adminResult.messageId,
    accepted: adminResult.accepted,
    rejected: adminResult.rejected,
    response: adminResult.response,
  });

  /* ========================================================
     SEND CUSTOMER EMAIL
  ======================================================== */

  const customerResult =
    await transporter.sendMail(customerEmail);

  console.log("Customer email result:", {
    messageId: customerResult.messageId,
    accepted: customerResult.accepted,
    rejected: customerResult.rejected,
    response: customerResult.response,
  });
};