export function rgbToHex(rgb: string): string {
   const match = rgb.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);

   if (!match) {
      throw new Error('Invalid format. Use "rgb(r, g, b)"');
   }

   const [_, r, g, b] = match;
   const toHex = (val: number) => val.toString(16).padStart(2, '0');

   return '#' + toHex(parseInt(r)) + toHex(parseInt(g)) + toHex(parseInt(b));
}
