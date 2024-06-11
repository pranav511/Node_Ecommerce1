const mongoose = require('mongoose');

const Schema = new mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
    }, 
    price: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    description:{
      type:String,
      required:true
    },
    image:{
      type:String,
      required:true
    },
    category:{
      type:String,
      required:true,
    },
    quntity:{
      type:Number,
      required:true,
    },
    productId:{
      type:String,
      required:true
    },
    userId:{
      type:String,
      required:true
    }
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
);
//Model
const repo = mongoose.model('Cart', Schema);

module.exports = repo;
