import mongoose from "mongoose";

//categories db models

const categorySchema = new mongoose.Schema({
  label: {
    type: String,
    unique: true,
    require: true,
  },
  englishName: {
    type: String,
    unique: true,
    require: true,
  },
});

export default mongoose.models.Categories ||
  mongoose.model("Categories", categorySchema);
