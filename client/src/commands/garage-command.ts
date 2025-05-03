import { IVehicle } from '../interfaces/vehicle-interface';

RegisterCommand(
   'garage',
   () => {
      emitNet('garage:requestVehicles');

      SetNuiFocus(true, true);

      SendNUIMessage({
         action: 'openGarage',
      });
   },
   false,
);

RegisterNuiCallbackType('closeGarage');
on('__cfx_nui:closeGarage', async () => {
   SetNuiFocus(false, false);
   SendNUIMessage({ action: 'closeGarage' });
});

RegisterNuiCallbackType('spawnVehicle');
on('__cfx_nui:spawnVehicle', (vehicle: IVehicle) => {
   emitNet('garage:spawnGarageVehicle', vehicle);

   SetNuiFocus(false, false);
   SendNUIMessage({
      action: 'closeGarage',
   });
});
