import { playersController } from "@controllers/players-controller";
import { vehiclesController } from "@controllers/vehicles-controller";

on("playerConnecting", playersController.register);

onNet("garage:requestVehicles", vehiclesController.list);
onNet("garage:spawnGarageVehicle", vehiclesController.spawn);

onNet("garage:adminSpawnVehicle", vehiclesController.adminSpawn);

onNet(
  "garage:registerSpawnedVehicle",
  vehiclesController.registerSpawnedVehicle
);
