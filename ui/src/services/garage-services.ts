import { IVehicle } from '../interfaces/vehicle-interface';

export async function handleSpawnVehicle(vehicle: IVehicle) {
   return new Promise((resolve, reject) => {
      fetch('https://garage/spawnVehicle', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(vehicle),
      })
         .then(() => resolve(true))
         .catch((error) => reject(error));
   });
}

export async function handleCloseGarage() {
   return new Promise((resolve, reject) => {
      fetch(`https://garage/closeGarage`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
      })
         .then(() => resolve(true))
         .catch((error) => reject(error));
   });
}
