import { json } from "express";
import { getConnection, querys, sql } from "../database";

export const getProducts = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request()
    .query(querys.getAllProducts);
    res.json(result.recordset);
    await pool.close();
  } catch (error) {
    res.status(500);
    res.send(error.message);
    await pool.close();
  }
};
export const getfarite = async (req, res) => {
  const { user } = req.body;
  try {
    const pool = await getConnection();
    const result = await pool
    .request()
    .input("user", sql.NChar, user)
    .query(querys.getallfavorite);
    res.json(result.recordset);
    await pool.close();
  } catch (error) {
    res.status(500);
    res.send(error.message);
    await pool.close();
  }
};

export const createNewProduct = async (req, res) => {
  const {image, title, price, category, description, user } = req.body;
  const image1 = Buffer.from(image[0]);
  const image2 = Buffer.from(image[1]);
  const image3 = Buffer.from(image[2]);
  const image4 = Buffer.from(image[3]);
  try {
    const pool = await getConnection();
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
      .query(querys.Producto)
    if (result.rowsAffected == 0) {
      res.send('Error... intentalo otra vez ')
    } else {
      res.send(req.body)
    }
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error.message);
  }

};
export const addfavorite = async (req, res) => {
  const {id, user } = req.body;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("user", sql.NChar, user)
      .input("id", sql.Int, id)
      .query(querys.addfavorite)
    if (result.rowsAffected == 0) {
      res.send('Error... intentalo otra vez ')
    } else {
      res.send(req.body)
    }
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error.message);
  }

};

export const updateProductsById = async (req, res) => {
  const {image, title, price, category, description, id } = req.body;
  const image1 = Buffer.from(image[0]);
  const image2 = Buffer.from(image[1]);
  const image3 = Buffer.from(image[2]);
  const image4 = Buffer.from(image[3]);
  try {
    const pool = await getConnection();
    try {
      await pool
        .request()
        .input("title", sql.VarChar, title)
        .input("price", sql.Float, parseInt(price))
        .input("id", sql.Int, id)
        .input("category", sql.VarChar, category)
        .input("description", sql.VarChar, description)
        .input("image1", sql.VarChar(sql.MAX), image1)
        .input("image2", sql.VarChar(sql.MAX), image2)
        .input("image3", sql.VarChar(sql.MAX), image3)
        .input("image4", sql.VarChar(sql.MAX), image4)
        .query(querys.updateProductById);
      res.json({image1, image2, image3, image4, title, price, category, description, id });
    } finally {
      pool.close();
    }
  } catch (error) {
    console.log(error.message);
    res.status(500);
    res.send(error.message);
  }
};

export const MyProducts = async (req, res) => {
  const {user} = req.body;
  console.log(user);
  try {
    const pool = await getConnection();
    const result = await pool
        .request()
        .input("user", sql.NChar, user)
        .query(querys.MyProducts);
        res.json(result.recordset);
        await pool.close();
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getProductById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getProducById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteProductById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.deleteProduct);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deletefavorite = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.deletefavorite);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

