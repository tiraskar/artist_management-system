import con from "../config/database.js";

const createMusic = async (obj) => {
  const { title, album_name, genre, artist_id, created_at } = obj;

  const query = `INSERT INTO music (title, album_name, genre, 
    artist_id, created_at) VALUES (?,?,?,?,?);`;
  const [music] = await con.query(query, [
    title,
    album_name,
    genre,
    artist_id,
    created_at,
  ]);

  return music.insertId;
};

const updateMusic = async (obj) => {
  const { id, artist_id, title, album_name, genre, updated_at } = obj;

  const query =
  `UPDATE
    music SET
    title=?,
    album_name=?,
    genre=?,
    artist_id=?,
    updated_at=?
    WHERE id=?;
    `;
  const [music] = await con.query(query, [
    title,
    album_name,
    genre,
    artist_id,
    updated_at,
    id,
  ]);

  return music.affectedRows;
};

const deleteMusic = async (id) => {
  const query = "DELETE FROM music WHERE id=?";
  const [music] = await con.query(query, [id]);

  return music.affectedRows;
};

const getMusicById = async (id) => {
  const query = "SELECT * FROM music WHERE id=?";
  const [music] = await con.query(query, [id]);

  return music[0];
};

const getAllMusic = async (limit, offset) => {
  const query = "SELECT * FROM music ORDER BY id LIMIT ? OFFSET ?";
  const [music] = await con.query(query, [limit, offset]);
  return music;
};

export const Music = {
  createMusic,
  updateMusic,
  deleteMusic,
  getMusicById,
  getAllMusic,
};
