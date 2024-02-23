import mongoose from "mongoose";

//categories db models

const productsSchema = new mongoose.Schema({
  image1: {
    type: String,
  },
  image2: {
    type: String,
  },
  image3: {
    type: String,
  },
  name: {
    type: String,
    require: true,
  },
  brand: {
    type: String,
  },
  status: {
    type: String,
  },
  simCount: {
    type: String,
  },
  rom: {
    type: String,
  },
  ram: {
    type: String,
  },
  color: {
    type: String,
  },
  isChange: {
    type: String,
  },
  price: {
    type: String,
  },
  description: {
    type: String,
  },
  carOperation: {
    type: String,
  },
  productionYear: {
    type: String,
  },
  fuel: {
    type: String,
  },
  enginStatus: {
    type: String,
  },
  chassisStatus: {
    type: String,
  },
  bodyStatus: {
    type: String,
  },
  insurance: {
    type: String,
  },
  gearbox: {
    type: String,
  },
  meterage: {
    type: String,
  },
  priceMeter: {
    type: String,
  },
  floor: {
    type: String,
  },
  elevator: {
    type: Boolean,
  },
  parking: {
    type: Boolean,
  },
  warehouse: {
    type: Boolean,
  },
  wc: {
    type: Boolean,
  },
  package: {
    type: Boolean,
  },
});

export default mongoose.models.Products ||
  mongoose.model("Products", productsSchema);
