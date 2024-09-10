import { User } from "../models/Users.js";
import bcrypt from "bcryptjs";

const createUser = async (userObj) => {
  const {
    first_name,
    last_name,
    email,
    password,
    phone,
    dob,
    gender,
    address,
    role_type,
  } = userObj;

  const hashedPassword = await bcrypt.hash(password, 10);

  const userId = await User.create({
    first_name,
    last_name,
    email,
    password: hashedPassword,
    phone,
    dob,
    gender,
    address,
    role_type,
    created_at: new Date(),
  });

  return userId;
};

const updateUser = async (userObj) => {
  const {
    id,
    first_name,
    last_name,
    email,
    password,
    phone,
    dob,
    gender,
    address,
    role_type,
  } = userObj;

  const isPasswordChanged = password == "" || password == null ? false : true;
  let hashedPassword = null;
  if (isPasswordChanged) {
    hashedPassword = await bcrypt.hash(password, 10);
  }

  const affectedRows = await User.update({
    id,
    first_name,
    last_name,
    email,
    password: hashedPassword,
    phone,
    dob,
    gender,
    address,
    role_type,
    updated_at: new Date(),
    isPasswordChanged,
  });

  return affectedRows;
};

const deleteUser = async (id) => {
  const affectedRows = await User.deleteUser(id);
  return affectedRows;
};

const getUserById = async (id) => {
  const user = await User.getUserById(id);
  return user;
};

const getAllUsers = async (limit, offset) => {
  const users = await User.findAll(limit, offset);
  return users;
};

const userServices = {
  createUser,
  updateUser,
  deleteUser,
  getUserById,
  getAllUsers,
};

export default userServices;
