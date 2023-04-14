const { createNewUser } = require("../controllers/users.controller");
const { getConnection, querys, sql } = require("../database");

describe("createNewUserPK", () => {
  test("Violation of PRIMARY KEY", async () => { 
    const pool = await getConnection();
    const inputParams = {
      name: "Jane",
      lastName: "Doe",
      city: "Los Angeles",
      phone: "555-5678",
      email: "xdxd@example.com",
      password: "password123"
    };
    const query = querys.addNewUsers;
    const testFunc = async () => {
      const result = await pool
        .request()
        .input("name", sql.VarChar, inputParams.name)
        .input("lastName", sql.VarChar, inputParams.lastName)
        .input("city", sql.VarChar, inputParams.city)
        .input("phone", sql.VarChar, inputParams.phone)
        .input("email", sql.NChar, inputParams.email)
        .input("password", sql.VarChar, inputParams.password)
        .query(query);
      return result;
    };
    await expect(testFunc()).rejects.toThrow(
        "Violation of PRIMARY KEY constraint 'PK_user'. Cannot insert duplicate key in object 'dbo.users'. The duplicate key value is (xdxd@example.com                                  )."
    );
    pool.close();
  });
});
