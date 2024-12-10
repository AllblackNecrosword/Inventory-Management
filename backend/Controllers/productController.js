import { Product } from "../Models/productModel.js";
import cloudinary from "../ultils/cloudinary.js";
import mongoose from "mongoose";

const createProduct = async (req, res) => {
  const { name, sku, category, quantity, price, description } = req.body;

  // Validate required fields
  if (!name || !sku || !category || !quantity || !price || !description) {
    return res.status(400).json({ message: "All fields are required" });
  }

  let imageURL = "";
  if (req.file) {
    // imageURL = req.file.originalname;
    // const upload = await cloudinary.uploader.upload(req.file.path, {
    //   folder: "Inventory",
    //   allowed_formats: ["jpeg", "png", "jpg"],
    // });
    // imageURL = upload.secure_url;
    imageURL = req.file.path;
  }

  try {
    // Create the product in the database
    const product = await Product.create({
      user: req.user.id, // Assuming you have user data in req.user
      name,
      sku,
      category,
      quantity,
      price,
      description,
      image: imageURL,
    });

    res.status(200).json({ message: "Product created successfully", product });
  } catch (error) {
    console.error("Database Error:", error);
    return res.status(500).json({ message: "Error creating product", error });
  }
};

const getAllProduct = async (req, res) => {
  try {
    const product = await Product.find().populate("user").select("-password");
    // console.log("User accessing products:", req.user);

    if (!product) {
      res.status(404).json({ message: "No Product Found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "Product ID is required" });
  }
  try {
    const product = await Product.findOneAndDelete(id);
    if (!product) {
      res.status(401).json({ message: "No product found" });
    }
    res.status(200).json({ message: "Product Deleted Sucessfully" });
  } catch (error) {
    console.log(error);
  }
};

// const updateProduct = async (req, res) => {
//   const { name, sku, category, price, description, quantity } = req.body;
//   const { productId } = req.body;
//   console.log(req.body);
//   console.log(productId);
//   try {
//     const product = await Product.findById(productId);
//     if (!product) {
//       res.status(401).json({ message: "Product not found" });
//     }
//     if (name) product.name = name;
//     if (sku) product.sku = sku;

//     if (category) product.category = category;

//     if (price) product.price = price;

//     if (description) product.description = description;

//     if (quantity) product.quantity = quantity;

//     await product.save();

//     res.status(200).json({ message: "Product updated Sucessfully", product });
//   } catch (error) {
//     console.log(error);
//   }
// };

const updateProduct = async (req, res) => {
  const { name, sku, category, price, description, quantity, productID } =
    req.body;

  try {
    // Fetch the product
    const product = await Product.findById(productID);

    // console.log("product found",product);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Update product fields conditionally
    if (name) product.name = name;
    if (sku) product.sku = sku;
    if (category) product.category = category;
    if (price) product.price = price;
    if (description) product.description = description;
    if (quantity) product.quantity = quantity;

    // Save updated product
    await product.save();

    return res
      .status(200)
      .json({ message: "Product updated successfully", product });
  } catch (error) {
    console.error("Error updating product:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export { createProduct, getAllProduct, deleteProduct, updateProduct };
