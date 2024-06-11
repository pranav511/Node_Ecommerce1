const mongoose = require('mongoose');

const Schema = new mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
      required: true,
    },
    address: {
      type: String,
      required: true,
    }, 
    email: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
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
const repo = mongoose.model('Order', Schema);

module.exports = repo;
