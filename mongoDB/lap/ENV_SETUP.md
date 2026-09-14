# Environment Setup for MongoDB Connection

This document explains in detail how the project was configured to use environment variables for the database connection.

## 1) Why use a .env file?

A `.env` file stores sensitive or environment-specific values such as:

- database connection strings
- port numbers
- API keys
- secrets

Instead of hardcoding them directly in the code, we keep them in a `.env` file and load them at runtime.

## 2) Install the package needed to read .env files

The project uses Node.js with ES modules. To read values from `.env`, we installed the `dotenv` package:

```bash
npm install dotenv
```

This package loads environment variables from a `.env` file into `process.env`.

## 3) Create the environment files

Inside the project root (`lap/`), we created:

- `.env.development`
- `.env.production`

Example content:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/lap_db
NODE_ENV=development
```

For production:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/lap_db_prod
NODE_ENV=production
```

These files allow the app to use different database names or URLs depending on the current runtime environment.

## 4) Create the DB connection file logic

The database connection file was updated to load the correct env file automatically.

The idea is:

- if `NODE_ENV === 'production'`, load `.env.production`
- otherwise, load `.env.development`

### Example logic

```js
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

const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lap_db";
export const mongoClient = new MongoClient(mongoUri);
```

This means the application picks up the correct MongoDB URL automatically.

## 5) Connect the database when the app starts

We also call the database connection function when the server starts in `src/main.js`.

```js
import { connectDB } from "./DB/connection.db.js";

connectDB().catch((error) => {
  console.error("Database connection error:", error.message);
});
```

This makes sure the app connects to MongoDB as soon as the app boots.

## 6) Add scripts for development and production

In `package.json`, we added scripts so Node sets `NODE_ENV` correctly:

```json
"scripts": {
  "dev": "cross-env NODE_ENV=development node --watch src/main.js",
  "prod": "cross-env NODE_ENV=production node src/main.js"
}
```

We installed `cross-env` to make this work on Windows as well.

## 7) Why cross-env?

On Linux and macOS, you can usually do:

```bash
NODE_ENV=production node app.js
```

But on Windows, that syntax does not work the same way. `cross-env` makes the command cross-platform.

## 8) Result

Now the app behaves like this:

- `npm run dev` loads `.env.development`
- `npm run prod` loads `.env.production`
- the correct MongoDB URI is used for each environment

## 9) Example of the full process

1. Install `dotenv` and `cross-env`
2. Create `.env.development` and `.env.production`
3. Load them in the DB config file
4. Use `NODE_ENV` to select the correct file
5. Start the app with the matching script

This is the standard and secure way to manage environment settings in a Node.js project.
