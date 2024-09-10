import con from '../config/database.js';

const findUserByEmail = async (email) => {
  const query = "SELECT * FROM user WHERE email=?";
  const [result] = await con.query(query, [email]);
  return result[0];
};

const createUser = async (userObj) => {
  const { first_name, last_name, email, password, phone,
    dob, gender, address, created_at } = userObj;

  const query =
    `
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
    'artist',
    created_at
  ]);

  return user.insertId;
};

export const User = {
  findUserByEmail,
  createUser
};
