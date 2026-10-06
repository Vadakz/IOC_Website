import mongoose from "mongoose";

/* ==========================================================
   SELECTED ITEM SCHEMA
========================================================== */

const selectedItemSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      trim: true,
    },

    number: {
      type: String,
      default: "",
      trim: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    arabicTitle: {
      type: String,
      default: "",
      trim: true,
    },

    quantity: {
      type: Number,
      required: true,
      min: 1,
      default: 1,
    },
  },
  {
    _id: false,
  }
);

/* ==========================================================
   CONTACT SCHEMA
========================================================== */

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      trim: true,
      default: "",
    },

    company: {
      type: String,
      trim: true,
      default: "",
    },

    service: {
      type: String,
      trim: true,
      default: "",
    },

    serviceSlug: {
      type: String,
      trim: true,
      default: "",
    },

    selectedItems: {
      type: [selectedItemSchema],
      default: [],
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      enum: ["new", "contacted", "completed"],
      default: "new",
    },
  },
  {
    timestamps: true,
  }
);

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;