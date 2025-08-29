const express = require('express');//
const bodyparser = require('body-parser');//
const myReqLogger = require('./Utilities/requestLogger');
const route = require('./Routes/routing');//
const cors=require('cors');//
const app = express();//

const corsOptions = {
  origin: [
    "https://master--ecomshops.netlify.app",
    "https://ecomshops.netlify.app"
  ]
};//

app.use(cors(corsOptions));//
app.use(bodyparser.json());//
app.use(bodyparser.urlencoded({ extended: true }));//
app.use(myReqLogger);//
app.use('/', route);

const port = process.env.PORT ||3000;//
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});//
