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
    password:{
        type:String,
        required:true
    },
    email:{
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
const repo = mongoose.model('User', Schema);

module.exports = repo;
