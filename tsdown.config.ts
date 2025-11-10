
import { defineConfig } from "tsdown";

export default defineConfig({
    entry: ["src/index.ts", "src/recommended-legacy.ts"],
    outDir: "lib",
    format: ["esm", "cjs"],
    dts: true,
});
