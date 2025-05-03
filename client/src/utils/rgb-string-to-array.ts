export function rgbStringToArray(rgb: string): [number, number, number] {
   const match = rgb.match(/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/);

   if (!match) {
      throw new Error(`Invalid color format: ${rgb}`);
   }

   return [
      parseInt(match[1], 10),
      parseInt(match[2], 10),
      parseInt(match[3], 10),
   ];
}
