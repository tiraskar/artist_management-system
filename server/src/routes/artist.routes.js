import { Router } from "express";
import { authorize } from "../middlewares/authorize.js";
import { roles } from "../constants/roles.js";
import { validate, validateQuery } from "../middlewares/validation.js";

import {
  createArtistSchema,
  getAllArtistsSchema,
  updateArtistSchema,
} from "../validationSchema/artist.js";

import {
  createArtist,
  deleteArtist,
  getAllArtists,
  getArtistById,
  updateArtist,
} from "../controllers/artist.controller.js";

const router = Router();

router
  .route("/")
  .post(
    authorize([roles.ARTIST_MANAGER]),
    validate(createArtistSchema),
    createArtist
  );

router
  .route("/")
  .put(
    authorize([roles.ARTIST_MANAGER]),
    validate(updateArtistSchema),
    updateArtist
  );

router.route("/:id").delete(authorize([roles.ARTIST_MANAGER]), deleteArtist);

router.route("/:id").get(authorize([roles.ARTIST_MANAGER]), getArtistById);

router
  .route("/")
  .get(
    authorize([roles.SUPER_ADMIN, roles.ARTIST_MANAGER]),
    validateQuery(getAllArtistsSchema),
    getAllArtists
  );

export default router;
