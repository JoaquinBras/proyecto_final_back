const { mongoose, Schema } = require("../db");

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  avatar: [],
  price: Number,
  stock: Number,
  category: { type: Schema.Types.ObjectId, ref: "Categoria" },
  salient: { type: Boolean, default: false },
  slug: String,
});

productoSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Product", productSchema);
