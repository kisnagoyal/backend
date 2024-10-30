import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    
  },
  name: {
    type: String,
    required: true,
  },

  productImage: {   // image will be stored in any cloud or something and we will have url of that image that is string
    type: String, 

  },

  price: {
    type: Number,
    default: 0,
  },

  stock:{
    type: String,
    default: 0
  },

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,

  },

  owner: {
    type: momgoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }

},{timestamps: true})

export const Product = mongoose.model("Product",productSchema);