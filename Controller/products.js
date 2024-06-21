const repo = require('../Model/productSchema');
const validator = require('../Utilities/validator');
const helper = require('../Utilities/helpers');

exports.getHome = async (req, res) => {
  res.send('Home page for checking')
}

exports.addProducts = async (req, res) => {
  try {
    if (
      validator.sellerName(req.body.name) &&
      validator.productCategory(req.body.category)
    ) {
      const Id = await helper.generateProductId();
      const defect = await repo.insertMany({
        id: Id,
        name: req.body.name,
        price: req.body.price,
        color: req.body.color,
        category: req.body.category,
        description: req.body.description,
        image: req.body.image
      });
      res.status(201).json({
        status: 'success',
        data: {
          defect,
        },
      });
    } else if (!validator.productName(req.body.name)) {
      res.status(400).json({
        status: 'error',
        results: 'Enter valid logger details',
      });

    } else if (!validator.productCategory(req.body.Category)) {
      res.status(400).json({
        status: 'error',
        results: 'Enter valid category',
      });
    }
    //  else if (!validator.ValidatedPassword(req.body.Password)) {
    //   res.status(400).json({
    //     status: 'error',
    //     results: 'Password should be 8 character.',
    //   });
    // }
    //  else if (!validator.ValidateEmail(req.body.EmailId)) {
    //   res.status(400).json({
    //     status: 'error',
    //     results: 'Email is Invalid ',
    //   }  );
    // }
    // else if(!validator.ValidatePhoneNo(req.body.PhoneNo)){
    //   res.status(400).json({
    //     status: 'error',
    //     results: 'Phone Number is Invalid ',
    //   });
    // }
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getProducts = async (req, res) => {

  try {
    const products = await repo.find({}, { __V: 0, _id: 0 });
    if (products) {
      res.send(products);
    } else {
      res.status(400).json({
        status: 'success',
        data: {
          message: 'No defects available in the repo',
        },
      });
    }
    // if (defect.length > 0) {
    //   res.status(200).json({
    //    defect

    //   });
    // } else {
    //   res.status(400).json({
    //     status: 'success',
    //     data: {
    //       message: 'No defects available in the repo',
    //     },
    //   });
    // }
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const productById = await repo.findOne({ id: req.params.id }, { __V: 0, _id: 0 });
    if (!productById) {
      console.log('Error Occures While fetching Data' + err);
      res.status(400).send('Internal Error', err);
    }
    else {
      res.send(productById);
    }
    // await repo.findOne({ id: req.params.id }, { _id: 0, __v: 0 }, (err, doc) => {
    //   if (err) {
    //     console.log('Error Occures While fetching Data' + err);
    //     res.status(400).send('Internal Error', err);
    //   } else {
    //     res.send(doc);
    //   }
    // });

  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const products = await repo.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      {
        new: true, //to return new doc back
        runValidators: true, //to run the validators which specified in the model
      }
    );
    if (products != null) {
      res.send(products);
      // res.status(200).json({
      //   status: 'success',
      //   data: {
      //     products,
      //   },
      // });
    } else {
      res.status(400).json({
        status: 'success',
        data: {
          message: `No defects available with ID ${req.params.id} `,
        },
      });
    }
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteProduct = async (req, res, err) => {
  const delDet = await repo.deleteOne({ id: req.params.id });
  if (delDet.deletedCount === 0) {
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

exports.invalid = async (req, res) => {
  res.status(404).json({
    status: 'fail',
    message: 'Invalid path',
  });
};


exports.searchProduct = async (title) => {
  try {
    let result = [];
    if (title) {
      // Even you can perform regex in your search 
      result = await repo.find({ title: title });
    }
    return result;
  } catch (err) {
    const errorObj = { code: 500, error: 'Internal server error' }; // It can be dynamic
    throw errorObj;
  }
};
