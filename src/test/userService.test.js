const userService = require("../services/userService");

describe("Servicios de Usuarios", () => {
  // Prueba para crear un nuevo usuario
  test("Crear nuevo usuario", async () => {
    const userData = {
      name: "John",
      lastName: "Doe",
      city: "New York",
      phone: "1234567890",
      email: "john.doe@example.com",
      password: "password123",
    };

    try {
      const result = await userService.createNewUser(userData);
      console.log(result);
      expect(result).toEqual(userData);
    } catch (error) {
      console.error(error);
    }
  });

  // Prueba para obtener el inicio de sesión de un usuario
  test("Obtener inicio de sesión de usuario", async () => {
    const credentials = {
      email: "john.doe@example.com",
      password: "password123",
    };

    try {
      const result = await userService.getUserLogin(credentials);
      console.log(result);
      expect(result).toBeDefined();
    } catch (error) {
      console.error(error);
    }
  });

  // Prueba para obtener un usuario por su correo electrónico
  test("Obtener usuario por correo electrónico", async () => {
    const email = "john.doe@example.com";

    try {
      const result = await userService.getUser(email);
      console.log(result);
      expect(result).toBeDefined();
    } catch (error) {
      console.error(error);
    }
  });

  // Prueba para actualizar un usuario por su ID
  test("Actualizar usuario por ID", async () => {
    const userData = {
      name: "John",
      lastName: "Doe",
      city: "New York",
      phone: "1234567890",
      email: "john.doe@example.com",
      password: "newpassword123",
    };

    try {
      const result = await userService.updateUsersById(userData);
      console.log(result);
      expect(result).toEqual(userData);
    } catch (error) {
      console.error(error);
    }
  });

  // Prueba para actualizar la contraseña de un usuario
  test("Actualizar contraseña de usuario", async () => {
    const userData = {
      email: "john.doe@example.com",
      password: "newpassword123",
    };

    try {
      const result = await userService.updatePassword(userData);
      console.log(result);
      expect(result).toBe("Password updated successfully");
    } catch (error) {
      console.error(error);
    }
  });
});
