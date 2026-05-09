import mongoose from "mongoose";
const { schema } = mongoose;

const listSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    kind: true,
    trim: true,
  },
  body: {
    type: String,
    required: true,
    kind: true,
    trim: true,
  },
  user: [
    {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
  ],
});

export default mongoose.model("List", listSchema);
