import { Router } from "express";
import {
  getProducts,
  createNewProduct,
  getProductById,
  deleteProductById,
  getTotalProducts,
  updateProductById,
} from "../controllers/products.controller";
import { createNewUser, deleteUserById, getTotalUsers, getUserById, updateUsersById } from "../controllers/users.controller";

const router = Router();

router.get("/products", getProducts);

router.post("/products", createNewProduct);
router.post("/users", createNewUser);

router.get("/products/count", getTotalProducts);
router.get("/users/count", getTotalUsers);

router.get("/products/:id", getProductById);
router.get("/users/:email", getUserById);


router.delete("/products/:id", deleteProductById);
router.delete("/users/:email", deleteUserById);

router.put("/products/:id", updateProductById);
router.put("/users/:email", updateUsersById);

export default router;
