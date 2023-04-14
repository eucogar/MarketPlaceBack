const { createNewUser } = require("../controllers/users.controller");
const { getConnection, querys, sql } = require("../database");

describe("createNewUser", () => {
  test("should return an error if the user cannot be created", async () => { 
    const pool = await getConnection();
    const result =  await pool
      .request()
      .input("name", sql.VarChar, "Jane")
      .input("lastName", sql.VarChar, "Doe")
      .input("city", sql.VarChar, "Los Angeles")
      .input("phone", sql.VarChar, "555-5678")
      .input("email", sql.NChar, "anderess@example.com")
      .input("password", sql.VarChar, "password123")
      .query(querys.addNewUsers);
      expect(result.rowsAffected).toEqual([1]);
      pool.close();
    });
});