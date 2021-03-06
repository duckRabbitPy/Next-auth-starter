import db from "../database/connection";

//adds new user to user table, returning user id, username and email
export function createUser(username, email, hashedPassword) {
  const INSERT_USER = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email`;
  return db
    .query(INSERT_USER, [username, email, hashedPassword])
    .then((result) => {
      return result.rows[0];
    });
}

//adds new session to sessions table and returns sid
export function createSession(sid, data) {
  const CREATE_SESSION = `INSERT INTO sessions (sid, data) VALUES ($1, $2) RETURNING sid`;
  return db.query(CREATE_SESSION, [sid, data]).then((result) => {
    return result.rows[0].sid;
  });
}

//returns all data from user table including password
export function getUser(email) {
  const GET_USER = `SELECT * FROM users WHERE email = $1`;
  return db.query(GET_USER, [email]).then((result) => {
    return result.rows;
  });
}

//returns username and email stored for a specified user_id
export function getContactInfo(user_id) {
  const GET_USER = `SELECT username, email FROM users WHERE id = $1`;
  return db.query(GET_USER, [user_id]).then((result) => {
    return result.rows[0];
  });
}

//deletes a session from sessions table with correspinding sid
export function deleteCurrSession(sid) {
  const DELETE_SESSION = `
    DELETE FROM sessions WHERE sid = $1`;
  return db.query(DELETE_SESSION, [sid]);
}

//returns data saved in saveSession function
//in most basic form this an object shaped like this: {user_id: 1}
//used to obtain user id when only the sid is known on the client
export function getSessionInfo(sid) {
  const CURRENT_SESSION = `
    SELECT data FROM sessions WHERE sid = $1`;
  return db
    .query(CURRENT_SESSION, [sid])
    .then((result) => {
      return result.rows[0];
    })
    .catch((error) => console.log(error));
}
