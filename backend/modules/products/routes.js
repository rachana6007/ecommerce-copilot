// Define routes for Create product, get products, get product by id
// add middleware to validate request body using Joi schemas and verify JWT tokens for protected routes
import express from "express";
import { createProduct, getProducts, getProductById } from "./controller.js";
import { validateSchema } from "../../config/middlewares/validateSchema.js";
import { createProductSchema } from "./schema.js";
import { verifyToken } from "../../config/middlewares/verifyToken.js";
const router = express.Router();

router.post("/", verifyToken, validateSchema(createProductSchema), createProduct);
router.get("/", verifyToken,getProducts);
router.get("/:id", getProductById);

export default router;