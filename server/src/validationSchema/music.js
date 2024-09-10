import Joi from "joi";

export const createMusicSchema = Joi.object({
  artist_id: Joi.number().required(),
  title: Joi.string().required().max(255),
  album_name: Joi.string().required().max(255),
  genre: Joi.string().required().max(255),
});

export const updateMusicSchema = Joi.object({
  music_id: Joi.number().required(),
  artist_id: Joi.number().required(),
  title: Joi.string().required().max(255),
  album_name: Joi.string().required().max(255),
  genre: Joi.string().required().max(255),
});

export const deleteMusicSchema = Joi.object({
  music_id: Joi.number().required(),
});

export const getArtistSchema = Joi.object({
  music_name: Joi.number().required(),
});