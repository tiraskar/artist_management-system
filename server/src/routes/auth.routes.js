import { Router } from 'express';
import { validate } from '../middlewares/validation.js';
import { signUpSchema, singInSchema } from '../validationSchema/auth.js';
import { signIn, signUp } from '../controllers/auth.controllers.js';
const router = Router();

router.route('/signup').post(validate(signUpSchema), signUp);

router.route('/signin').post(validate(singInSchema), signIn);

export default router;