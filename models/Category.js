const { mongoose } = require("../db");

const categorySchema = new mongoose.Schema({
  name: String,
});

categorySchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Category", categorySchema);
