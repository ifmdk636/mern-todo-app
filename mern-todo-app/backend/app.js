import express from "express";
const app = express();
import bodyParser from "body-parser";
import conn from "./connection/connection.js";
import auth from "./routes/auth.js";
import list from "./routes/list.js";
import cors from "cors";

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
  origin: "http://localhost:5173/", // Allow only requests from this origin
  methods: "GET,POST,PUT", // Allow only these methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allow only these headers
};

// Use CORS middleware with specified options
app.use(cors(corsOptions));

// Endpoint
app.get("/", (req, res) => {
  res.send("Backend MERN Todo App Berhasil Berjalan di Vercel!");
});
// Home
app.post("/register", auth);
app.post("/login", auth);
app.post("/addlist", list);
app.put("/updatelist/:id", list);
app.delete("/deletelist/:id", list);
app.get("/user/:id", list);

app.listen(1000, () => {
  console.log("http://localhost:1000");
});

export default app;
