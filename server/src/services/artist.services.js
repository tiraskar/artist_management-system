import { Artist } from "../models/Artist.js";

const createArtist = async (obj) => {
  const {
    name,
    dob,
    gender,
    address,
    first_release_year,
    no_of_albums_released,
  } = obj;

  const artistId = await Artist.create({
    name,
    dob,
    gender,
    address,
    first_release_year,
    no_of_albums_released,
    created_at: new Date(),
  });

  return artistId;
};

const updateArtist = async (obj) => {
  const {
    id,
    name,
    dob,
    gender,
    address,
    first_release_year,
    no_of_albums_released,
    updated_at,
  } = obj;

  const affectedRows = await Artist.update({
    id,
    name,
    dob,
    gender,
    address,
    first_release_year,
    no_of_albums_released,
    updated_at,
    updated_at: new Date(),
  });

  return affectedRows;
};

const deleteArtist = async (id) => {
  const affectedRows = await Artist.deleteArtist(id);
  return affectedRows;
};

const getArtistById = async (id) => {
  const artist = await Artist.getArtistById(id);
  return artist;
};

const getAllArtists = async (limit, offset) => {
  const artists = await Artist.getAllArtists(limit, offset);
  return artists;
};

const artistServices = {
  createArtist,
  updateArtist,
  deleteArtist,
  getArtistById,
  getAllArtists,
};

export default artistServices;
