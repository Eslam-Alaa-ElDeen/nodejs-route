import { mongoClient } from "../connection.db.js";

const getDb = () => mongoClient.db();

const normalizeId = (id) => String(id);

export const getAllUserRecords = async () => {
  return getDb().collection("users").find({}).toArray();
};

export const getUserRecordById = async (id) => {
  return getDb()
    .collection("users")
    .findOne({ id: normalizeId(id) });
};

export const createUserRecord = async (payload = {}) => {
  const user = {
    id: normalizeId(payload.id || Date.now()),
    name: payload.name || "New User",
    email: payload.email || "newuser@example.com",
    password: payload.password || "",
    createdAt: new Date().toISOString(),
  };

  await getDb().collection("users").insertOne(user);
  return user;
};

export const updateUserRecord = async (id, payload = {}) => {
  const result = await getDb()
    .collection("users")
    .findOneAndUpdate(
      { id: normalizeId(id) },
      { $set: payload },
      { returnDocument: "after" },
    );
  return result.value;
};

export const deleteUserRecord = async (id) => {
  const result = await getDb()
    .collection("users")
    .findOneAndDelete({ id: normalizeId(id) });
  return result.value;
};

export const findUserByEmail = async (email) => {
  return getDb().collection("users").findOne({ email });
};

export const getAllProductRecords = async () => {
  return getDb().collection("products").find({}).toArray();
};

export const getProductRecordById = async (id) => {
  return getDb()
    .collection("products")
    .findOne({ id: normalizeId(id) });
};

export const createProductRecord = async (payload = {}) => {
  const product = {
    id: normalizeId(payload.id || Date.now()),
    name: payload.name || "New Product",
    price: payload.price || 0,
    createdAt: new Date().toISOString(),
  };

  await getDb().collection("products").insertOne(product);
  return product;
};

export const updateProductRecord = async (id, payload = {}) => {
  const result = await getDb()
    .collection("products")
    .findOneAndUpdate(
      { id: normalizeId(id) },
      { $set: payload },
      { returnDocument: "after" },
    );
  return result.value;
};

export const deleteProductRecord = async (id) => {
  const result = await getDb()
    .collection("products")
    .findOneAndDelete({ id: normalizeId(id) });
  return result.value;
};
