const { Router } = require("express");
const { getProducts, createNewProduct, getProductById, deleteProductById, getMyProducts, updateProductById, deleteFavorite, getFavoriteProducts, addFavorite } = require("../controllers/products.controller");
const { createNewUser, getUser, getUserLogin, updateUsersById, updatePassword } = require("../controllers/users.controller");

const router = Router();

//products
router.get("/products", getProducts);
router.post("/myproducts", getMyProducts);
router.post("/products", createNewProduct);
router.get("/products/id", getProductById);
router.delete("/products/:id", deleteProductById);
router.put("/products/updata", updateProductById);

// favorite
router.delete("/products/deletefavorite/:id", deleteFavorite);
router.post("/products/favorite", addFavorite);
router.post("/product/favorite", getFavoriteProducts);

//users
router.put("/users/updata", updateUsersById);
router.post("/users", createNewUser);
router.post("/users/login", getUserLogin);
router.put("/users/newpass", updatePassword);
router.post("/getuser", getUser);

module.exports = router;
