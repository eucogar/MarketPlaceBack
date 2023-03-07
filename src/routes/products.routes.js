import { Router } from "express";
import {
  getProducts,
  createNewProduct,
  getProductById,
  deleteProductById,
  getTotalProducts,
  updateProductById,
} from "../controllers/products.controller";
import { createNewUser } from "../controllers/users.controller";

const router = Router();

router.get("/products", getProducts);

router.post("/products", createNewProduct);
router.post("/users", createNewUser);

router.get("/products/count", getTotalProducts);

router.get("/products/:id", getProductById);

router.delete("/products/:id", deleteProductById);

router.put("/products/:id", updateProductById);

export default router;
