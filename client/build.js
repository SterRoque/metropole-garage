import { build } from "esbuild";

build({
  entryPoints: ["src/client.ts"],
  outfile: "dist/client.js",
  bundle: true,
  platform: "node",
  format: "cjs",
  target: "node20",
}).catch(() => process.exit(1));
``;
