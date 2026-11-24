// makefun anchor a1559c97a201210cb62d28e65ba4077a49ff1a27 round 34237102
// Make the AI Judge Laugh: Developer Excuses
// Deterministic emitter: writes one funny single-line developer excuse to /output/entry.txt.

import { chmodSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

const EXCUSE =
  "It wasn't a DDoS attack, it was my load test pointed at prod with the staging flag off.";

const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  // Gate: 1-200 characters, non-blank, single line, pure ASCII.
  if (EXCUSE.length < 1 || EXCUSE.length > 200) {
    throw new Error(`excuse must be 1-200 characters, got ${EXCUSE.length}`);
  }
  if (EXCUSE.trim().length === 0) {
    throw new Error("excuse must not be only whitespace");
  }
  if (EXCUSE !== EXCUSE.trim()) {
    throw new Error("excuse must not have leading or trailing whitespace");
  }
  if (EXCUSE.includes("\n") || EXCUSE.includes("\r")) {
    throw new Error("excuse must be a single line");
  }
  for (const ch of EXCUSE) {
    if (ch.charCodeAt(0) > 127) {
      throw new Error("excuse must be pure ASCII");
    }
  }

  mkdirSync("/output", { recursive: true });
  // Plain write, no trailing newline, then chmod 0644.
  writeFileSync(OUTPUT_PATH, EXCUSE, "utf8");
  chmodSync(OUTPUT_PATH, 0o644);

  // Read back and fail loudly if the bytes differ.
  const back = readFileSync(OUTPUT_PATH, "utf8");
  if (back !== EXCUSE) {
    throw new Error("verification failed: /output/entry.txt bytes differ from excuse");
  }

  console.log(`wrote ${OUTPUT_PATH} (${EXCUSE.length} chars)`);
}

main();
