import { getConnection, querys, sql } from "../database";


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
        await pool.close();
      } else {
        console.log(req.body);
        res.send(req.body)
        await pool.close();
      }
  } catch (error) {
    res.status(500);
    res.send(error.message);
    await pool.close();
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
      res.send('Usuario no encontrado')
      await pool.close();
    } else {
      console.log(result.recordset[0]);
      res.send(result.recordset[0])
      await pool.close();
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
    await pool.close();
  }
};

export const getUser= async (req, res) => {
  try {
    const { email } = req.body;
    console.log(email);
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("email", sql.NChar, email)
      .query(querys.getUser);
    if (result.rowsAffected == 0) {
      console.log('No user');
      res.send('Usuario no encontrado')
      await pool.close();
    } else {
      console.log(result.recordset[0]);
      res.send(result.recordset[0])
      await pool.close();
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
    await pool.close();
  }
};

export const updateUsersById = async (req, res) => {
  const { name, lastName, city, phone, email, password } = req.body;
  console.log(req.body);
  try {
    const pool = await getConnection();
    try {
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
    } finally {
      pool.close();
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


