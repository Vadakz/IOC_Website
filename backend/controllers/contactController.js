import Contact from "../models/Contact.js";
import { sendContactEmails } from "../utils/sendEmail.js";

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
      serviceSlug,
      selectedItems,
      message,
    } = req.body;

    /* --------------------------------------------------------
       BASIC VALIDATION
    -------------------------------------------------------- */

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required.",
      });
    }

    /* --------------------------------------------------------
       PARSE SELECTED ITEMS
    -------------------------------------------------------- */

    let parsedSelectedItems = [];

    if (selectedItems) {
      try {
        parsedSelectedItems =
          typeof selectedItems === "string"
            ? JSON.parse(selectedItems)
            : selectedItems;
      } catch (error) {
        return res.status(400).json({
          success: false,
          message: "Invalid selected items data.",
        });
      }
    }

    if (!Array.isArray(parsedSelectedItems)) {
      parsedSelectedItems = [];
    }

    /* --------------------------------------------------------
       CLEAN SELECTED ITEMS
    -------------------------------------------------------- */

    parsedSelectedItems = parsedSelectedItems
      .map((item) => ({
        id: String(item.id || "").trim(),
        number: String(item.number || "").trim(),
        title: String(item.title || "").trim(),
        arabicTitle: String(item.arabicTitle || "").trim(),
        quantity: Math.max(
          1,
          Number.parseInt(item.quantity, 10) || 1
        ),
      }))
      .filter((item) => item.id && item.title);

    /* --------------------------------------------------------
       CREATE DATABASE RECORD
    -------------------------------------------------------- */

    const contactSubmission = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || "",
      company: company?.trim() || "",
      service: service?.trim() || "",
      serviceSlug: serviceSlug?.trim() || "",
      selectedItems: parsedSelectedItems,
      message: message.trim(),
    });

    /* --------------------------------------------------------
       SEND EMAILS
    -------------------------------------------------------- */

    await sendContactEmails({
      ...contactSubmission.toObject(),

      uploadedImages: req.files || [],
    });

    /* --------------------------------------------------------
       RESPONSE
    -------------------------------------------------------- */

    return res.status(201).json({
      success: true,
      message: "Your enquiry has been submitted successfully.",

      data: {
        id: contactSubmission._id,
        status: contactSubmission.status,
        createdAt: contactSubmission.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
};