import express from "express";
const router = express.Router();
import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import bodyParser from "body-parser";
const saltRounds = await bcrypt.genSalt(10);

// SIGN UP
router.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const hashpassword = await bcrypt.hash(password, saltRounds);
    if (!email || !username) {
      return res.status(400).json({
        message: "email dan password wajib diisi!",
      });
    }

    const user = new User({ email, username, password: hashpassword });
    await user.save().then(() => {
      res.status(200).json({ user: user });
      console.log("User Registered");
    });
  } catch (error) {
    console.log(error);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password, id } = req.body;

    // 1. Find ONE user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Email Invalid" });
    }

    // 2. Compare password with stored hash
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Wrong Password" });
    }

    // 3. Success response
    return res.status(200).json({
      message: "Login successful",
      user: {
        id: user.id,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
