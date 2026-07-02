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
  const { name, description, category } = req.body;
  const price = parseFloat(req.body.price);
  const stock = parseInt(req.body.stock, 10);
  const imagePath = req.file ? req.file.path.replace(/\\/g, "/") : req.body.image;

  if (!name || name.length < 3) {
    return res
      .status(400)
      .json({ message: "Name must be at least 3 characters" });
  }

  if (!price || isNaN(price) || price <= 0) {
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

  if (isNaN(stock) || stock < 0) {
    return res.status(400).json({ message: "Stock cannot be negative" });
  }
  try {
    const products = await product.create({
      name,
      price,
      description,
      category,
      stock,
      image: imagePath,
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
  const { name, description, category } = req.body;
  const price = req.body.price !== undefined ? parseFloat(req.body.price) : undefined;
  const stock = req.body.stock !== undefined ? parseInt(req.body.stock, 10) : undefined;

  if (name !== undefined && name.length < 3) {
    return res
      .status(400)
      .json({ message: "Name must be at least 3 characters" });
  }

  if (price !== undefined && (isNaN(price) || price <= 0)) {
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

  if (stock !== undefined && (isNaN(stock) || stock < 0)) {
    return res.status(400).json({ message: "Stock cannot be negative" });
  }
  try {
    const updateFields = { name, description, category };
    if (price !== undefined) updateFields.price = price;
    if (stock !== undefined) updateFields.stock = stock;
    const updateProduct = await product.findByIdAndUpdate(
      id,
      updateFields,
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
