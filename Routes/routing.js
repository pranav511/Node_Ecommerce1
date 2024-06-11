const express = require('express');//

const routing = express.Router();//

const productController = require('../Controller/products');//

const sellerController = require('../Controller/sellers');//

const userController = require('../Controller/users');//

const orderController = require('../Controller/order');//

const cartController = require('../Controller/cart');//

//products API

routing.post('/products', productController.addProducts);//

routing.get('/products', productController.getProducts);//

routing.get('/products/:id', productController.getProductById);//

routing.delete('/products/:id', productController.deleteProduct);//

routing.put('/products/:id', productController.updateProduct);


//Sellers API

routing.post('/sellers', sellerController.addSellers);//

routing.get('/sellers', sellerController.getSellers);//

//Users API

routing.post('/users', userController.addUsers);//

routing.get('/users', userController.getUsers);//

//Carts API

routing.post('/carts', cartController.addCarts);

routing.get('/carts', cartController.getCarts);

//Orders API

routing.post('/orders', orderController.addOrders);

routing.get('/orders', orderController.getOrders); 

routing.delete('/orders/:id', orderController.cancleOrder);

//General for check
routing.get('/api',productController.getHome);


// routing.get('/tracker/:logger', tracker.getUserDefects);

// routing.put('/tracker/:id', tracker.updateDefect);

// routing.delete('/tracker/:id', tracker.deleteDefect);

//Invalid API

routing.all('*', productController.invalid);

module.exports = routing;
