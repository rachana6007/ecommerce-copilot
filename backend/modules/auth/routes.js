// Define routes for user registration and login
// add middleware to validate request body using Joi schemas and verify JWT tokens for protected routes
import express from "express";
import { registerUser, loginUser } from "./controller.js";
import { validateSchema } from "../../config/middlewares/validateSchema.js";
import { registerSchema, loginSchema } from "./schema.js";
const router = express.Router();

router.post("/register", validateSchema(registerSchema), registerUser);
router.post("/login", validateSchema(loginSchema), loginUser);

export default router;