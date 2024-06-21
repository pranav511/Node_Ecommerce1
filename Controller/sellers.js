const repo = require('../Model/sellerSchema');
const validator = require('../Utilities/validator');
const helper = require('../Utilities/helpers');

exports.addSellers = async (req, res) => {
    try {
      if (
        validator.sellerName(req.body.name) && (validator.ValidateEmail(req.body.email))
      ) {
        const Id = await helper.generateSellerId();
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
      } else if (!validator.sellerName(req.body.name)) {
        res.status(400).json({
          status: 'error',
          results: 'Enter valid logger details',
        });
      }
      else if (!validator.ValidateEmail(req.body.email)) {
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
  
  exports.getSellers = async (req, res) => {
    
    try {
      const sellers = await repo.find({email:req.query.email,password:req.query.password}, { _id: 0, __v: 0 });
      if (!sellers) {
        console.log('Error Occures While fetching Data' + err);
        res.status(400).send('Internal Error', err);
      }
      else {
        res.send(sellers);
      }
    
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err,
      });
    }
  };