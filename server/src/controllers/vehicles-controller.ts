import { getPlayerSteamId } from "@utils/get-player-steam-id";
import { vehiclesService } from "@services/vehicles-service";
import { isAdmin } from "@utils/is-admin";

class VehiclesController {
  async list(): Promise<void> {
    const playerSteamId = getPlayerSteamId();
    const source = global.source;

    if (playerSteamId) {
      const vehicles = await vehiclesService.listBySteamId(playerSteamId);

      emitNet("garage:receiveVehicles", source, vehicles);

      return;
    }
  }

  async spawn(plate: any): Promise<void> {
    const source = global.source;

    const vehicle = await vehiclesService.getByPlate(plate.plate);

    emitNet("garage:spawnedVehicle", source, vehicle);
  }

  async adminSpawn(plate: any): Promise<void> {
    const source = global.source;

    if (isAdmin(source)) {
      const vehicle = await vehiclesService.getByPlate(plate.plate);
      emitNet("garage:spawnedVehicle", source, vehicle);
    }
  }
}

export const vehiclesController = new VehiclesController();
