import { IVehicle } from "@models/vehicle-model";

export interface IVehiclesRepository {
  listBySteamId(steam_id: string): Promise<IVehicle[]>;
  getByPlate(plate: string): Promise<IVehicle | null>;
}
