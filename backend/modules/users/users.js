// Create userService with functions getAllUsers, getUserById, createUser, updateUser, and deleteUser
// Use Supabase client from config/supabaseClient.js for all database operations
// Use async/await and proper error handling
// Each function should return data or throw an error message if operation fails
import supabase from '../../config/utils/supabaseClient.js';

const userService = {

    async getAllUsers() {
        try {
            const { data, error } = await supabase
                .from('users')
                .select('*');
            if (error) throw new Error(error.message);
            return data;
        } catch (error) {
            throw new Error(`Failed to get all users: ${error.message}`);
        }
    },

    async getUserById(id) {
        try {
            const { data, error } = await supabase
                .from('users')
                .select('*')
                .eq('id', id)
                .single();
            if (error) throw new Error(error.message);
            return data;
        } catch (error) {
            throw new Error(`Failed to get user by ID: ${error.message}`);
        }
    },

    async createUser(user) {
        try {
            const { data, error } = await supabase
                .from('users')
                .insert([user])
                .single();
            if (error) throw new Error(error.message);
            return data;
        } catch (error) {
            throw new Error(`Failed to create user: ${error.message}`);
        }
    },

    async updateUser(id, updates) {
        try {
            const { data, error } = await supabase
                .from('users')
                .update(updates)
                .eq('id', id)
                .single();
            if (error) throw new Error(error.message);
            return data;
        } catch (error) {
            throw new Error(`Failed to update user: ${error.message}`);
        }
    },

    async deleteUser(id) {
        try {
            const { data, error } = await supabase
                .from('users')
                .delete()
                .eq('id', id)
                .single();
            if (error) throw new Error(error.message);
            return data;
        } catch (error) {
            throw new Error(`Failed to delete user: ${error.message}`);
        }
    }
};

export default userService;