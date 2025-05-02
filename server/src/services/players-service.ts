import { playerRepository } from "@repositories/oxmysql/oxmysql-players-repository";
import { TCreatePlayerSchema } from "schemas/player-schema";

class PlayersService {
  async register(data: TCreatePlayerSchema): Promise<void> {
    const playerExists = await playerRepository.getPlayerBySteamId(
      data.steam_id
    );

    if (!playerExists) {
      await playerRepository.createPlayer(data);
    }
  }
}

export const playersService = new PlayersService();
