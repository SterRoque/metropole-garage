export interface IVehicleCustomization {
  id: string;
  vehicle_id: string;
  primary_colour: string;
  secondary_colour?: string | null;
  created_at: string;
}
