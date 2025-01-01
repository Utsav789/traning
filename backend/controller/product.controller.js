import Product from "../models/products.model.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    return res
      .status(200)
      .json({ success: true, message: "all data are fetched", data: products });
  } catch (error) {
    return res
      .status(404)
      .json({ success: false, message: "Sorry something went wrong" });
  }
};

export const addProducts = async (req, res) => {
  const product = req.body; //user sends request
  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }
  const newProduct = new Product(product);

  try {
    await newProduct.save();

    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error in create product:", error.message);
    return res.status(500).json({ success: false, message: "server error" });
  }
};

export const deleteProducts = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    return res.status(200).json({ success: true, message: "Product Deleted" });
  } catch (error) {
    return res.status(404).json({ success: false, message: "not found" });
  }
};

export const updateProducts = async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "invalid Product Id" });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    return res
      .status(200)
      .json({ success: true, message: "data updated", data: updatedProduct });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};
