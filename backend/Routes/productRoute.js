import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  updateProduct,
} from "../Controllers/productController.js";
import upload from "../Middlewares/multer.js";
import Protect from "../Middlewares/authMiddleware.js";

const router = express();
router.post("/createProduct", Protect, upload.single("image"), createProduct);
router.get("/getproduct", Protect, getAllProduct);
router.delete("/deleteProduct/:id", deleteProduct);
router.put("/updateProduct", updateProduct);

export default router;
