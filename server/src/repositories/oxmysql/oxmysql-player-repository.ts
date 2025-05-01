import { IPlayer } from "@models/player-model";
import { IPlayersRepository } from "@repositories/players-repository";
import { TCreatePlayerSchema } from "schemas/player-schema";

class OxmysqlPlayerRepository implements IPlayersRepository {
  async getPlayerBySteamId(steam_id: string): Promise<IPlayer | null> {
    const result: IPlayer[] = await exports.oxmysql.query_async(
      "SELECT * FROM players WHERE steam_id = ?",
      [steam_id]
    );

    if (result.length === 0) {
      return null;
    }

    return result[0];
  }

  async createPlayer(data: TCreatePlayerSchema): Promise<void> {
    await exports.oxmysql.insert(
      "INSERT INTO players (name, steam_id) VALUES (?, ?)",
      [data.name, data.steam_id]
    );
  }
}

export const playerRepository = new OxmysqlPlayerRepository();
