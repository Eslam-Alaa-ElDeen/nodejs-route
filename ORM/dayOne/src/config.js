import { config } from "dotenv";
import { resolve } from "node:path";

config({ path: resolve(`.env.${process.env.NODE_ENV ?? "development"}`) });

export const PORT = parseInt(process.env.PORT || 3000);

const getDatabaseValue = (name, fallback, placeholder) => {
  const value = process.env[name]?.trim();
  return !value || value.toLowerCase() === placeholder ? fallback : value;
};

export const DB_HOST = getDatabaseValue("HOST", "localhost", "");
export const DB_PORT = getDatabaseValue("DB_PORT", "3306", "");
export const DB_USER = getDatabaseValue("DB_USER", "root", "db user");
export const DB_PASSWORD = getDatabaseValue("DB_PASSWORD", "root", "db pass");
export const DB_NAME = getDatabaseValue("DB_NAME", "eslam_", "name of db");
