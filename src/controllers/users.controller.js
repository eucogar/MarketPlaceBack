import { getConnection, querys, sql } from "../database";

export const getUser = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllProducts);
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

    await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("lastName", sql.VarChar, lastName)
      .input("city", sql.VarChar, city)
      .input("phone", sql.VarChar, phone)
      .input("email", sql.VarChar, email)
      .input("password", sql.VarChar, password)
      .query(querys.addNewUsers);

    res.json({ name, lastName, city, phone, email, password});
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


export const deleteUserById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.deleteProduct);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getTotalUsers = async (req, res) => {
  const pool = await getConnection();

  const result = await pool.request().query(querys.getTotalUsers);
  console.log(result);
  res.json(result.recordset[0][""]);
};

export const getUserById = async (req, res) => {
  const { email } = req.params;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("email", email)
      .query(querys.getUserById);
      console.log(result);
      res.send(email);
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
      .input("email", sql.VarChar, email)
      .input("password", sql.VarChar, password)
      .query(querys.updateUserById);
    res.json({ name, lastName, city, phone, email, password });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
