import express from "express";

import {
  getProductById,
  getProducts,
} from "../controllers/productController.js";

const router = express.Router();

// @desc Fatch all products
// @route GET /api/products
// @access Fetch all products

router.route("/").get(getProducts);

router.route("/:id").get(getProductById);

export default router;
