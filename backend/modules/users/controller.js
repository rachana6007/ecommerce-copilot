// Create a users controller with functions getAllUsers, getUserById, createUser, updateUser, and deleteUser
// Each function should use catchAsync and call corresponding methods from userService
// Use res.jsend.success(response, "message") for responses

import userService from "./users.js";
import catchAsync from "../../config/utils/catchAsync.js";
export const getAllUsers = catchAsync(async (req, res) => {
    const users = await userService.getAllUsers();
    return res.jsend.success(users, "Users retrieved successfully");
});

export const getUserById = catchAsync(async (req, res) => {
    const user = await userService.getUserById(req.params.id);
    return res.jsend.success(user, "User retrieved successfully");
});

export const createUser = catchAsync(async (req, res) => {
    const newUser = await userService.createUser(req.body);
    return res.jsend.success(newUser, "User created successfully");
});

export const updateUser = catchAsync(async (req, res) => {
    const updatedUser = await userService.updateUser(req.params.id, req.body);
    return res.jsend.success(updatedUser, "User updated successfully");
});

export const deleteUser = catchAsync(async (req, res) => {
    await userService.deleteUser(req.params.id);
    return res.jsend.success("User deleted successfully");
});

