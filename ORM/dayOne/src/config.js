import{config}from"dotenv";
import {resolve} from "node:path";

config({path:resolve(`.env.${process.env.NODE_ENV??"development"}`)})

export const PORT=parseInt(process.env.PORT|| 3000);

export const DB_HOST=process.env.HOST;
export const DB_PORT=process.env.DB_PORT;
export const DB_USER=process.env.DB_USER;
export const DB_PASSWORD=process.env.DB_PASSWORD;
export const DB_NAME=process.env.DB_NAME;


