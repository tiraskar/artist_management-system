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