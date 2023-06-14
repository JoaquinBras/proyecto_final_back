const { mongoose, Schema } = require("../db");

const cartSchema = new mongoose.Schema({
  comprador: { type: Schema.Types.ObjectId, ref: "User" },
  products: [
    {
      producto: { type: Schema.Types.ObjectId, ref: "Product" },
      cantidad: Number,
      precio: Number,
    },
  ],
  state: {
    type: String,
    enum: ["sin pagar", "pago", "enviado", "entregado"],
    default: "sin pagar",
  },
  adress: String,
});

pedidoSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Cart", cartSchema);
