import { IVehicle } from "../interfaces/vehicle-interface";
import { rgbStringToArray } from "../utils/rgb-string-to-array";

onNet("garage:receiveVehicles", (vehicles: IVehicle[]) => {
  const vehiclesUpdated = vehicles?.map((vehicle) => {
    const hash = GetHashKey(vehicle.model_name);
    const vehicleClass = GetVehicleClassFromName(hash);

    return {
      ...vehicle,
      type: vehicleClass,
    };
  });

  SendNUIMessage({
    action: "vehiclesData",
    vehicles: vehiclesUpdated,
  });
});

onNet("garage:spawnedVehicle", async (vehicle: IVehicle) => {
  const hash = GetHashKey(vehicle.model_name);

  RequestModel(hash);

  while (!HasModelLoaded(hash)) {
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  const playerPed = PlayerPedId();

  const coords = GetEntityCoords(playerPed, true);

  const vehicleCreated = CreateVehicle(
    hash,
    coords[0],
    coords[1],
    coords[2],
    GetEntityHeading(playerPed),
    true,
    false
  );

  const vehicleClass = GetVehicleClass(vehicleCreated);

  const vehicleWithClass = {
    ...vehicle,
    type: vehicleClass,
  };

  SendNUIMessage({
    action: "vehicleClass",
    vehicle: vehicleWithClass,
  });

  if (vehicle?.customization) {
    SetVehicleModKit(vehicleCreated, 0);

    const [pr, pg, pb] = rgbStringToArray(vehicle.customization.primary_colour);

    SetVehicleCustomPrimaryColour(vehicleCreated, pr, pg, pb);

    if (vehicle?.customization?.secondary_colour) {
      const [sr, sg, sb] = rgbStringToArray(
        vehicle.customization.secondary_colour
      );
      SetVehicleCustomSecondaryColour(vehicleCreated, sr, sg, sb);
    }
  }

  const netId = NetworkGetNetworkIdFromEntity(vehicleCreated);

  SetPedIntoVehicle(playerPed, vehicleCreated, -1);
  SetVehicleNumberPlateText(vehicleCreated, vehicle.plate);

  SetEntityAsNoLongerNeeded(vehicleCreated);
  SetModelAsNoLongerNeeded(vehicle.model_name);

  emitNet("garage:registerSpawnedVehicle", vehicle.plate, netId);
});

onNet("garage:spawnDenied", (data: { message: string }) => {
  console.log("Spawn negado:", data.message);
});
