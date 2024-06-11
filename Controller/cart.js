const cartRepo = require('../Model/cartSchema');
const validator = require('../Utilities/validator');
const helper = require('../Utilities/helpers');

exports.addCarts = async (req, res) => {
    try {
      if (
        validator.userName(req.body.name)
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
      
      };
     
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err,
      });
    }
  };
  
  exports.getCarts = async (req, res) => {
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

  exports.removeToCarts = async (req, res, err) => {
    const delCart = await cartRepo.deleteOne({ id: req.params.id });
    if (delCart.deletedCount === 0) {
      res.status(404).json({
        status: 'fail',
        message: 'No defect available for this ID',
      });
    } else {
      res.status(200).json({
        status: 'success',
        message: `Defect with ${req.params.id} ID deleted`,
      });
    }
  };