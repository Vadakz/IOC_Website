import Contact from "../models/Contact.js";
import { sendContactEmails } from "../utils/sendEmail.js";

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

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required.",
      });
    }

    const contactSubmission = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || "",
      company: company?.trim() || "",
      service: service?.trim() || "",
      message: message.trim(),
    });

   /* try {
      await sendContactEmails(contactSubmission);
    } catch (emailError) {
      console.error("Email sending failed:", emailError.message);


    
    } */
   await sendContactEmails(contactSubmission);

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