require('dotenv').config();
const http = require('http');
const app = require('./app');
const { Op } = require("sequelize");

const DBCONNECTION = require('./configs/db');
const Address = require('./models/address');
const Category = require('./models/category');
const Product = require('./models/product');
const Orders = require('./models/orders');
const orderDetails = require('./models/order_details');
const paymentMethod = require('./models/payment_method');
const Users = require('./models/users');
const shippingCategory = require('./models/shipping_category');

const server = http.createServer(app);

const PORT = process.env.PORT || 3010;

server.listen(PORT);
server.on('err', (err)=>{ console.log(err) });
server.on('listening', async()=>{
  try {
    await DBCONNECTION.authenticate();
   const address = await Address.get();
   const category = await Category.get();
   const product =await Product.get();
   const orders =await Orders.get();
   const order_details =await orderDetails.get();
   const payment_method =await paymentMethod.get();
   const shipping_category =await shippingCategory.get();
   const users =await Users.get();



    // Logging address data
    console.log('-- data tabel address');
    console.log(address);
    console.log('-- data tabel Category');
    console.log(category);
    console.log('-- data tabel product');
    console.log(product);
    console.log('-- data tabel orders');
    console.log(orders);
    console.log('-- data tabel order details');
    console.log(order_details);
    console.log('-- data tabel payment method');
    console.log(payment_method);
    console.log('-- data tabel shipping category');
    console.log(shipping_category);
    console.log('-- data tabel users');
    console.log(users);

  } catch (error) {
    console.log(error);
  }
  console.log('Server ready');
});

