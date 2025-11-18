// Create Joi validation schemas for add wishlist item request body
import Joi from "joi";

export const addWishlistItemSchema = Joi.object({
    product_id: Joi.string().uuid().required().messages({
        "string.base": `"productId" should be a type of 'text'`,
        "string.empty": `"productId" cannot be an empty field`,
        "string.uuid": `"productId" must be a valid UUID`,
        "any.required": `"productId" is a required field`
    })
});
