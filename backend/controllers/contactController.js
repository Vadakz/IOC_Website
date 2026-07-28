import Contact from "../models/Contact.js";

/* ==========================================================
   CREATE CONTACT SUBMISSION
========================================================== */

export const createContactSubmission = async (req, res, next) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      service,
      message,
    } = req.body;

    /* ======================================================
       BASIC VALIDATION
    ====================================================== */

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required.",
      });
    }

    /* ======================================================
       CREATE AND SAVE SUBMISSION
    ====================================================== */

    const contactSubmission = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || "",
      company: company?.trim() || "",
      service: service?.trim() || "",
      message: message.trim(),
    });

    /* ======================================================
       SUCCESS RESPONSE
    ====================================================== */

    return res.status(201).json({
      success: true,
      message: "Your enquiry has been submitted successfully.",
      data: {
        id: contactSubmission._id,
        name: contactSubmission.name,
        email: contactSubmission.email,
        phone: contactSubmission.phone,
        company: contactSubmission.company,
        service: contactSubmission.service,
        message: contactSubmission.message,
        status: contactSubmission.status,
        createdAt: contactSubmission.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
};