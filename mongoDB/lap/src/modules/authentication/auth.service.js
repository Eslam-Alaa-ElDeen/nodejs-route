import { createUserRecord, findUserByEmail } from "../../DB/model/index.js";

export const signup = async (inputs = {}) => {
  const email = inputs.email || "guest@example.com";
  const existingUser = await findUserByEmail(email);

  if (existingUser) {
    throw new Error("User already exists");
  }

  const user = await createUserRecord({
    name: inputs.name || "guest",
    email,
    password: inputs.password || "secret",
  });

  const { password, ...safeUser } = user;

  return {
    message: "Signup successful",
    user: safeUser,
  };
};

export const login = async (inputs = {}) => {
  const email = inputs.email || "guest@example.com";
  const password = inputs.password || "secret";
  const user = await findUserByEmail(email);

  if (!user || user.password !== password) {
    throw new Error("Invalid email or password");
  }

  const { password: _, ...safeUser } = user;

  return {
    message: "Login successful",
    user: safeUser,
  };
};
