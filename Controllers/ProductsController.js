const express = require("express");
const Router = express.Router();
const Product = require("../Models/Product");

exports.productIndex = async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
};

exports.createNewProduct = async (req, res) => {
  try{
    const product = await Product.create(req.body);
    res.status(201).json(product);
  }catch(error){
    res.status(401).json(error.message);
  }
};

exports.updateProduct = async (req, res) => {
  try{
    const product = await Product.findByIdAndUpdate(req.params.id, req.body);
    res.status(202).json(product);
  }catch(error){
    res.status(401).json(error.message);
  }
};

exports.getSingleProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.status(200).json(product);
};

exports.deleteProduct = async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id, req.body);
  res.status(200).json("Product deleted successfully");
};
