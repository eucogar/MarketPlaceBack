const productService = require("../services/productService");

const getProducts = async (req, res) => {
  try {
    const products = await productService.getProducts();
    res.json(products);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

const getFavoriteProducts = async (req, res) => {
  const { user } = req.body;
  try {
    const favoriteProducts = await productService.getFavoriteProducts(user);
    res.json(favoriteProducts);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

const createNewProduct = async (req, res) => {
  const { image, title, price, category, description, user } = req.body;
  try {
    const productData = {
      image,
      title,
      price,
      category,
      description,
      user,
    };
    const createdProduct = await productService.createNewProduct(productData);
    res.send(createdProduct);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

const addFavorite = async (req, res) => {
  const { id, user } = req.body;
  try {
    await productService.addFavorite(id, user);
    res.send(req.body);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

const updateProductById = async (req, res) => {
  const { image, title, price, category, description, id } = req.body;
  try {
    const productData = {
      image,
      title,
      price,
      category,
      description,
      id,
    };
    await productService.updateProductById(productData);
    res.json(productData);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

const getMyProducts = async (req, res) => {
  const { user } = req.body;
  try {
    const myProducts = await productService.getMyProducts(user);
    res.json(myProducts);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await productService.getProductById(id);
    res.json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

const deleteProductById = async (req, res) => {
  try {
    const id = req.params.id;
    await productService.deleteProductById(id);
    res.sendStatus(204);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

const deleteFavorite = async (req, res) => {
  try {
    const fk_product = req.params.id;
    await productService.deleteFavorite(fk_product);
    res.sendStatus(204);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

module.exports = {
  getProducts,
  getFavoriteProducts,
  createNewProduct,
  addFavorite,
  updateProductById,
  getMyProducts,
  getProductById,
  deleteProductById,
  deleteFavorite,
};
