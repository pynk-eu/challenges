import mongoose from "mongoose";

const { Schema } = mongoose;

const reveiwSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  rating: { type: Number, required: true },
});

const Review = mongoose.models.Review || mongoose.model("Review", reveiwSchema);

export default Review;
