import express from "express";
import {
  addProducts,
  deleteProducts,
  getProducts,
  updateProducts,
} from "../controller/product.controller.js";

const router = express.Router();

router.get("/", getProducts);

router.post("/", addProducts);

router.delete("/:id", deleteProducts);

router.put("/:id", updateProducts);

export default router;
