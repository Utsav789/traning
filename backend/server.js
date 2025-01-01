// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
import Product from "./models/products.model.js";
import mongoose from "mongoose";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
app.use(express.json());
//?port
const port = process.env.PORT || 5000;

app.use("/api/products", productRoutes);

app.listen(port, (err) => {
  connectDb();
  if (err) {
    err;
  } else {
    console.log("The app is listening in port 5000.");
  }
});
// AH224XN16Hi2Cvk5
