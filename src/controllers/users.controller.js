import { getConnection, querys, sql } from "../database";

export const getUser = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getTotalUsers);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewUser = async (req, res) => {

  const { name, lastName, city, phone, email, password } = req.body;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("lastName", sql.VarChar, lastName)
      .input("city", sql.VarChar, city)
      .input("phone", sql.VarChar, phone)
      .input("email", sql.NChar, email)
      .input("password", sql.VarChar, password)
      .query(querys.addNewUsers);
      if (result.rowsAffected == 0) {
        console.log('No registrado');
        res.send('No user')
      } else {
        console.log(req.body);
        res.send(req.body)
      }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


export const deleteUserById = async (req, res) => {
  const { email } = req.params;
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("email", email)
      .query(querys.deleteUser);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);
    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getUserById = async (req, res) => {
  const { email } = req.body;
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("email", sql.NChar, email)
    .query(querys.getUserById);

  if (result.rowsAffected == 0) {
    console.log('No user');
  } else {
    console.log(result);
  }
};

export const getUserLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("email", sql.NChar, email)
      .input("password", sql.VarChar, password)
      .query(querys.getUserLogin);
    if (result.rowsAffected == 0) {
      console.log('No user');
      res.send('No user')
    } else {
      console.log(result.recordset[0]);
      res.send(result.recordset[0])
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const updateUsersById = async (req, res) => {
  const { name, lastName, city, phone, email, password } = req.body;
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("lastName", sql.VarChar, lastName)
      .input("city", sql.VarChar, city)
      .input("phone", sql.VarChar, phone)
      .input("email", sql.NChar, email)
      .input("password", sql.VarChar, password)
      .query(querys.updateUserById);
    res.json({ name, lastName, city, phone, email, password });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
