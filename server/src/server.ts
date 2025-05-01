import { playerController } from "@controllers/player-controller";

on("playerConnecting", playerController.register);
