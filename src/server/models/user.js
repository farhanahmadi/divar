import mongoose from "mongoose";

//users db models

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  phoneNumber: {
    type: Number,
    unique: true,
    require: true,
  },
  properties: {
    type: Array,
  },
  otp: {
    type: Object,
  },
});

export default mongoose.models.Users || mongoose.model("Users", userSchema);
