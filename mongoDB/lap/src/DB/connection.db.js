import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "../..");
const envFile =
  process.env.NODE_ENV === "production"
    ? ".env.production"
    : ".env.development";

dotenv.config({ path: path.join(rootDir, envFile) });

const mongoUri = process.env.MONGODB_URI;
export const mongoClient = new MongoClient(mongoUri);

export async function connectDB() {
  try {
    await mongoClient.connect();
    console.log(`MongoDB connected successfully using ${envFile}`);
    return mongoClient.db();
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    throw error;
  }
}

export class DBmodel {
  constructor(inputs = {}) {
    this.inputs = inputs;
  }
}
