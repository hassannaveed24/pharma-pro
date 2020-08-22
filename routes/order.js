const Order = require("../models/order");
const { Product } = require("../models/product");
const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().lean();
    res.status(200).send(orders);
  } catch (err) {
    res.status(406).send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const product = await Product.findById(req.body.productId);
    const { name, price, productImage } = product;

    if (!product)
      return res.status(404).send("The product with the given ID not found.");

    const order = new Order({
      product: {
        name,
        price,
        productImage,
      },
      quantity: req.body.quantity,
      totalPrice: price,
    });
    await order.save();

    const output = `
    <p>You have placed a new order</p>
    <h3>Invoice</h3>
    <ul>  
      <li>Product: ${name}</li>

      
      <li>Quantity: ${req.body.quantity}</li>
      <li>Total Price: ${price}</li>

    </ul>
  `;
    let transporter = nodemailer.createTransport({
      host: "www.google.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "jarvis50@ethereal.email", // generated ethereal user
        pass: "M8PTcTdQvUwQuS6bYZ", // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // setup email data with unicode symbols
    let mailOptions = {
      from: '"Nodemailer Contact" jarvis50@ethereal.email', // sender address
      to: "hassannaveed24@gmail.com", // list of receivers
      subject: "Node Contact Request", // Subject line
      text: "Hello world?", // plain text body
      html: output, // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

      res.render("contact", { msg: "Email has been sent" });
    });

    res.status(200).send(order);
  } catch (err) {
    res.status(406).send(err);
  }
});

module.exports = router;
