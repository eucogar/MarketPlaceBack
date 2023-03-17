import { json } from "express";
import { getConnection, querys, sql } from "../database";

export const getProducts = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllProducts);
    res.json(result.recordset);
    await pool.request().query(querys.getTotalImage);
  } catch (error) {
    res.status(500);
    res.send(error.message);
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
      .query(querys.addNewProduct);
      
     pool
      .request()
      .input("image1", sql.VarBinary(sql.MAX), image1)
      .input("image2", sql.VarBinary(sql.MAX), image2)
      .input("image3", sql.VarBinary(sql.MAX), image3)
      .input("image4", sql.VarBinary(sql.MAX), image4)
      .query(querys.addNewImage);
      
    console.log('result');
    console.log(result);
    if (result.rowsAffected == 0) {
      res.send('Producto No Registrado')
    } else {
      console.log(req.body);
      res.send(req.body)
    }
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error.message);
  }

};

export const saveimage = async (req, res) => {
  const { image } = req.body;
  console.log(image);
  const image1 = Buffer.from(image[0]);
  const image2 = Buffer.from(image[1]);
  const image3 = Buffer.from(image[2]);
  const image4 = Buffer.from(image[3]);
  
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("image1", sql.VarBinary(sql.MAX), image1)
      .input("image2", sql.VarBinary(sql.MAX), image2)
      .input("image3", sql.VarBinary(sql.MAX), image3)
      .input("image4", sql.VarBinary(sql.MAX), image4)
      .query(querys.addNewImage);
    console.log('result');
    console.log(result);
    if (result.rowsAffected == 0) {
      res.send('No se guardo la');
    } else {
      console.log(req.body);
      res.send('La imagen se guardó correctamente')
    }
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error.message);
  }

};
///ok
 const saveimages = async (req, res) => {
  const { image } = req.body;
  console.log(image);
  JSON.stringify(image);
  console.log(image);
  const imageBuffer = Buffer.from(image);
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("imageBuffer", sql.VarBinary(sql.MAX), imageBuffer)
      .query(querys.addNewImage2);
    console.log('result');
    console.log(result);
    if (result.rowsAffected == 0) {
      res.send('No se guardo la');
    } else {
      console.log(req.body);
      res.send('La imagen se guardó correctamente')
    }
  } catch (error) {
    console.log(error);
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

export const getTotalProducts = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query(querys.getTotalProducts);
  console.log(result);
  res.json(result.recordset[0][""]);
};

export const updateProductById = async (req, res) => {
  const { description, name, quantity } = req.body;

  // validating
  if (description == null || name == null || quantity == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("description", sql.Text, description)
      .input("quantity", sql.Int, quantity)
      .input("id", req.params.id)
      .query(querys.updateProductById);
    res.json({ name, description, quantity });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
