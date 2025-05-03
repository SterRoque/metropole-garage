import { IVehicle, IVehicleWithCustomization } from "@models/vehicle-model";
import { IVehiclesRepository } from "@repositories/vehicles-repository";

class OxmysqlVehiclesRepository implements IVehiclesRepository {
  async listBySteamId(steam_id: string) {
    const result: IVehicle[] = await exports.oxmysql.query_async(
      `
        SELECT vehicles.*
        FROM vehicles
        INNER JOIN players ON players.id = vehicles.player_id
        WHERE players.steam_id = ?
        `,
      [steam_id]
    );

    return result;
  }

  async getByPlate(plate: string) {
    const result = await exports.oxmysql.query_async(
      `
      SELECT
        v.*,
        vc.id AS customization_id,
        vc.primary_colour,
        vc.secondary_colour,
        vc.created_at AS customization_created_at
      FROM vehicles v
      LEFT JOIN vehicle_customizations vc ON vc.vehicle_id = v.id
      WHERE v.plate = ?
      `,
      [plate]
    );

    if (result[0]) {
      const vehicle = result[0];

      vehicle.customization = {
        id: vehicle.customization_id,
        primary_colour: vehicle.primary_colour,
        secondary_colour: vehicle.secondary_colour,
        created_at: new Date(vehicle.customization_created_at).toISOString(),
      };

      delete vehicle.customization_id;
      delete vehicle.primary_colour;
      delete vehicle.secondary_colour;
      delete vehicle.customization_created_at;
    }

    return (result[0] as IVehicleWithCustomization) || null;
  }
}

export const vehiclesRepository = new OxmysqlVehiclesRepository();
