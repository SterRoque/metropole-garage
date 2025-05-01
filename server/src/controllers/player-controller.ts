import { playerService } from "@services/player-service";
import { getPlayerSteamId } from "@utils/get-player-steam-id";
import { createPlayerSchema } from "@schemas/player-schema";

class PlayerController {
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

      await playerService.register(playerData);

      deferrals.done();
      return;
    }
    deferrals.done("You are not connected to Steam.");
  }
}

export const playerController = new PlayerController();
