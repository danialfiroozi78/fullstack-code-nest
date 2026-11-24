import "dotenv/config";
import { PostgresDialect } from "@sequelize/postgres";
import { Sequelize } from "@sequelize/core";

export const sequelize = new Sequelize({
  dialect: PostgresDialect,
  logging: false,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DBNAME,
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Postgres has been connected! ✅");
  } catch (error) {
    console.error("Postgres connection failed: ⛔", error);
    throw error;
  }
};
