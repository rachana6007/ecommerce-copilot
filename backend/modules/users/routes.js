// Define routes for CRUD operations on users
// users routes should start with /users
// add middleware to validate request body using Joi schemas and verify JWT tokens for protected routes
import express from "express";
import {
    getAllUsers,
    getUserById,
    createUser,
    updateUser, 
    deleteUser
} from "./controller.js";
import { validateSchema } from "../../config/middlewares/validateSchema.js";
import { verifyToken } from "../../config/middlewares/verifyToken.js";
import { createUserSchema, updateUserSchema } from "./schema.js";
const router = express.Router();

router.get("/", verifyToken, getAllUsers);
router.get("/:id", verifyToken, getUserById);
router.post("/", verifyToken, validateSchema(createUserSchema), createUser);
router.put("/:id", verifyToken, validateSchema(updateUserSchema), updateUser);
router.delete("/:id", verifyToken, deleteUser);

export default router;