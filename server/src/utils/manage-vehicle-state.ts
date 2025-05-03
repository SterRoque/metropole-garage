export async function manageVehicleState(
  player: EntityInterface,
  plate: string
) {
  const vehicleStateKey = `vehicle:${plate}`;
  let currentVehicleState = player.state[vehicleStateKey];

  if (!currentVehicleState) {
    currentVehicleState = { spawned: false, netId: null };
    player.state.set(vehicleStateKey, currentVehicleState, true);
  }

  if (currentVehicleState.spawned && currentVehicleState.netId) {
    const vehicleEntity = NetworkGetEntityFromNetworkId(
      currentVehicleState.netId
    );

    if (DoesEntityExist(vehicleEntity)) {
      return {
        isSpawned: true,
        currentVehicleState,
      };
    } else {
      currentVehicleState.spawned = false;
      currentVehicleState.netId = null;
      player.state.set(vehicleStateKey, currentVehicleState, true);
    }
  }

  return { isSpawned: false, currentVehicleState };
}
