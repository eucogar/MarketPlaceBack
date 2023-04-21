import { Router } from "express";
import {
    getProducts,
    createNewProduct,
    getProductById,
    deleteProductById,
    MyProducts,
    updateProductsById
} from "../controllers/products.controller";
import { createNewUser, getUser, getUserLogin, updateUsersById } from "../controllers/users.controller";

const router = Router();

//products
router.get("/products", getProducts);
router.post("/myproducts", MyProducts);
router.post("/products", createNewProduct);
router.get("/products/id", getProductById);
router.delete("/products/:id", deleteProductById);
router.put("/products/updata", updateProductsById);

//users
router.put("/users/updata", updateUsersById);
router.post("/users", createNewUser);
router.post("/users/login", getUserLogin);
router.post("/getuser", getUser);

export default router;
