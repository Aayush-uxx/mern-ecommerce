import product from "../models/product.js";
const getProducts = async (req, res) => {
  try {
    const products = await product.find({});

    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const productById = await product.findById(id);
    if (!productById) {
      res.status(400).json({ message: "No products found ! " });
    }
    res.status(200).json(productById);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  const { name, price, description, category, stock, image } = req.body;
  if (!name || name.length < 3) {
    return res
      .status(400)
      .json({ message: "Name must be at least 3 characters" });
  }

  if (!price || price <= 0 || typeof price !== "number") {
    return res
      .status(400)
      .json({ message: "Valid price greater than 0 is required" });
  }

  if (!description || description.length < 10) {
    return res
      .status(400)
      .json({ message: "Description must be at least 10 characters" });
  }

  if (!category) {
    return res.status(400).json({ message: "Category is required" });
  }

  if (stock < 0) {
    return res.status(400).json({ message: "Stock cannot be negative" });
  }
  try {
    const products = await product.create({
      name,
      price,
      description,
      category,
      stock,
      image,
    });
    if (!products) {
      res.status(400).json({ message: "Failed to create product" });
    }
    res.status(201).json({
      message: "Product created successfully ",
      product: products._id,
      price: products.price,
      category: products.category,
      stock: products.stock,
      image: products.image,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, description, category, stock, image } = req.body;
  if (name !== undefined && name.length < 3) {
    return res
      .status(400)
      .json({ message: "Name must be at least 3 characters" });
  }

  if (price !== undefined && (price <= 0 || typeof price !== "number")) {
    return res.status(400).json({ message: "Price must be greater than 0" });
  }

  if (description !== undefined && description.length < 10) {
    return res
      .status(400)
      .json({ message: "Description must be at least 10 characters" });
  }

  if (category !== undefined && !category) {
    return res.status(400).json({ message: "Category cannot be empty" });
  }

  if (stock !== undefined && stock < 0) {
    return res.status(400).json({ message: "Stock cannot be negative" });
  }
  try {
    const updateProduct = await product.findByIdAndUpdate(
      id,
      { name, price, description, category, stock, image },
      { new: true }
    );
    if (!updateProduct) {
      res.status(400).json({ message: "No product found to update" });
    }
    res.status(200).json(updateProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteProduct = await product.findByIdAndDelete(id);
    if (!deleteProduct) {
      res.status(400).json({ message: "No product found to delete" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
