// Create a Joi validation middleware for Express
// Takes a Joi schema object and validates req.body (can be extended for params or query if needed)
// Uses Joi validation with custom preferences (no abortEarly, clear error labels)
// Write ValidationMiddlewareError class for handling validation errors
// If validation fails, return status 400 and custom error msg
// If validation succeeds, replaces req.body with validated data and calls next()
import { StatusCodes } from "http-status-codes";

export const validateSchema = (schema) => {
    return (req, res, next) => {
        if (!req.body) {
            return res.status(400).json({ message: "Request body missing" });
        }
        const options = {
            abortEarly: false,
            errors: {
                wrap: { label: '' }
            }
        };
        const { error, value } = schema.validate(req.body, options);
        if (error) {
            const errorDetails = error.details.map(detail => detail.message);
            return res.status(StatusCodes.BAD_REQUEST).json({
                success: false,
                message: errorDetails
            });
        }
        req.body = value;
        next();
    }
};