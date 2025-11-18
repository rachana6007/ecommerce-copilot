// Create a products controller with functions createProduct, getProducts, and getProductById
// Each function should use catchAsync and call corresponding methods from productService
// Use res.jsend.success(response, "message") for responses

import productService from "./products.js";
import catchAsync from "../../config/utils/catchAsync.js";
export const createProduct = catchAsync(async (req, res) => {
    const newProduct = await productService.createProduct(req.body);
    return res.jsend.success(newProduct, "Product created successfully");
}
);

export const getProducts = catchAsync(async (req, res) => {
    const products = await productService.getProducts();
    return res.jsend.success(products, "Products retrieved successfully");
}
);

export const getProductById = catchAsync(async (req, res) => {
    const product = await productService.getProductById(req.params.id);
    return res.jsend.success(product, "Product retrieved successfully");
}
);
