import con from "../config/database.js";

const findUserByEmail = async (email) => {
  const query = "SELECT * FROM user WHERE email=?";
  const [result] = await con.query(query, [email]);
  return result[0];
};

const signUp = async (userObj) => {
  const {
    first_name,
    last_name,
    email,
    password,
    phone,
    dob,
    gender,
    address,
    created_at,
  } = userObj;

  const query = `
    INSERT INTO user
      (
        first_name,
        last_name,
        email,
        password,
        phone,
        dob,
        gender,
        address,
        role_type,
        created_at
      )
    VALUES
      (?,?,?,?,?,?,?,?,?,?);
    `;

  const [user] = await con.query(query, [
    first_name,
    last_name,
    email,
    password,
    phone,
    dob,
    gender,
    address,
    "artist",
    created_at,
  ]);

  return user.insertId;
};

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
    created_at,
  } = userObj;

  const query =
    `INSERT INTO user
      (first_name,last_name, email, password, phone,
        dob, gender, address, role_type, created_at)
    VALUES
      (?,?,?,?,?,?,?,?,?,?);`;
  const [user] = await con.query(query, [
    first_name,
    last_name,
    email,
    password,
    phone,
    dob,
    gender,
    address,
    role_type,
    created_at,
  ]);

  return user.insertId;
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
    updated_at,
    isPasswordChanged,
  } = userObj;

  if (isPasswordChanged) {
    const query = `UPDATE user
        SET 
          first_name=?,
          last_name=?,
          email=?,
          phone=?,
          dob=?, 
          gender=?,
          address=?, 
          role_type=?, 
          updated_at=?
        WHERE id=?;
      `;
    const [result] = await con.query(query, [
      first_name,
      last_name,
      email,
      isPasswordChanged && password ? password : null,
      phone,
      dob,
      gender,
      address,
      role_type,
      null,
      id,
    ]);
    return result.affectedRows;
  } else {
    const query = `UPDATE user 
        SET 
          first_name=?,
          last_name=?,
          email=?,
          phone=?,
          dob=?, 
          gender=?,
          address=?, 
          role_type=?, 
          updated_at=?
        WHERE id=?;
      `;
    const [result] = await con.query(query, [
      first_name,
      last_name,
      email,
      phone,
      dob,
      gender,
      address,
      role_type,
      updated_at,
      id,
    ]);
    return result.affectedRows;
  }
};

const deleteUser = async (id) => {
  const query = "DELETE FROM user WHERE id=?";
  const [result] = await con.query(query, [id]);
  return result.affectedRows;
};

const getUserById = async (id) => {
  const query = `
    SELECT
      first_name,
      last_name,
      email,
      phone,
      dob,
      gender,
      address,
      role_type,
      created_at,
      updated_at
    FROM user WHERE id=?`;
  const [result] = await con.query(query, [id]);
  return result[0];
};

const findAllUsers = async (limit, offset) => {
  const query = `
    SELECT
      first_name,
      last_name,
      email,
      phone,
      dob,
      gender,
      address,
      role_type,
      created_at,
      updated_at
    FROM
      user ORDER BY id DESC LIMIT ? OFFSET ?`;
  const [result] = await con.query(query, [limit, offset]);
  return result;
};

export const User = {
  findUserByEmail,
  signUp,
  createUser,
  updateUser,
  deleteUser,
  getUserById,
  findAllUsers,
};
