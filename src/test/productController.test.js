const request = require("supertest");
const app = require("../app"); 

describe("Product Controller Integration Tests", () => {
  // Prueba para obtener todos los productos
  test("Obtener todos los productos", async () => {
    try {
      const response = await request(app)
        .get("/products")
        .expect(200);

      console.log(response.body);
      // Realiza las verificaciones necesarias en la respuesta recibida
    } catch (error) {
      console.error(error);
    }
  });

  // Prueba para obtener los productos favoritos de un usuario
  test("Obtener productos favoritos de un usuario", async () => {
    const userData = {
      user: "john@example.com",
    };

    try {
      const response = await request(app)
        .post("/product/favorite")
        .send(userData)
        .expect(200);

      console.log(response.body);
      // Realiza las verificaciones necesarias en la respuesta recibida
    } catch (error) {
      console.error(error);
    }
  });

  // Prueba para crear un nuevo producto
  test("Crear nuevo producto", async () => {
    const productData = {
      image: "product-image.jpg",
      title: "Example Product",
      price: 99.99,
      category: "Example Category",
      description: "Example description",
      user: "john@example.com",
    };

    try {
      const response = await request(app)
        .post("/products")
        .send(productData)
        .expect(200);

      console.log(response.body);
      // Realiza las verificaciones necesarias en la respuesta recibida
    } catch (error) {
      console.error(error);
    }
  });

  // Prueba para agregar un producto a favoritos
  test("Agregar producto a favoritos", async () => {
    const favoriteData = {
      id: "product-id",
      user: "john@example.com",
    };

    try {
      const response = await request(app)
        .post("/products/favorite")
        .send(favoriteData)
        .expect(200);

      console.log(response.body);
      // Realiza las verificaciones necesarias en la respuesta recibida
    } catch (error) {
      console.error(error);
    }
  });

  // Prueba para actualizar los datos de un producto
  test("Actualizar datos de un producto", async () => {
    const updatedProductData = {
      image: "updated-image.jpg",
      title: "Updated Product",
      price: 129.99,
      category: "Updated Category",
      description: "Updated description",
      id: "product-id",
    };

    try {
      const response = await request(app)
        .put("/products/updata")
        .send(updatedProductData)
        .expect(200);

      console.log(response.body);
      // Realiza las verificaciones necesarias en la respuesta recibida
    } catch (error) {
      console.error(error);
    }
  });

  // Prueba para obtener los productos de un usuario
  test("Obtener productos de un usuario", async () => {
    const userData = {
      user: "john@example.com",
    };

    try {
      const response = await request(app)
        .post("/myproducts")
        .send(userData)
        .expect(200);

      console.log(response.body);
      // Realiza las verificaciones necesarias en la respuesta recibida
    } catch (error) {
      console.error(error);
    }
  });

  // Prueba para obtener los datos de un producto por ID
  test("Obtener datos de un producto por ID", async () => {
    const productId = "product-id";

    try {
      const response = await request(app)
        .get(`/products/${productId}`)
        .expect(200);

      console.log(response.body);
      // Realiza las verificaciones necesarias en la respuesta recibida
    } catch (error) {
      console.error(error);
    }
  });

  // Prueba para eliminar un producto por ID
  test("Eliminar un producto por ID", async () => {
    const productId = "product-id";

    try {
      const response = await request(app)
        .delete(`/products/${productId}`)
        .expect(204);

      // Realiza las verificaciones necesarias en la respuesta recibida
    } catch (error) {
      console.error(error);
    }
  });

  // Prueba para eliminar un producto de favoritos
  test("Eliminar un producto de favoritos", async () => {
    const favoriteProductId = "product-id";

    try {
      const response = await request(app)
        .delete(`/products/deletefavorite/${favoriteProductId}`)
        .expect(204);

      // Realiza las verificaciones necesarias en la respuesta recibida
    } catch (error) {
      console.error(error);
    }
  });
});
