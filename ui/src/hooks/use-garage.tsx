import { useEffect, useState } from 'react';
import { IVehicle } from '../interfaces/vehicle-interface';
import { TEvent } from '../types/event-type';

export function useGarage() {
   const [isVisible, setIsVisible] = useState<boolean>(false);
   const [vehicles, setVehicles] = useState<IVehicle[]>([]);

   useEffect(() => {
      const handler = (event: TEvent) => {
         if (event.data.action === 'openGarage') {
            setIsVisible(true);
         }

         if (event.data.action === 'closeGarage') {
            setIsVisible(false);
         }

         if (event.data.action === 'vehiclesData') {
            setVehicles(event.data.vehicles);
         }
      };

      window.addEventListener('message', handler);
      return () => window.removeEventListener('message', handler);
   }, []);

   return {
      isVisible,
      vehicles,
   };
}
