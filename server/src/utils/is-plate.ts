export function isPlate(arg: string): boolean {
  const normalized = arg.trim().toUpperCase();

  const oldPlateRegex = /^[A-Z]{3}[0-9]{4}$/;
  const mercosulRegex = /^[A-Z]{3}[0-9][A-Z][0-9]{2}$/;

  return oldPlateRegex.test(normalized) || mercosulRegex.test(normalized);
}
