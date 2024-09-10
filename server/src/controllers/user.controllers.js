import asyncHandler from "../middlewares/asyncHandler.js";
import userServices from "../services/user.services.js";

export const createUser = asyncHandler(async (req, res, next) => {
  const userId = await userServices.createUser(req.body);
  return res.status(201).json({
    success: true,
    message: "User created successfully",
    userId: userId,
  });
});

export const updateUser = asyncHandler(async (req, res, next) => {
  const affectedRows = await userServices.updateUser(req.body);

  if (affectedRows === 0) {
    return res.status(404).json({ success: false, message: "User not found" });
  }

  return res
    .status(200)
    .json({ success: true, message: "User updated successfully" });
});

export const deleteUser = asyncHandler(async (req, res, next) => {
  const affectedRows = await userServices.deleteUser(req.params.id);
  if (affectedRows === 0) {
    return res.status(404).json({ success: false, message: "User not found" });
  }
  return res
    .status(200)
    .json({ success: true, message: "User deleted successfully" });
});

export const getUserById = asyncHandler(async (req, res, next) => {
  const user = await userServices.getUserById(req.params.id);
  if (!user) {
    return res.status(404).json({ success: false, message: "User not found" });
  }
  return res.status(200).json({ success: true, user });
});

export const getAllUsers = asyncHandler(async (req, res, next) => {
  const { page, limit } = req.query;
  const offset = (page - 1) * limit;
  const users = await userServices.getAllUsers(
    parseInt(limit),
    parseInt(offset)
  );
  return res.status(200).json({ success: true, users });
});
