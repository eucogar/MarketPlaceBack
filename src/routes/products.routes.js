import { Router } from "express";
import {
  getProducts,
  createNewProduct,
  getProductById,
  deleteProductById,
 
} from "../controllers/products.controller";
import { createNewUser, deleteUserById, getUserById, getUserLogin, updateUsersById } from "../controllers/users.controller";

const router = Router();

router.get("/products", getProducts);

router.post("/products", createNewProduct);
router.post("/users", createNewUser);
router.post("/users/login", getUserLogin);

router.get("/products/:id", getProductById);
router.get("/users/email", getUserById);

router.delete("/products/:id", deleteProductById);
router.delete("/users/:email", deleteUserById);

router.put("/users/:email", updateUsersById);

export default router;
