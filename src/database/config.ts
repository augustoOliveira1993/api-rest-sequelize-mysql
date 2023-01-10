import "dotenv/config";
import { Dialect } from "sequelize/types";
interface configDB {
  username: string;
  database: string;
  password: string;
  options: {
    dialect: Dialect | undefined | string;
    host: string;
    port: number | string;
  };
}
console.log(process.env.DB_DIALECT);

export const config: configDB = {
  username: process.env.DB_USERNAME || "root",
  database: process.env.DB_DATABASE || "postgres",
  password: process.env.DB_PASSWORD || "",
  options: {
    dialect: process.env.DB_DIALECT || "mysql",
    host: process.env.DB_HOST || "mysql",
    port: process.env.DB_PORT || 5433,
  },
};
export default config;
