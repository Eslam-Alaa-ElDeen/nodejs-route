import { Router } from "express";
import { successResponse } from "../../common/utils/success.respoce.js";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "./product.service.js";

const router = Router();

router.get("/", async (req, res) => {
  const data = await getAllProducts();
  return successResponse({
    res,
    data,
    message: "Products fetched",
    status: 200,
  });
});

router.get("/:id", async (req, res) => {
  const data = await getProductById(req.params.id);
  return successResponse({
    res,
    data,
    message: "Product fetched",
    status: 200,
  });
});

router.post("/", async (req, res) => {
  const data = await createProduct(req.body);
  return successResponse({
    res,
    data,
    message: "Product created",
    status: 201,
  });
});

router.put("/:id", async (req, res) => {
  const data = await updateProduct(req.params.id, req.body);
  return successResponse({
    res,
    data,
    message: "Product updated",
    status: 200,
  });
});

router.delete("/:id", async (req, res) => {
  const data = await deleteProduct(req.params.id);
  return successResponse({
    res,
    data,
    message: "Product deleted",
    status: 200,
  });
});

export default router;
