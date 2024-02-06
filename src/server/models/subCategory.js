import mongoose from "mongoose";

//sub categories db models

const subCategorySchema = new mongoose.Schema({
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
  parentId: {
    type: String,
    require: true,
  },
});

export default mongoose.models.SubCategorys ||
  mongoose.model("SubCategorys", subCategorySchema);
