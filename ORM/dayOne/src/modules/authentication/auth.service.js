import bcrypt from "bcryptjs";
import { userModel } from "../../DB/model/user.model.js";

const publicUser = (user) => {
  const data = user.toJSON();
  delete data.passwordHash;
  return data;
};

export const signup = async ({ password, ...inputs }) => {
  if (!password) {
    throw Object.assign(new Error("Password is required"), {
      cause: { status: 400 },
    });
  }
  const user = await userModel.create({
    ...inputs,
    passwordHash: await bcrypt.hash(password, 12),
  });
  return publicUser(user);
};

export const login = async ({ email, password }) => {
  const user = await userModel.scope(null).findOne({ where: { email } });
  if (
    !user ||
    !user.passwordHash ||
    !(await bcrypt.compare(password || "", user.passwordHash))
  ) {
    throw Object.assign(new Error("Invalid email or password"), {
      cause: { status: 401 },
    });
  }
  return publicUser(user);
};
