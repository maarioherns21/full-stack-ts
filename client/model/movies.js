import mongoose, { Schema, model, models } from "mongoose";
import Users from "./user";


const commentSchema = new Schema(
  {
    content: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5, default: 5 },
    user: { type: Schema.Types.ObjectId, ref: "user" },
    userName: String,
    userAvatar: String,
  },
  {
    timestamps: true,
  }
);

const likesSchema = new Schema({
  username: String,
  userId: { type: Schema.Types.ObjectId },
});

const movieSchema = new Schema({
  name: String,
  body: String,
  creator: String,
  image: String,
  comments: [commentSchema],
  likes: [likesSchema],
  createdAt: { type: Date, default: new Date() },
});

const Tape = models.tape || model("tape", movieSchema);

export default Tape;
