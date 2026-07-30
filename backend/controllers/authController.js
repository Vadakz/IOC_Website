import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";

const createToken = (adminId) => {
  return jwt.sign(
    { id: adminId },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN || "8h",
    }
  );
};

export const loginAdmin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }

    const admin = await Admin.findOne({
      email: email.toLowerCase(),
    }).select("+password");

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const passwordMatch = await admin.comparePassword(password);

    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const token = createToken(admin._id);

    res.status(200).json({
      success: true,
      message: "Login successful.",
      token,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (error) {
    next(error);
  }
};