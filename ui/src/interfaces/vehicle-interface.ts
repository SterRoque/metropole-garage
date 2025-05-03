export interface IVehicle {
   id: string;
   plate: string;
   model_name: string;
   display_name: string;
   type: number;
   player_id: string;
   customization?: IVehicleCustomization | null;
   created_at: Date;
}

interface IVehicleCustomization {
   id: string;
   vehicle_id: string;
   primary_colour: string;
   secondary_colour?: string | null;
   created_at: string;
}
