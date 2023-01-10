import { Sequelize } from "sequelize";
import config from "./config";

export const db = new Sequelize("doc360", "postgres", "110120", {
  host: "localhost",
  port: 5439,
  dialect: "postgres",
});
