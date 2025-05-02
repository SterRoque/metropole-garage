export function isAdmin(source: number): boolean {
  return IsPlayerAceAllowed(String(source), "metropole.admin");
}
