BEGIN;

DROP TABLE IF EXISTS users, sessions CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(20),
  email text UNIQUE NOT NULL,
  password text NOT NULL
);

CREATE TABLE sessions (
  sid TEXT PRIMARY KEY,
  data TEXT
);

INSERT INTO users (username, email, password) VALUES ('juliettep', 'juliette@juliette.com', '123');

