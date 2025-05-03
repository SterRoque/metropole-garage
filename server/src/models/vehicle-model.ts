import { IVehicleCustomization } from "./vehicle-customization-model";

export interface IVehicle {
  id: string;
  plate: string;
  model_name: string;
  player_id: string;
  created_at: Date;
}

export interface IVehicleWithCustomization extends IVehicle {
  customization: IVehicleCustomization | null;
}
