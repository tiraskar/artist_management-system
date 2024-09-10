import { Music } from "../models/Music.js";

const createMusic = async (obj) => {
  const { title, album_name, genre, artist_id } = obj;

  const musicId = await Music.createMusic({
    title,
    album_name,
    genre,
    artist_id,
    created_at: new Date(),
  });

  return musicId;
};

const updateMusic = async (obj) => {
  const { id, artist_id, title, album_name, genre } = obj;

  const affectedRows = await Music.updateMusic({
    id,
    artist_id,
    title,
    album_name,
    genre,
    updated_at: new Date(),
  });

  return affectedRows;
};

const deleteMusic = async (id) => {
  const affectedRows = await Music.deleteMusic(id);
  return affectedRows;
};

const getMusicById = async (id) => {
  const music = await Music.getMusicById(id);
  return music;
};

const getAllMusic = async (limit, offset) => {
  const music = await Music.getAllMusic(limit, offset);
  return music;
};

const musicServices = {
  createMusic,
  updateMusic,
  deleteMusic,
  getMusicById,
  getAllMusic,
};

export default musicServices;
