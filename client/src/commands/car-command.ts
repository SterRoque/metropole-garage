RegisterCommand(
   'car',
   (_: unknown, args: string[]) => {
      const plateOrModel = args[0];

      emitNet('garage:adminSpawnVehicle', plateOrModel);
   },
   false,
);
