import asyncHandler from "../middlewares/asyncHandler.js";
import musicServices from "../services/music.services.js";

export const createMusic = asyncHandler(async (req, res, next) => {
  const musicId = await musicServices.createMusic(req.body);
  return res.status(201).json({
    success: true,
    message: "Music created successfully",
    musicId: musicId,
  });
});

export const updateMusic = asyncHandler(async (req, res, next) => {
  const affectedRows = await musicServices.updateMusic(req.body);

  if (affectedRows === 0) {
    return res.status(404).json({ success: false, message: "Music not found" });
  }

  return res
    .status(200)
    .json({ success: true, message: "Music updated successfully" });
});

export const deleteMusic = asyncHandler(async (req, res, next) => {
  const affectedRows = await musicServices.deleteMusic(req.params.id);
  if (affectedRows === 0) {
    return res.status(404).json({ success: false, message: "Music not found" });
  }
  return res
    .status(200)
    .json({ success: true, message: "Music deleted successfully" });
});

export const getMusicById = asyncHandler(async (req, res, next) => {
  const music = await musicServices.getMusicById(req.params.id);
  if (!music) {
    return res.status(404).json({ success: false, message: "Music not found" });
  }
  return res.status(200).json({ success: true, music });
});

export const getAllMusic = asyncHandler(async (req, res, next) => {
  const { page, limit } = req.query;
  const offset = (page - 1) * limit;
  const music = await musicServices.getAllMusic(
    parseInt(limit),
    parseInt(offset)
  );
  return res.status(200).json({ success: true, music });
});
