// Create a auth controller with functions registerUser and loginUser
// Each function should use catchAsync and call corresponding methods from authService
// Use res.jsend.success(response, "message") for responses
import authService from "./auth.js";
import catchAsync from "../../config/utils/catchAsync.js";
export const registerUser = async (req, res) => {
    try {
        const newUser = await authService.registerUser(req.body);
        return res.jsend.success(newUser, "User registered successfully");
    } catch (err) {
        return res.jsend.error(err.message);
    }
};


export const loginUser = catchAsync(async (req, res) => {
    const token = await authService.loginUser(req.body);
    return res.jsend.success({ token }, "User logged in successfully");
});
