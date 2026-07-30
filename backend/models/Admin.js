import mongoose from "mongoose";
import bcrypt from "bcryptjs";

/* ==========================================================
   ADMIN SCHEMA
========================================================== */

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 8,
      select: false,
    },

    role: {
      type: String,
      enum: ["admin", "superadmin"],
      default: "admin",
    },
  },
  {
    timestamps: true,
  }
);

/* ==========================================================
   HASH PASSWORD BEFORE SAVING
========================================================== */

adminSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) {
      return next();
    }

    this.password = await bcrypt.hash(this.password, 12);

    next();
  } catch (error) {
    next(error);
  }
});

/* ==========================================================
   COMPARE LOGIN PASSWORD
========================================================== */

adminSchema.methods.comparePassword = async function (
  candidatePassword
) {
  return bcrypt.compare(candidatePassword, this.password);
};

/* ==========================================================
   CREATE AND EXPORT MODEL
========================================================== */

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;