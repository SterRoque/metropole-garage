import { useEffect, useState } from 'react';
import { VehicleCard } from './components/vehicle-card';
import { IVehicle } from './interfaces/vehicle-interface';

export default function App() {
   const [visible, setVisible] = useState<boolean>(false);
   const [vehicles, setVehicles] = useState<IVehicle[]>([]);

   useEffect(() => {
      const handler = (event: any) => {
         if (event.data.action === 'openGarage') {
            setVisible(true);
         }

         if (event.data.action === 'closeGarage') {
            setVisible(false);
         }

         if (event.data.action === 'vehiclesData') {
            setVehicles(event.data.vehicles);
         }
      };

      window.addEventListener('message', handler);
      return () => window.removeEventListener('message', handler);
   }, []);

   function spawnVehicle(plate: string) {
      fetch('https://garage/spawnVehicle', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ plate }),
      }).then((response) => response.json());
   }

   if (!visible) return null;

   return (
      <div className='flex h-screen w-screen items-center justify-center'>
         <div className='bg-background border-green z-0 grid h-fit w-fit grid-cols-4 gap-4 rounded-2xl border-3 p-20'>
            {vehicles.map((vehicle) => (
               <VehicleCard
                  key={vehicle.id}
                  onSpawnVehicle={spawnVehicle}
                  vechicle={vehicle}
               />
            ))}
         </div>
      </div>
   );
}
