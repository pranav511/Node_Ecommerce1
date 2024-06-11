const productRepo = require('../Model/productSchema');
const sellerRepo = require('../Model/sellerSchema');
const userRepo = require('../Model/userSchema');
const orderRepo = require('../Model/orderSchema');

exports.generateProductId = async () => {
  const product = await productRepo.find({});
  const Id = "P"+ 1001 + product.length;
  return Id;
};
exports.generateSellerId = async () => {
  const seller = await sellerRepo.find({});
  const Id = "S"+ 1001 + seller.length;
  return Id;
};
exports.generateUserId = async () => {
  const user = await userRepo.find({});
  const Id = "U"+ 1001 + user.length;
  return Id;
};
exports.generateOrderId = async () => {
  const user = await orderRepo.find({});
  const Id = "O"+ 1001 + user.length;
  return Id;
};
