import createHttpError from "http-errors";
import jwtServices from "./jwt.services.js";
import { config } from "../config/envConfig.js";
import { User } from "../models/Users.js";
import bcrypt from 'bcryptjs';

const signUp = async (obj) => {
  const { first_name, last_name, email, password, phone,
    dob, gender, address, role_type } = obj;

  const user = await User.findUserByEmail(email);
  if (user) {
    throw createHttpError(409, "Email already registered");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const userId = await User.signUp({
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

const signIn = async (data) => {
  const { email, password } = data;
  const user = await User.findUserByEmail(email);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw createHttpError(401, "Invalid credentials");
  }

  const payload = {
    userId: user.id,
    email: user.email,
    role: user.role_type
  };

  const accessToken = jwtServices.generateToken(
    payload,
    config.ACCESS_TOKEN_SECRET,
    config.ACCESS_TOKEN_EXPIRY
  );

  return { accessToken, user };
};

const authServices = {
  signUp,
  signIn
};

export default authServices;