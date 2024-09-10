import artistServices from "../services/artist.services.js";
import asyncHandler from "../middlewares/asyncHandler.js";

export const createArtist = asyncHandler(async (req, res, next) => {
  const artistId = await artistServices.createArtist(req.body);
  return res.status(201).json({
    success: true,
    message: "Artist created successfully",
    artistId: artistId,
  });
});

export const updateArtist = asyncHandler(async (req, res, next) => {
  const affectedRows = await artistServices.updateArtist(req.body);

  if (affectedRows === 0) {
    return res
      .status(404)
      .json({ success: false, message: "Artist not found" });
  }

  return res
    .status(200)
    .json({ success: true, message: "Artist updated successfully" });
});

export const deleteArtist = asyncHandler(async (req, res, next) => {
  const affectedRows = await artistServices.deleteArtist(req.params.id);
  if (affectedRows === 0) {
    return res
      .status(404)
      .json({ success: false, message: "Artist not found" });
  }
  return res
    .status(200)
    .json({ success: true, message: "Artist deleted successfully" });
});

export const getArtistById = asyncHandler(async (req, res, next) => {
  const artist = await artistServices.getArtistById(req.params.id);
  if (!artist) {
    return res
      .status(404)
      .json({ success: false, message: "Artist not found" });
  }
  return res.status(200).json({ success: true, artist });
});

export const getAllArtists = asyncHandler(async (req, res, next) => {
  const { page, limit } = req.query;
  const offset = (page - 1) * limit;
  const artists = await artistServices.getAllArtists(
    parseInt(limit),
    parseInt(offset)
  );
  return res.status(200).json({ success: true, artists });
});
