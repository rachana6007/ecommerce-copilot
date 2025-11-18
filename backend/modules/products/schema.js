// Create Joi validation schemas for add products
import Joi from "joi";

export const createProductSchema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    sku: Joi.string().min(3).max(100).required(),
    description: Joi.string().max(500).optional(),
    price: Joi.number().positive().required(),
    inventory_count: Joi.number().integer().min(0).required()
});