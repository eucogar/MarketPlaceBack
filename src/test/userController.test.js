const request = require("supertest");
const app = require("../app"); // Aquí debes reemplazar "../app" por la ruta correcta de tu archivo de la aplicación

describe("User Controller Integration Tests", () => {
  // Prueba para crear un nuevo usuario
  test("Crear nuevo usuario", async () => {
    const userData = {
      name: "John",
      lastName: "Doe",
      city: "Example City",
      phone: "123456789",
      email: "john@example.com",
      password: "password123",
    };

    try {
      const response = await request(app)
        .post("/users")
        .send(userData)
        .expect(200);

      console.log(response.body);
      expect(response.body).toEqual(userData);
    } catch (error) {
      console.error(error);
    }
  });

  // Prueba para obtener los datos de un usuario
  test("Obtener datos de usuario", async () => {
    const userEmail = "john@example.com";

    try {
      const response = await request(app)
        .get("/users")
        .send({ email: userEmail })
        .expect(200);

      console.log(response.body);
      expect(response.body.email).toBe(userEmail);
    } catch (error) {
      console.error(error);
    }
  });

  // Prueba para iniciar sesión de usuario
  test("Iniciar sesión de usuario", async () => {
    const credentials = {
      email: "john@example.com",
      password: "password123",
    };

    try {
      const response = await request(app)
        .post("/login")
        .send(credentials)
        .expect(200);

      console.log(response.body);
      expect(response.body.email).toBe(credentials.email);
    } catch (error) {
      console.error(error);
    }
  });

  // Prueba para actualizar los datos de un usuario
  test("Actualizar datos de usuario", async () => {
    const updatedUserData = {
      name: "John Updated",
      lastName: "Doe Updated",
      city: "Updated City",
      phone: "987654321",
      email: "john@example.com",
      password: "updatedpassword",
    };

    try {
      const response = await request(app)
        .put("/users")
        .send(updatedUserData)
        .expect(200);

      console.log(response.body);
      expect(response.body).toEqual(updatedUserData);
    } catch (error) {
      console.error(error);
    }
  });

  // Prueba para actualizar la contraseña de un usuario
  test("Actualizar contraseña de usuario", async () => {
    const newPasswordData = {
      email: "john@example.com",
      password: "newpassword",
    };

    try {
      const response = await request(app)
        .put("/users/password")
        .send(newPasswordData)
        .expect(200);

      console.log(response.body);
      expect(response.body).toBe("Contraseña actualizada con éxito");
    } catch (error) {
      console.error(error);
    }
  });
});
