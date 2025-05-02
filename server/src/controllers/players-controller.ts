import { playersService } from "@services/players-service";
import { getPlayerSteamId } from "@utils/get-player-steam-id";
import { createPlayerSchema } from "@schemas/player-schema";

class PlayersController {
  async register(
    playerName: string,
    _: unknown,
    deferrals: Deferrals
  ): Promise<void> {
    deferrals.defer();

    deferrals.update(`Hello ${playerName}. Your steam ID is being checked.`);

    const playerSteamId = getPlayerSteamId();

    if (playerSteamId) {
      const playerData = createPlayerSchema.parse({
        name: playerName,
        steam_id: playerSteamId,
      });

      await playersService.register(playerData);

      deferrals.done();
      return;
    }
    deferrals.done("You are not connected to Steam.");
  }
}

export const playersController = new PlayersController();
