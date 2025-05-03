import { getPlayerSteamId } from "@utils/get-player-steam-id";
import { vehiclesService } from "@services/vehicles-service";
import { isAdmin } from "@utils/is-admin";
import { isPlate } from "@utils/is-plate";
import { manageVehicleState } from "@utils/manage-vehicle-state";
import { IVehicleWithCustomization } from "@models/vehicle-model";

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

  async spawn(vehicle: IVehicleWithCustomization): Promise<void> {
    const source = global.source;
    const player = Player(source);

    const vehicleReponse = await vehiclesService.getByPlate(vehicle.plate);

    if (vehicleReponse) {
      const { isSpawned } = await manageVehicleState(
        player,
        vehicleReponse.plate
      );

      if (isSpawned) {
        emitNet("garage:spawnDenied", source, {
          message: "Este veículo já está spawnado.",
        });
        return;
      }

      emitNet("garage:spawnedVehicle", source, vehicleReponse);
    }
  }

  async adminSpawn(plate_or_model: string): Promise<void> {
    const source = global.source;
    const player = Player(source);

    if (isAdmin(source)) {
      if (isPlate(plate_or_model)) {
        const vehicle = await vehiclesService.getByPlate(plate_or_model);

        if (vehicle) {
          const { isSpawned } = await manageVehicleState(player, vehicle.plate);

          if (isSpawned) {
            emitNet("garage:spawnDenied", source, {
              message: "Este veículo já está spawnado.",
            });
            return;
          }

          emitNet("garage:spawnedVehicle", source, vehicle);
        }

        return;
      }

      emitNet("garage:spawnedVehicle", source, {
        model_name: plate_or_model,
      });
    }
  }

  async registerSpawnedVehicle(plate: string, netId: number): Promise<void> {
    const source = global.source;
    const player = Player(source);

    const stateKey = `vehicle:${plate}`;
    player.state.set(
      stateKey,
      {
        spawned: true,
        netId,
      },
      true
    );
  }
}

export const vehiclesController = new VehiclesController();
