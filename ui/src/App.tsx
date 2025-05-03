import { VehicleCard } from './components/vehicle-card';

import { useGarage } from './hooks/use-garage';
import {
   handleCloseGarage,
   handleSpawnVehicle,
} from './services/garage-services';

export default function App() {
   const { isVisible, vehicles } = useGarage();

   if (!isVisible) return null;

   return (
      <div className='flex h-screen w-screen items-center justify-center'>
         <div className='bg-background border-green relative z-0 h-full max-h-[869px] w-full max-w-[1112px] gap-4 overflow-hidden rounded-2xl border-3 px-20 pt-10 pb-20'>
            <div
               className='border-green text-green absolute right-20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border'
               onClick={handleCloseGarage}>
               X
            </div>

            <div className='mb-10 flex items-center justify-center'>
               <img
                  src='logo.png'
                  className='w-20'
               />
               <h1 className='text-green neon-text-outline neon-text p-5 text-center text-3xl font-bold uppercase'>
                  Metrópole Garagem
               </h1>
            </div>

            <div className='flex h-fit w-full items-center justify-center'>
               {vehicles.length === 0 ? (
                  <h1 className='text-green mt-60 text-2xl'>
                     Sem veiculos na garagem
                  </h1>
               ) : (
                  <div className='no-scrollbar grid max-h-[640px] grid-cols-4 gap-4 overflow-auto'>
                     {vehicles.map((vehicle) => (
                        <VehicleCard
                           key={vehicle.id}
                           vechicle={vehicle}
                           onSpawnVehicle={handleSpawnVehicle}
                        />
                     ))}
                  </div>
               )}
            </div>
         </div>
      </div>
   );
}
