const userService = require("../services/userService");

const createNewUser = async (req, res) => {
  const { name, lastName, city, phone, email, password } = req.body;
  try {
    const userData = { name, lastName, city, phone, email, password };
    const user = await userService.createNewUser(userData);
    if (user === null) {
      console.log('No registrado');
      res.status(403).send('No registrado');
    } else {
      console.log(req.body);
      res.send(req.body);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

const getUserLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const credentials = { email, password };
    const user = await userService.getUserLogin(credentials);
    if (user === null) {
      res.status(401).send('Credenciales incorrectas');
    } else {
      console.log(user);
      res.send(user);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

const getUser = async (req, res) => {
  try {
    const { email } = req.body;
    console.log(email);
    const user = await userService.getUser(email);
    if (user === null) {
      console.log('No user');
      res.send('Usuario no encontrado');
    } else {
      console.log(user);
      res.send(user);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

const updateUsersById = async (req, res) => {
  const { name, lastName, city, phone, email, password } = req.body;
  console.log(req.body);
  try {
    const userData = { name, lastName, city, phone, email, password };
    const updatedUser = await userService.updateUsersById(userData);
    res.json(updatedUser);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

const updatePassword = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    const userData = { email, password };
    const result = await userService.updatePassword(userData);
    res.send(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

module.exports = {
  createNewUser,
  getUserLogin,
  getUser,
  updateUsersById,
  updatePassword,
};
