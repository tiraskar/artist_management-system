import Joi from "joi";

export const createArtistSchema = Joi.object({
  name: Joi.string().required(),
  dob: Joi.date().required(),
  gender: Joi.string().valid("m", "f", "o").required(),
  address: Joi.string().required(),
  first_release_year: Joi.number().optional(),
  no_of_albums_released: Joi.number().optional(),
});