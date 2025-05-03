import { vehiclesTypes } from '../constants/vehicles-types';
import { IVehicle } from '../interfaces/vehicle-interface';

type VehicleCardProps = {
   vechicle: IVehicle;
   onSpawnVehicle: (vehicle: IVehicle) => void;
};

export function VehicleCard({ onSpawnVehicle, vechicle }: VehicleCardProps) {
   return (
      <div className='border-green hover:shadow-green hover:background-card h-fit w-full max-w-64 rounded-2xl border-2 p-4 text-white transition-all duration-500'>
         <div>
            <div>
               <div className='mb-4 w-fit rounded-xl border-2 px-4 py-2 text-sm text-[15px] font-black'>
                  <h2>{vechicle.plate}</h2>
               </div>
               <h1 className='text-[14px] font-black uppercase'>
                  {vechicle.model_name}
               </h1>
               <span className='text-xs'>{vehiclesTypes[vechicle.type]}</span>
            </div>
            <img
               src={`https://docs.fivem.net/vehicles/${vechicle.model_name}.webp`}
               className='my-2 h-[100px] w-[190px]'
            />
         </div>
         <button
            className='bg-green hover:bg-green-secondary mt-4 w-full cursor-pointer rounded-lg py-1.5 font-semibold text-black shadow-md transition-all duration-500'
            onClick={() => onSpawnVehicle(vechicle)}>
            Retirar
         </button>
      </div>
   );
}
