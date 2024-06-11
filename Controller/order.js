const orderRepo = require('../Model/orderSchema');
const userRepo = require('../Model/userSchema');
const validator = require('../Utilities/validator');
const helper = require('../Utilities/helpers');

exports.addOrders = async (req, res) => {

  if(validator.ValidUserId(req.body.use)){
    console.log('hi');
  }
    try {
      if ((validator.ValidateEmail(req.body.email) && validator.ValidUserId(req.body.userId))
      ){
        const Id = await helper.generateOrderId();
        
        const defect = await orderRepo.create({
          id: Id,
          email: req.body.email,
          address: req.body.address,
          contact:req.body.contact,
          userId:req.body.userId,
          totalPrice:req.body.totalPrice,
          
        });
        res.status(201).json({
          status: 'success',
          data: {
            defect
          },
        });
      } else if (!validator.userName(req.body.name)) {
        res.status(400).json({
          status: 'error',
          results: 'Enter valid username details',
        });
      } else if (!validator.ValidateEmail(req.body.email)) {
        res.status(400).json({
          status: 'error',
          results: 'Enter valid email Id',
        });
      
      } else if (!validator.ValidUserId(req.body.userId)) {
        res.status(400).json({
          status: 'error',
          results: 'Enter valid User Id',
        });
      
      };
     
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err,
      });
    }
  };
  
  exports.getOrders = async (req, res) => {
        try {
       await orderRepo.find({}, { _id: 0, __v: 0 },(err,doc)=>{
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

  exports.cancleOrder = async (req, res, err) => {
    const delOrder = await orderRepo.deleteOne({ id: req.params.id });
    if (delOrder.deletedCount === 0) {
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