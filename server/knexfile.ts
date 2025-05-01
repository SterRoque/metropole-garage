import type { Knex } from "knex";
import { env } from "./src/env/index.ts";

export const config: { [key: string]: Knex.Config } = {
  development: {
    client: "mysql2",
    connection: env?.DATABASE_URL,
    migrations: {
      directory: "./db/migrations",
    },
  },
};

export default config;
