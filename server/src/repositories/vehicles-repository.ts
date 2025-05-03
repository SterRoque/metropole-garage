import { IVehicle, IVehicleWithCustomization } from "@models/vehicle-model";

export interface IVehiclesRepository {
  listBySteamId(steam_id: string): Promise<IVehicle[]>;
  getByPlate(plate: string): Promise<IVehicleWithCustomization | null>;
}
