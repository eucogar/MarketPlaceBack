const { createNewUser } = require("../controllers/users.controller");
const { getConnection, querys, sql } = require("../database");

describe("Login", () => {
  test("Login", async () => { 
    const pool = await getConnection();
    const inputParams = {
      email: "xdxd@example.com",
      password: "password123"
    };
    const query = querys.getUserLogin;
    const testFunc = async (params) => {
      const result = await pool
        .request()
        .input("email", sql.NChar, params.email)
        .input("password", sql.VarChar, params.password)
        .query(query);
      return result.recordset[0];
    };
    const expected = {
      name: "Jane",
      lastName: "Doe",
      city: "Los Angeles",
      phone: "555-5678",
      email: "xdxd@example.com                                  ",
      password: "password123"
    };
    await expect(testFunc(inputParams)).resolves.toEqual(expected);
    pool.close();
  });
});
