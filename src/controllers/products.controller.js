import { getConnection, querys, sql } from "../database";

export const getProducts = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllProducts);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewProduct = async (req, res) => {
  console.log(req.body);
  const { image, title, price, category, description, user } = req.body;
  try {
    const pool = await getConnection();
    console.log('coneccion');
    console.log(querys.addNewProduct);
    const result = await pool
      .request()
      .input("title", sql.VarChar, title)
      .input("price", sql.VarChar, price)
      .input("category", sql.VarChar, category)
      .input("description", sql.VarChar, description)
      .input("user", sql.NChar, user)
      .query(querys.addNewProduct);
      console.log('result');
      console.log(result);
      await saveimage(image);
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

const saveimage = async (image) => {
  console.log(log);
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("image1", sql.VarBinary, image[0] )
      .input("image2", sql.VarBinary, image[1] )
      .input("image3", sql.VarBinary, image[2] )
      .input("image3", sql.VarBinary, image[3] )
      .query(querys.addNewImage);
      console.log(result);
  } catch (error) {
    console.log(error);
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
