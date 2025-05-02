import { IVehicle } from '../interfaces/vehicle-interface';

type VehicleCardProps = {
   vechicle: IVehicle;
   onSpawnVehicle: (plate: string) => void;
};

export function VehicleCard({ vechicle, onSpawnVehicle }: VehicleCardProps) {
   return (
      <div className='border-green hover:shadow-green hover:background-card h-fit w-full max-w-64 rounded-2xl border-2 p-4 text-white transition-all duration-500'>
         <div>
            <div>
               <div className='mb-4 w-fit rounded-xl border-2 px-4 py-2 text-sm text-[15px] font-black'>
                  <h2>{vechicle.plate}</h2>
               </div>
               <h1 className='text-[14px] font-black'>Speedo</h1>
               <span className='text-xs'>Van</span>
            </div>
            <img
               src={`https://docs.fivem.net/vehicles/${vechicle.model_name}.webp`}
               className='my-2 h-[100px] w-[190px]'
            />
         </div>
         <button
            className='bg-green hover:bg-green-tertiary mt-4 w-full cursor-pointer rounded-lg py-1.5 text-black shadow-md transition-all duration-500'
            onClick={() => onSpawnVehicle(vechicle.plate)}>
            Retirar
         </button>
      </div>
   );
}
