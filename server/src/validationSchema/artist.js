import Joi from "joi";

export const createArtistSchema = Joi.object({
  name: Joi.string().required(),
  dob: Joi.string().required(),
  gender: Joi.string().valid("m", "f", "o").required(),
  address: Joi.string().required(),
  first_release_year: Joi.number().required(),
  no_of_albums_released: Joi.number().required().allow(null, ""),
});

export const updateArtistSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
  dob: Joi.string().required(),
  gender: Joi.string().valid("m", "f", "o").required(),
  address: Joi.string().required(),
  first_release_year: Joi.number().required(),
  no_of_albums_released: Joi.number().required().allow(null, ""),
});

export const getAllArtistsSchema = Joi.object({
  limit: Joi.number().min(1).max(100).required(),
  page: Joi.number().min(1).required()
});