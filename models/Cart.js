import mongoose from "mongoose";

const CartItemSchema = new mongoose.Schema({
  id: { type: String, required: true },        // product id + category
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true, default: 1 },
  img: { type: String },
  category: { type: String },
});

const CartSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },  // reference to user
  items: [CartItemSchema],
  updatedAt: { type: Date, default: Date.now },
});

// Avoid model overwrite in development
export default mongoose.models.Cart || mongoose.model("Cart", CartSchema);
