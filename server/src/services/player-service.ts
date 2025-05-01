import { playerRepository } from "@repositories/oxmysql/oxmysql-player-repository";
import { TCreatePlayerSchema } from "schemas/player-schema";

class PlayerService {
  async register(data: TCreatePlayerSchema): Promise<void> {
    const playerExists = await playerRepository.getPlayerBySteamId(
      data.steam_id
    );

    if (!playerExists) {
      await playerRepository.createPlayer(data);
    }
  }
}

export const playerService = new PlayerService();
