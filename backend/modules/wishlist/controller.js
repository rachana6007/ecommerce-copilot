// Create a wishlist controller with functions addWishlistItem, removeWishlistItem, and listWishlistItems
// Each function should use catchAsync and call corresponding methods from productService
// Use res.jsend.success(response, "message") for responses

import wishlistService from "./wishlist.js";
import catchAsync from "../../config/utils/catchAsync.js";
export const addWishlistItem = catchAsync(async (req, res) => {
    const wishlistItem = await wishlistService.addWishlistItem(req.user.id, req.body);
    return res.jsend.success(wishlistItem, "Wishlist item added successfully");
});

export const removeWishlistItem = catchAsync(async (req, res) => {
    await wishlistService.removeWishlistItem(req.user.id, req.params.id);
    return res.jsend.success("Wishlist item removed successfully");
});
export const listWishlistItems = catchAsync(async (req, res) => {
    const wishlistItems = await wishlistService.listWishlistItems(req.user.id);
    return res.jsend.success(wishlistItems, "Wishlist items retrieved successfully");
});
