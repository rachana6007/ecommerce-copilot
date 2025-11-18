// Create an Express server with CORS and JSON parsing middleware, and routes for users, auth, products and wishlist
import express from "express";
import cors from "cors";
import jsend from "jsend";
import userRoutes from "./modules/users/routes.js";
import authRoutes from "./modules/auth/routes.js";
import productRoutes from "./modules/products/routes.js";
import wishlistRoutes from "./modules/wishlist/routes.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(jsend.middleware);
app.use(express.json());
app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/products", productRoutes);
app.use("/wishlist", wishlistRoutes)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
export default app; 