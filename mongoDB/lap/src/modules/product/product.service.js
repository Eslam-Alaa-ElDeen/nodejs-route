import {
  createProductRecord,
  deleteProductRecord,
  getAllProductRecords,
  getProductRecordById,
  updateProductRecord,
} from "../../DB/model/index.js";

export const getAllProducts = async () => getAllProductRecords();

export const getProductById = async (id) => {
  const product = await getProductRecordById(id);
  if (!product) {
    throw new Error("Product not found");
  }
  return product;
};

export const createProduct = async (payload = {}) =>
  createProductRecord(payload);

export const updateProduct = async (id, payload = {}) => {
  const product = await updateProductRecord(id, payload);
  if (!product) {
    throw new Error("Product not found");
  }
  return product;
};

export const deleteProduct = async (id) => {
  const product = await deleteProductRecord(id);
  if (!product) {
    throw new Error("Product not found");
  }
  return product;
};
