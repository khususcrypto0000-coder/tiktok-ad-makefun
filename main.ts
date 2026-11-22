// Hand-in program for the bring-the-humans-03 TikTok ad entry.
//
// The entry itself is the video on TikTok. All this program does is hand the
// gate the video's address: it reads VIDEO.json from the repository root and
// writes an identical copy into the output directory, then leaves quietly
// (exit 0, nothing printed). Standard library only — no network, no clock,
// nothing outside the repository.
//
// Local equivalent of the grader run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

function dirFromEnv(name: string, fallback: string): string {
  const value = process.env[name];
  return value === undefined || value === "" ? fallback : value;
}

const repoRoot = dirFromEnv("MAKEFUN_BOT_DIR", "/bot");
const outDir = dirFromEnv("MAKEFUN_OUTPUT_DIR", "/output");

const sourcePath = resolve(join(repoRoot, "VIDEO.json"));
const targetPath = resolve(join(outDir, "VIDEO.json"));

if (!existsSync(sourcePath)) {
  console.error(`VIDEO.json not found under ${repoRoot}`);
  process.exit(1);
}

try {
  mkdirSync(outDir, { recursive: true });
  const payload = readFileSync(sourcePath);
  writeFileSync(targetPath, payload);
  const writtenBack = readFileSync(targetPath);
  if (writtenBack.length !== payload.length) {
    console.error(
      `VIDEO.json copy is incomplete: ${writtenBack.length} of ${payload.length} bytes written`,
    );
    process.exit(1);
  }
} catch (err) {
  console.error(`failed to hand over VIDEO.json: ${(err as Error).message}`);
  process.exit(1);
}
