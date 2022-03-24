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
  try {
    const [result] = await connection.execute(
      'INSERT INTO users_crud.users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
      [firstName, lastName, email, password],
    )
    return { id: result.insertId, firstName, lastName, email };
  } catch (error) {
    console.log(error);
  }
}


module.exports = { formatUser, createUser };