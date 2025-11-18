// Create Joi validation schemas for user creation and update
// Validate fields like name, email, password, and role
// Export createUserSchema and updateUserSchema for use in user routes

import Joi from 'joi';

export const createUserSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().valid('admin', 'user').required()
});

export const updateUserSchema = Joi.object({
    name: Joi.string().min(3).max(30),
    email: Joi.string().email(),
    password: Joi.string().min(6),
    role: Joi.string().valid('admin', 'user')
}).min(1);