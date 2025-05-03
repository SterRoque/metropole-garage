import { IVehicle } from '../interfaces/vehicle-interface';

export type TEvent = {
   data: {
      action: string;
      vehicles: IVehicle[];
   };
};
