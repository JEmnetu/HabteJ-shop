import express from "express";

import { authUser } from "../controllers/userController.js";

const router = express.Router();

// @desc Fatch all products
// @route GET /api/products
// @access Fetch all products
router.post("/login", authUser);

export default router;
