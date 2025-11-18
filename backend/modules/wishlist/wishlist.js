// Create wishlistService with functions addWishlistItem, removeWishlistItem, and listWishlistItems
// Use Supabase client from config/supabaseClient.js for all database operations
// Use async/await and proper error handling
// Each function should return data or throw an error message if operation fails

import supabase from '../../config/utils/supabaseClient.js';
const wishlistService = {

    async addWishlistItem(userId, item) {
        try {
            const wishlistItem = {
                user_id: userId,
                product_id: item.product_id,
                created_at: new Date()
            };
            const { data, error } = await supabase
                .from('data_wishlist')
                .insert([wishlistItem])
                .single();
            if (error) throw new Error(error.message);
            return data;
        } catch (error) {
            throw new Error(`Failed to add wishlist item: ${error.message}`);
        }
    },

    async removeWishlistItem(userId, itemId) {
        try {
            const { data, error } = await supabase
                .from('data_wishlist')
                .delete()
                .eq('id', itemId)
                .eq('user_id', userId);
            if (error) throw new Error(error.message);
            return data;
        } catch (error) {
            throw new Error(`Failed to remove wishlist item: ${error.message}`);
        }
    },

    async listWishlistItems(userId) {
        try {
            const { data, error } = await supabase
                .from('data_wishlist')
                .select('*')
                .eq('user_id', userId);
            if (error) throw new Error(error.message);
            return data;
        } catch (error) {
            throw new Error(`Failed to list wishlist items: ${error.message}`);
        }
    }
};

export default wishlistService;