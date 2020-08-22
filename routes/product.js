const Product = require("../models/product");
const express = require("express");
const router = express.Router();

var multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new Error("Not Allowed/Applicable"), false);
  }
};

const upload = multer({
  storage,
  limits: { fileSize: 1024 * 1024 * 5 },
  fileFilter,
});

router.get("/", async (req, res) => {
  try {
    const products = await Product.find().lean();
    res.status(200).send(products);
  } catch (err) {
    res.status(406).send(err);
  }
});

router.post("/", upload.single("productImage"), async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    const productImage = req.file.path;
    const product = new Product({
      name,
      price,
      quantity,
      productImage,
    });
    await product.save();
    res.status(200).send(product);
  } catch (err) {
    res.status(406).send(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    const productImage = req.file.path;
    const product = await Product.findOneAndUpdate(
      req.params.id,
      {
        name,
        price,
        quantity,
        productImage,
      },
      {
        new: true,
      }
    );
    if (!product)
      return res.status(404).send("The product with the given ID not found.");

    res.status(200).send(product);
  } catch (err) {
    res.status(406).send(err);
  }
});

router.delete("/:id", async (req, res) => {});

module.exports = router;
