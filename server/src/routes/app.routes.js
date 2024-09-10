import { Router } from "express";
import authRoutes from "./auth.routes.js";
import userRoutes from "./user.routes.js";
import artistRoutes from "./artist.routes.js";
const router = Router();

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/artist', artistRoutes);

export default router;