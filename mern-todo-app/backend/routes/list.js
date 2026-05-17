import List from "../models/list.js";
import User from "../models/user.js";
import express from "express";
const router = express.Router();

// create
router.post("/addlist", async (req, res) => {
  try {
    const { title, body, id } = req.body;

    if (!id) {
      return res.status(400).json({ message: "User ID required" });
    }

    const existingUser = await User.findById(id);

    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const list = new List({
      title,
      body,
      user: existingUser._id,
    });

    await list.save();

    existingUser.list.push(list._id);
    await existingUser.save();

    res.status(200).json({ list });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Update
router.put("/updatelist/:id", async (req, res) => {
  try {
    const { title, body } = req.body;

    if (!title || !body) {
      return res.status(400).json({
        message: "Title and body are required",
      });
    }

    const updatedList = await List.findByIdAndUpdate(
      req.params.id,
      {
        title,
        body,
      },
      // { new: true },
    );

    if (!updatedList) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    res.status(200).json({
      list: updatedList,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

// Delete
router.delete("/deletelist/:id", async (req, res) => {
  try {
    console.log("DELETE PARAM:", req.params.id);

    const deletedTodo = await List.findByIdAndDelete(req.params.id);

    if (!deletedTodo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Task Deleted",
      deletedTodo,
    });
  } catch (error) {
    console.log("DELETE ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});
// Read
// GET: Mengambil semua list milik user tertentu berdasarkan ID di URL
router.get("/user/:id", async (req, res) => {
  try {
    const list = await List.find({
      user: req.params.id,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: list.length,
      list,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan saat mengambil data",
      error: error.message,
    });
  }
});

export default router;
