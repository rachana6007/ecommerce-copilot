// Define routes for add, remove, list wishlist items
// add middleware to validate request body using Joi schemas and verify JWT tokens for protected routes
import express from "express";
import { addWishlistItem, removeWishlistItem, listWishlistItems } from "./controller.js";
import { validateSchema } from "../../config/middlewares/validateSchema.js";
import { verifyToken } from "../../config/middlewares/verifyToken.js";
import { addWishlistItemSchema } from "./schema.js";
const router = express.Router();

router.post(
    "/",
    verifyToken,
    validateSchema(addWishlistItemSchema),
    addWishlistItem
);

router.delete(
    "/:id",
    verifyToken,
    removeWishlistItem
);

router.get(
    "/",
    verifyToken,
    listWishlistItems
);

export default router;