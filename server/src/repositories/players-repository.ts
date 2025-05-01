import { IPlayer } from "@models/player-model";
import { TCreatePlayerSchema } from "schemas/player-schema";

export interface IPlayersRepository {
  getPlayerBySteamId(steam_id: string): Promise<IPlayer | null>;
  createPlayer(data: TCreatePlayerSchema): Promise<void>;
}
