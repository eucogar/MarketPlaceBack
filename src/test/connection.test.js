const { getConnection, dbSettings, sql } = require("../database/connection");

jest.mock("mssql", () => {
  const mssql = jest.requireActual("mssql");
  return {
    ...mssql,
    connect: jest.fn().mockResolvedValue({}),
  };
});

describe("getConnection", () => {
  test("obtiene la conexión a la base de datos", async () => {
    const pool = await getConnection();
    expect(pool).toBeDefined();
    expect(sql.connect).toHaveBeenCalledWith(dbSettings);
  });
});
