import Joi from "joi";

export const createMusicSchema = Joi.object({
  artist_id: Joi.number().required(),
  title: Joi.string().required().max(255),
  album_name: Joi.string().required().max(255),
  genre: Joi.string().required().valid('rnb', 'country', 'classic', 'rock', 'jazz'),
});

export const updateMusicSchema = Joi.object({
  id: Joi.number().required(),
  artist_id: Joi.number().required(),
  title: Joi.string().required().max(255),
  album_name: Joi.string().required().max(255),
  genre: Joi.string().required().valid('rnb', 'country', 'classic', 'rock', 'jazz'),
});


export const getAllMusicSchema = Joi.object({
  page: Joi.number().integer().min(1).default(1),
  limit: Joi.number().integer().min(1).max(100).default(10),
});