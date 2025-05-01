export function getPlayerSteamId(): string | null {
  const src = global.source;
  const identifiers: Record<string, string> = {};
  const playerIdents = getPlayerIdentifiers(src);

  for (let i = 0; i < playerIdents.length; i++) {
    const ident = playerIdents[i];
    const [type] = ident.split(":");
    identifiers[type] = ident;
  }

  const steamID = identifiers["steam"];

  return steamID;
}
