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
  const { email, password } = req.body;
  const accessToken = await authServices.signIn(email, password);
  return res.status(200).json({
    success: true,
    message: "User signed in successfully",
    accessToken,
  });
});
