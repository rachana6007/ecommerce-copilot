// Create productService with functions createProduct, getProducts, and getProductById
// Use Supabase client from config/supabaseClient.js for all database operations
// Use async/await and proper error handling
// Each function should return data or throw an error message if operation fails

import supabase from '../../config/utils/supabaseClient.js';

const productService = {
    async createProduct({ name, sku, description, price, inventory_count }) {
        try {
            const { data: newProduct, error } = await supabase
                .from('data_products')
                .insert([{ name, sku, description, price, inventory_count }])
                .select()
                .single();
            if (error) throw new Error(error.message);
            return newProduct;
        } catch (error) {
            throw new Error(`Failed to create product: ${error.message}`);
        }
    },

    async getProducts() {
        try {
            const { data: products, error } = await supabase
                .from('data_products')
                .select('*, core_categories(code, label, description, folder_name)');
            if (error) throw new Error(error.message);
            return products;
        } catch (error) {
            throw new Error(`Failed to retrieve products: ${error.message}`);
        }
    },
    async getProductById(id) {
        try {
            const { data: product, error } = await supabase
                .from('data_products')
                .select('*')
                .eq('id', id)
                .single();
            if (error) throw new Error(error.message);
            return product;
        } catch (error) {
            throw new Error(`Failed to retrieve product: ${error.message}`);
        }
    }
};

export default productService;
