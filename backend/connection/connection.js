import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "../../.env" });

const mongoURI = process.env.MONGO_URI;
console.log(process.env.MONGO_URI);
const conn = async () => {
  try {
    await mongoose.connect(mongoURI);

    console.log("Connected");
  } catch (error) {
    console.log(error);
  }
};

export default conn;
