const mongoose = require('mongoose');

const dotenv=require('dotenv');
dotenv.config({path:'./.env'});
const mongodbUrl=process.env.MONGODB_URL;
const mongodbUrl1=process.env.MONGODB_URL1;
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
  }).then(()=>{
    console.log('data is connected to database2.');
  })
// mongoose
//   .connect(mongodbUrl1, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   }).then(()=>{
//     console.log('data is connected to database1.');
//   })
  

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
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
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
const repo = mongoose.model('Product', Schema);





module.exports = repo;

//mongodb+srv://pranavkewate7820:jiCogXf0kE3tPGTF@ecommercedb.nt2pq1k.mongodb.net/?retryWrites=true&w=majority&appName=EcommerceDB
