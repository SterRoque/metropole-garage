import { IVehicle } from "@models/vehicle-model";
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
    const result: IVehicle[] = await exports.oxmysql.query_async(
      `
        SELECT *
        FROM vehicles
        WHERE plate = ?
        `,
      [plate]
    );

    return result[0] || null;
  }
}

export const vehiclesRepository = new OxmysqlVehiclesRepository();
