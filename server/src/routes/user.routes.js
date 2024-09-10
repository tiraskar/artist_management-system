import { Router } from 'express';
import { createUserSchema, getAllUsersSchema, updateUserSchema } from '../validationSchema/user.js';
import { createUser, updateUser, deleteUser, getUserById, getAllUsers } from '../controllers/user.controllers.js';
import { validate, validateQuery } from '../middlewares/validation.js';
import { authorize } from '../middlewares/authorize.js';
import { roles } from '../constants/roles.js';

const router = Router();

router
  .route('/')
  .post(
    authorize([roles.SUPER_ADMIN]),
    validate(createUserSchema),
    createUser
  );

router
  .route('/')
  .put(
    authorize([roles.SUPER_ADMIN]),
    validate(updateUserSchema),
    updateUser
  );

router
  .route('/:id')
  .delete(
    authorize([roles.SUPER_ADMIN]),
    deleteUser
  );

router
  .route('/:id')
  .get(
    authorize([roles.SUPER_ADMIN]),
    getUserById
  );

router
  .route('/')
  .get(validateQuery(
    authorize([roles.SUPER_ADMIN]), getAllUsersSchema),
    getAllUsers
  );

export default router;