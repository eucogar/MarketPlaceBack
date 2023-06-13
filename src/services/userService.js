const { getConnection, sql } = require("../database/connection");
const { querys } = require("../database/querys");

const createNewUser = async (userData) => {
  const { name, lastName, city, phone, email, password } = userData;
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
      return null;
    } else {
      console.log(userData);
      return userData;
    }
  } catch (error) {
    console.log(error.message);
    throw new Error("Error creating new user");
  } finally {
    await pool.close();
  }
};

const getUserLogin = async (credentials) => {
  try {
    const { email, password } = credentials;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("email", sql.NChar, email)
      .input("password", sql.VarChar, password)
      .query(querys.getUserLogin);

    if (result.rowsAffected == 0) {
      throw new Error("Incorrect credentials");
    } else {
      return result.recordset[0];
    }
  } catch (error) {
    console.log(error.message);
    throw new Error("Error getting user login");
  } finally {
    await pool.close();
  }
};

const getUser = async (email) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("email", sql.NChar, email)
      .query(querys.getUser);

    if (result.rowsAffected == 0) {
      console.log('No user');
      return null;
    } else {
      console.log(result.recordset[0]);
      return result.recordset[0];
    }
  } catch (error) {
    console.log(error.message);
    throw new Error("Error getting user");
  } finally {
    await pool.close();
  }
};

const updateUsersById = async (userData) => {
  const { name, lastName, city, phone, email, password } = userData;
  console.log(userData);
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

      return userData;
    } finally {
      pool.close();
    }
  } catch (error) {
    console.log(error.message);
    throw new Error("Error updating user");
  }
};

const updatePassword = async (userData) => {
  const { email, password } = userData;
  console.log(userData);
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("email", sql.NChar, email)
      .input("password", sql.VarChar, password)
      .query(querys.NewPass);

    if (result.rowsAffected == 0) {
      throw new Error("Password update failed");
    } else {
      return "Password updated successfully";
    }
  } catch (error) {
    console.log(error.message);
    throw new Error("Error updating password");
  } finally {
    await pool.close();
  }
};

module.exports = {
  createNewUser,
  getUserLogin,
  getUser,
  updateUsersById,
  updatePassword,
};
