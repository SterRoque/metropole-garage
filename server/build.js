// build.ts
import { build } from "esbuild";
import alias from "esbuild-plugin-alias";
build({
  entryPoints: ["src/server.ts"],
  outfile: "dist/server.js",
  bundle: true,
  platform: "node",
  format: "cjs",
  target: "node20",
  plugins: [
    alias({
      "@controllers": "./src/controllers",
      "@services": "./src/services",
      "@utils": "./src/utils",
    }),
  ],
}).catch(() => process.exit(1));
``;
