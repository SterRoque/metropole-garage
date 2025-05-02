import { IVehicle } from "@models/vehicle-model";
import { vehiclesRepository } from "@repositories/oxmysql/oxmysql-vehicles-repository";

class VehiclesService {
  async listBySteamId(steam_id: string): Promise<IVehicle[]> {
    const vehicles = await vehiclesRepository.listBySteamId(steam_id);

    return vehicles;
  }

  async getByPlate(plate: string): Promise<IVehicle | null> {
    const vehicle = await vehiclesRepository.getByPlate(plate);

    return vehicle;
  }
}

export const vehiclesService = new VehiclesService();
