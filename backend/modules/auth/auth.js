// Create authService with functions registerUser and loginUser
// Use Supabase client from config/supabaseClient.js for all database operations
// Use async/await and proper error handling
// Each function should return data or throw an error message if operation fails

import supabase from '../../config/utils/supabaseClient.js';
import bcrypt from 'bcryptjs';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET || 'mysecretjwtkey';

const authService = {
    async registerUser({ email, password, fullName }) {
        try {
            // Check if user already exists 
            const { data: existingUser, error: fetchError } = await supabase
                .from('data_users')
                .select('*')
                .eq('email', email)
                .single();
            if (fetchError && fetchError.code !== 'PGRST116') {
                throw new Error(fetchError.message);
            }
            if (existingUser) {
                throw new Error('User already exists');
            }
            console.log('Registering user with email:', email);
            // Hash password
            const hashedPassword = await bcrypt.hash(password, 10);
            // Create new user
            const { data: newUser, error: insertError } = await supabase
                .from('data_users')
                .insert([{ email, password: hashedPassword, full_name: fullName }])
                .select()
                .single();
                console.log('Supabase insert response:', newUser, insertError);
            if (insertError) throw new Error(insertError.message);
            return { id: newUser.id, email: newUser.email, fullName: newUser.full_name };
        } catch (error) {
            return {
                success: false,
                status: StatusCodes.INTERNAL_SERVER_ERROR,
                message: `Failed to register user: ${error.message}`,
            };
        }
    },

    async loginUser({ email, password }) {
        try {
            // Fetch user by email
            const { data: user, error: fetchError } = await supabase
                .from('data_users')
                .select('*')
                .eq('email', email)
                .single();
            if (fetchError) throw new Error('Invalid email or password');
            // Compare passwords
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) throw new Error('Invalid email or password');
            // Generate JWT token
            const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
            return { userDetails: user, token };
        } catch (error) {
            throw new Error(`Failed to login user: ${error.message}`);
        }
    }
};

export default authService;