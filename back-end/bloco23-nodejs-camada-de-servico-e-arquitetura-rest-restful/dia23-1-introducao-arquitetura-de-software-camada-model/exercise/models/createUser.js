const connection = require('./connection');

function formatUser({ id, first_name: firstName, last_name: lastName, email }) {
  return {
    id,
    firstName,
    lastName,
    email,
  };
}

async function createUser({ firstName, lastName, email, password }) {
  const [result] = await connection.execute(
    'INSERT INTO users_crud.users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
    [firstName, lastName, email, password],
  )
  return { id: result.insertId, firstName, lastName, email };
}

async function users() {
  const [result] = await connection.execute(
    'SELECT * FROM users_crud.users;'
  )
  return result;
}

async function findById(id) {
  const [result] = await connection.execute(
    'SELECT id, first_name, last_name, email FROM users_crud.users WHERE id = ?',
    [id],
  )

  if (!result.length) return false;
  return result;
}

async function updatedList(first_name, last_name, email, password, id ) {
  console.log(first_name, last_name, email, password, id )
  const [ result ] = await connection.execute(
    `UPDATE
      users_crud.users
    SET 
      first_name = ?,
      last_name = ?,
      email = ?,
      password = ?
    WHERE
      id = ?`,
    [first_name, last_name, email, password, id],
  )

  return { id, first_name, last_name, email, password };
}

async function deleteById(id) {
  await connection.execute(
    'DELETE FROM users_crud.users WHERE id = ?',
    [id],
  )
}


module.exports = { formatUser, createUser, users, findById, deleteById, updatedList }