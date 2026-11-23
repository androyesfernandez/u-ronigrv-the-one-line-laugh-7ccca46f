// The One-Line Laugh — u-ronigrv-the-one-line-laugh-7ccca46f
// Writes one original funny line (a single sentence, 130 characters)
// to /output/entry.txt. Node 22, no dependencies, no network.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I meal-prepped for the whole week on Sunday and by Tuesday I was eating cereal over the sink like a raccoon with a mortgage.";

// The gate only accepts 1–200 characters of non-whitespace UTF-8 text, so
// refuse to write anything that would fail it instead of shipping a dud.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200 || !/\S/.test(LINE)) {
  throw new Error(`line must be 1-200 non-whitespace chars, got ${chars.length}`);
}
if (LINE.trim().split(/[.!?]+/).filter(Boolean).length !== 1) {
  throw new Error("line must be a single sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
