import knexConfig from "../../knexfile";
import { seed } from "./001_players_and_vehicles";
import { knex } from "knex";

const db = knex(knexConfig.development);

seed(db).then(() => {
  console.log("🌱 Seeding completed successfully.");
  db.destroy();
});
