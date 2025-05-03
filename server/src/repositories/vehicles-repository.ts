import { IVehicle, IVehicleWithCustomization } from "@models/vehicle-model";

export interface IVehiclesRepository {
  listBySteamId(steam_id: string): Promise<IVehicleWithCustomization[]>;
  getByPlate(plate: string): Promise<IVehicleWithCustomization | null>;
}
