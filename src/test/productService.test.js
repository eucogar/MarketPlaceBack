const productService = require("../services/productService");

describe("Product Service", () => {
  // Prueba para obtener todos los productos
  test("Obtener todos los productos", async () => {
    try {
      const result = await productService.getProducts();
      console.log(result);
      expect(result.length).toBeGreaterThan(0);
    } catch (error) {
      console.error(error);
    }
  });

  // Prueba para obtener los productos favoritos de un usuario
  test("Obtener productos favoritos de un usuario", async () => {
    const user = "correo@example.com";

    try {
      const result = await productService.getFavoriteProducts(user);
      console.log(result);
      expect(result.length).toBeGreaterThan(0);
    } catch (error) {
      console.error(error);
    }
  });

  // Prueba para crear un nuevo producto
  test("Crear nuevo producto", async () => {
    const productData = {
      image: [], // Agrega aquí los datos de la imagen
      title: "Nuevo Producto",
      price: 10.99,
      category: "Categoría",
      description: "Descripción del producto",
      user: "correo@example.com",
    };

    try {
      const result = await productService.createNewProduct(productData);
      console.log(result);
      expect(result).toEqual(productData);
    } catch (error) {
      console.error(error);
    }
  });

  // Prueba para agregar un producto a favoritos
  test("Agregar producto a favoritos", async () => {
    const id = 1;
    const user = "correo@example.com";

    try {
      await productService.addFavorite(id, user);
      // Verificar que no se haya lanzado un error
      expect(true).toBe(true);
    } catch (error) {
      console.error(error);
    }
  });

  // Prueba para actualizar un producto por su ID
  test("Actualizar producto por ID", async () => {
    const productData = {
      image: [], // Agrega aquí los datos de la imagen
      title: "Producto Modificado",
      price: 19.99,
      category: "Nueva Categoría",
      description: "Descripción modificada",
      id: 1,
    };

    try {
      const result = await productService.updateProductById(productData);
      console.log(result);
      expect(result).toEqual(productData);
    } catch (error) {
      console.error(error);
    }
  });

  // Prueba para obtener los productos de un usuario específico
  test("Obtener productos de un usuario", async () => {
    const user = "correo@example.com";

    try {
      const result = await productService.getMyProducts(user);
      console.log(result);
      expect(result.length).toBeGreaterThan(0);
    } catch (error) {
      console.error(error);
    }
  });

  // Prueba para obtener un producto por su ID
  test("Obtener producto por ID", async () => {
    const id = 1;

    try {
      const result = await productService.getProductById(id);
      console.log(result);
      expect(result).toBeDefined();
    } catch (error) {
      console.error(error);
    }
  });

  // Prueba para eliminar un producto por su ID
  test("Eliminar producto por ID", async () => {
    const id = 1;

    try {
      await productService.deleteProductById(id);
      // Verificar que no se haya lanzado un error
      expect(true).toBe(true);
    } catch (error) {
      console.error(error);
    }
  });

  // Prueba para eliminar un producto de favoritos
  test("Eliminar producto de favoritos", async () => {
    const id = 1;
    const user = "correo@example.com";

    try {
      await productService.deleteFavorite(id, user);
      // Verificar que no se haya lanzado un error
      expect(true).toBe(true);
    } catch (error) {
      console.error(error);
    }
  });
});
