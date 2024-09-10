import { Router } from "express";
import authRoutes from "./auth.routes.js";
import userRoutes from "./user.routes.js";
import artistRoutes from "./artist.routes.js";
import musicRoutes from "./music.routes.js";
const router = Router();

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/artist', artistRoutes);
router.use('/music', musicRoutes);

export default router;