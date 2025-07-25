import asyncHandler from "../middlewares/asyncHandler.js";
import authServices from "../services/auth.services.js";

export const signUp = asyncHandler(async (req, res, next) => {
  const userId = await authServices.signUp(req.body);
  return res.status(201).json({
    success: true,
    message: "User registered successfully",
    userId: userId,
  });
});

export const signIn = asyncHandler(async (req, res, next) => {
  const { accessToken, user } = await authServices.signIn(req.body);
  const { password, ...rest } = user
  return res.status(200).json({
    success: true,
    message: "User signed in successfully",
    accessToken,
    user: rest
  });
});
