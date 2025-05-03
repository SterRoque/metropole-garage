import { Knex } from "knex";
import { randomUUID } from "node:crypto";

export async function seed(knex: Knex): Promise<void> {
  await knex("vehicle_customizations").del();
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
    {
      plate: "ABC1234",
      model_name: "stingertt",
      primary_colour: "rgb(255, 0, 0)",
      secondary_colour: "rgb(0, 0, 0)",
    },
    {
      plate: "XYZ5678",
      model_name: "specter",
      primary_colour: "rgb(0, 255, 0)",
      secondary_colour: "rgb(255, 255, 255)",
    },
    {
      plate: "QWE7890",
      model_name: "verlierer2",
      primary_colour: "rgb(0, 0, 255)",
      secondary_colour: "rgb(255, 255, 0)",
    },
    {
      plate: "JKL3456",
      model_name: "nero2",
      primary_colour: "rgb(255, 0, 255)",
      secondary_colour: "rgb(0, 255, 255)",
    },
    {
      plate: "RTY2345",
      model_name: "akuma",
      primary_colour: "rgb(255, 0, 255)",
      secondary_colour: "rgb(67, 255, 24)",
    },
    {
      plate: "RTY2346",
      model_name: "speedo4",
      primary_colour: "rgb(18, 52, 86)",
      secondary_colour: "rgb(35, 255, 141)",
    },
    {
      plate: "RTY2347",
      model_name: "brioso2",
      primary_colour: "rgb(255, 0, 0)",
    },

    {
      plate: "XYZ7890",
      model_name: "chino",
      primary_colour: "rgb(255, 69, 0)",
      secondary_colour: "rgb(255, 255, 255)",
    },
    {
      plate: "ABC1236",
      model_name: "coquette3",
      primary_colour: "rgb(0, 0, 0)",
      secondary_colour: "rgb(255, 215, 0)",
    },
    {
      plate: "DEF5678",
      model_name: "avarus",
      primary_colour: "rgb(0, 255, 255)",
      secondary_colour: "rgb(255, 105, 180)",
    },
    {
      plate: "GHI2468",
      model_name: "manchez",
      primary_colour: "rgb(255, 140, 0)",
      secondary_colour: "rgb(0, 255, 0)",
    },
    {
      plate: "JKL1357",
      model_name: "airbus",
      primary_colour: "rgb(255, 20, 147)",
      secondary_colour: "rgb(0, 0, 0)",
    },
  ];

  for (const vehicle of vehicles) {
    const vehicleId = randomUUID();

    await knex("vehicles").insert({
      id: vehicleId,
      player_id: playerId,
      plate: vehicle.plate,
      model_name: vehicle.model_name,
      created_at: new Date(),
    });

    await knex("vehicle_customizations").insert({
      id: randomUUID(),
      vehicle_id: vehicleId,
      primary_colour: vehicle.primary_colour,
      secondary_colour: vehicle?.secondary_colour,
      created_at: new Date(),
    });
  }
}
