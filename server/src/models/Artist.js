import con from "../config/database.js";

const create = async (obj) => {
  const {
    name,
    dob,
    gender,
    address,
    first_release_year,
    no_of_albums_released,
    created_at,
  } = obj;

  const query = `INSERT INTO artist (name, dob, gender, address, first_release_year,
                   no_of_albums_released, created_at) VALUES (?,?,?,?,?,?,?);`;
  const [artist] = await con.query(query, [
    name,
    dob,
    gender,
    address,
    first_release_year,
    no_of_albums_released,
    created_at,
  ]);

  return artist.insertId;
};

const update = async (obj) => {
  const {
    id,
    name,
    dob,
    gender,
    address,
    first_release_year,
    no_of_albums_released,
    updated_at,
  } = obj;

  const query = `UPDATE artist SET
                    name=?,
                    dob=?,
                    gender=?,
                    address=?, 
                    first_release_year=?,
                    no_of_albums_released=?, 
                    updated_at=?
                   WHERE id=?;
                   `;
  const [artist] = await con.query(query, [
    name,
    dob,
    gender,
    address,
    first_release_year,
    no_of_albums_released,
    updated_at,
    id,
  ]);

  return artist.affectedRows;
};

const deleteArtist = async (id) => {
  const query = "DELETE FROM artist WHERE id=?";
  const [artist] = await con.query(query, [id]);

  return artist.affectedRows;
};

const getArtistById = async (id) => {
  const query = "SELECT * FROM artist WHERE id=?";
  const [artist] = await con.query(query, [id]);

  return artist[0];
};

const getAllArtists = async (limit, offset) => {
  const query = "SELECT * FROM artist ORDER BY id DESC LIMIT ? OFFSET ?";
  const [artists] = await con.query(query, [limit, offset]);
  return artists;
};

export const Artist = {
  create,
  update,
  deleteArtist,
  getArtistById,
  getAllArtists,
};
