const repo = require('../Model/userSchema');
const validator = require('../Utilities/validator');
const helper = require('../Utilities/helpers');

exports.addUsers = async (req, res) => {
    try {
      if (
        validator.userName(req.body.name) && (validator.ValidateEmail(req.body.email))
      ) {
        const Id = await helper.generateUserId();
        const defect = await repo.create({
          id: Id,
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          
        });
        res.status(201).json({
          status: 'success',
          data: {
            defect,
          },
        });
      } else if (!validator.userName(req.body.name)) {
        res.status(400).json({
          status: 'error',
          results: 'Enter valid username details',
        });
      }else if (!validator.ValidateEmail(req.body.email)) {
        res.status(400).json({
          status: 'error',
          results: 'Enter valid email Id',
        });
      
      }
      
     
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err,
      });
    }
  };
  
  exports.getUsers = async (req, res) => {
        try {
       await repo.find({email:req.query.email,password:req.query.password}, { _id: 0, __v: 0 },(err,doc)=>{
        if(err){
          console.log('Error Occures While fetching Data' +err);
          res.status(400).send('Internal Error', err);
      }else{
          res.send(doc);
      }
      });
    
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err,
      });
    }
  };