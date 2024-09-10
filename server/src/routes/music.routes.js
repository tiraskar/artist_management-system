import { Router } from "express";
import { authorize } from "../middlewares/authorize.js";
import { roles } from "../constants/roles.js";
import { validate, validateQuery } from "../middlewares/validation.js";
import {
  createMusicSchema,
  getAllMusicSchema,
  updateMusicSchema,
} from "../validationSchema/music.js";
import {
  createMusic,
  deleteMusic,
  getAllMusic,
  getMusicById,
  updateMusic
} from "../controllers/music.controllers.js";

const router = Router();

router
  .route("/")
  .post(
    authorize([roles.ARTIST]),
    validate(createMusicSchema),
    createMusic
  );

router
  .route("/")
  .put(
    authorize([roles.ARTIST]),
    validate(updateMusicSchema),
    updateMusic
  );

router
  .route("/:id")
  .delete(
    authorize([roles.ARTIST]),
    deleteMusic
  );

router
  .route("/:id")
  .get(
    authorize([roles.SUPER_ADMIN, roles.ARTIST_MANAGER, roles.ARTIST]),
    getMusicById
  );

router
  .route("/")
  .get(
    authorize([roles.SUPER_ADMIN, roles.ARTIST_MANAGER, roles.ARTIST]),
    validateQuery(getAllMusicSchema),
    getAllMusic
  );

export default router;
