RegisterCommand('garage', () => {
   emitNet('garage:requestVehicles');

   SetNuiFocus(true, true);

   SendNUIMessage({
      action: 'openGarage',
   });
});

RegisterCommand('car', (_, args) => {
   const plate = args[0];

   emitNet('garage:adminSpawnVehicle', { plate });
});

RegisterNuiCallbackType('spawnVehicle');
on('__cfx_nui:spawnVehicle', (vehiclePlate) => {
   emitNet('garage:spawnGarageVehicle', vehiclePlate);

   SetNuiFocus(false, false);
   SendNUIMessage({
      action: 'closeGarage',
      type: 'hide',
   });
});

onNet('garage:receiveVehicles', (vehicles) => {
   SendNUIMessage({
      action: 'vehiclesData',
      vehicles,
   });
});

onNet('garage:spawnedVehicle', async (vehicle) => {
   const model = vehicle.model_name;

   const hash = GetHashKey(model);

   RequestModel(hash);

   while (!HasModelLoaded(hash)) {
      await new Promise((resolve) => setTimeout(resolve, 500));
   }

   const playerPed = PlayerPedId();

   const coords = GetEntityCoords(playerPed);

   const vehicleCreated = CreateVehicle(
      hash,
      coords[0],
      coords[1],
      coords[2],
      GetEntityHeading(playerPed),
      true,
      false,
   );

   SetPedIntoVehicle(playerPed, vehicleCreated, -1);

   SetEntityAsNoLongerNeeded(vehicleCreated);
   SetModelAsNoLongerNeeded(model);
});
