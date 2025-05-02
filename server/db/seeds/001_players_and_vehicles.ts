import { Knex } from "knex";
import { randomUUID } from "node:crypto";

export async function seed(knex: Knex): Promise<void> {
  await knex("vehicles").del();
  await knex("players").del();

  const playerId = randomUUID();

  await knex("players").insert({
    id: playerId,
    name: "Ster_Roque",
    steam_id: "steam:your_steam_id",
    created_at: new Date(),
  });

  const vehicles = [
    { plate: "ABC1234", model_name: "adder" },
    { plate: "XYZ5678", model_name: "sultan" },
    { plate: "QWE7890", model_name: "dominator" },
    { plate: "JKL3456", model_name: "banshee" },
    { plate: "RTY2345", model_name: "sandking" },
  ];

  await knex("vehicles").insert(
    vehicles.map((vehicle) => ({
      id: randomUUID(),
      player_id: playerId,
      plate: vehicle.plate,
      model_name: vehicle.model_name,
      created_at: new Date(),
    }))
  );
}
