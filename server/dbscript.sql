CREATE TABLE user (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(500) NOT NULL,
  phone VARCHAR(20)NOT NULL,
  dob DATETIME NOT NULL,
  gender ENUM('m', 'f', 'o') NOT NULL,
  address VARCHAR(255) NOT NULL,
  role_type ENUM("super_admin", "artist_manager","artist") NOT NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME DEFAULT NULL
);


CREATE TABLE artist (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(255) NOT NULL,
  dob DATETIME NOT NULL,
  gender ENUM('m', 'f', 'o') NOT NULL,
  address VARCHAR(255) NOT NULL,
  first_release_year YEAR NOT NULL,
  no_of_albums_released INT NOT NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME DEFAULT NULL
);

CREATE TABLE music (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  title VARCHAR(255) NOT NULL,
  album_name VARCHAR(255) NOT NULL,
  genre ENUM('rnb', 'country', 'classic','rock','jazz') NOT NULL,
  artist_id INT NOT NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME DEFAULT NULL
);

ALTER TABLE music ADD CONSTRAINT fk_music_artist FOREIGN KEY (artist_id) REFERENCES artist(id);
