const { getConnection, sql } = require("../database/connection");
const { querys } = require("../database/querys");

const getProducts = async () => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllProducts);
    await pool.close();
    return result.recordset;
  } catch (error) {
    throw error;
  }
};

const getFavoriteProducts = async (user) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("user", sql.NChar, user)
      .query(querys.getallfavorite);
    await pool.close();
    return result.recordset;
  } catch (error) {
    throw error;
  }
};

const createNewProduct = async (productData) => {
  try {
    const pool = await getConnection();
    const {
      image,
      title,
      price,
      category,
      description,
      user,
    } = productData;
    const image1 = Buffer.from(image[0]);
    const image2 = Buffer.from(image[1]);
    const image3 = Buffer.from(image[2]);
    const image4 = Buffer.from(image[3]);
    const result = await pool
      .request()
      .input("title", sql.VarChar, title)
      .input("price", sql.VarChar, price)
      .input("category", sql.VarChar, category)
      .input("description", sql.VarChar, description)
      .input("user", sql.NChar, user)
      .input("image1", sql.VarChar(sql.MAX), image1)
      .input("image2", sql.VarChar(sql.MAX), image2)
      .input("image3", sql.VarChar(sql.MAX), image3)
      .input("image4", sql.VarChar(sql.MAX), image4)
      .query(querys.Producto);
    await pool.close();
    if (result.rowsAffected == 0) {
      throw new Error("Error... intentalo otra vez");
    } else {
      return productData;
    }
  } catch (error) {
    throw error;
  }
};

const addFavorite = async (id, user) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("user", sql.NChar, user)
      .input("id", sql.Int, id)
      .query(querys.addfavorite);
    await pool.close();
    if (result.rowsAffected == 0) {
      throw new Error("Error... intentalo otra vez");
    }
  } catch (error) {
    throw error;
  }
};

const updateProductById = async (productData) => {
  try {
    const pool = await getConnection();
    const {
      image,
      title,
      price,
      category,
      description,
      id,
    } = productData;
    const image1 = Buffer.from(image[0]);
    const image2 = Buffer.from(image[1]);
    const image3 = Buffer.from(image[2]);
    const image4 = Buffer.from(image[3]);
    await pool
      .request()
      .input("title", sql.VarChar, title)
      .input("price", sql.Float, parseFloat(price))
      .input("id", sql.Int, id)
      .input("category", sql.VarChar, category)
      .input("description", sql.VarChar, description)
      .input("image1", sql.VarChar(sql.MAX), image1)
      .input("image2", sql.VarChar(sql.MAX), image2)
      .input("image3", sql.VarChar(sql.MAX), image3)
      .input("image4", sql.VarChar(sql.MAX), image4)
      .query(querys.updateProductById);
    await pool.close();
    return productData;
  } catch (error) {
    throw error;
  }
};

const getMyProducts = async (user) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("user", sql.NChar, user)
      .query(querys.MyProducts);
    await pool.close();
    return result.recordset;
  } catch (error) {
    throw error;
  }
};

const getProductById = async (id) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", id)
      .query(querys.getProducById);
    await pool.close();
    return result.recordset[0];
  } catch (error) {
    throw error;
  }
};

const deleteProductById = async (id) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", id)
      .query(querys.deleteProduct);
    await pool.close();
    if (result.rowsAffected[0] === 0) {
      throw new Error("Product not found");
    }
  } catch (error) {
    throw error;
  }
};

const deleteFavorite = async (id) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("fk_product", id)
      .query(querys.deletefavorite);
    await pool.close();
    if (result.rowsAffected[0] === 0) {
      throw new Error("Favorite not found");
    }
  } catch (error) {
    throw error;
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
