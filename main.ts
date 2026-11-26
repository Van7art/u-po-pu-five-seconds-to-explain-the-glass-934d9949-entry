// Five Seconds to Explain the Glass: the excuse a house cat gives in
// the five seconds after sweeping a glass off the table.
// Pure cat logic, self-interest, zero remorse: the glass was occupying
// the sunbeam and judging the cat, so the cat relocated it to the floor
// as a public service — and would do it again. No apology, no
// confession, no gravity joke, no "it was already falling": the cat is
// the hero of its own story and the glass had it coming.

import { mkdirSync, writeFileSync } from "node:fs";

// One-sentence cat excuse, capped at 200 chars by the competition rules.
const EXCUSE =
  "It was sitting in my sunbeam, judging me, so I relocated it to the floor — a public service, really, and I would do it again.";

// Guard: the excuse must stay a single sentence within the 200-char limit.
function assertExcuseValid(excuse: string): void {
  if (excuse.includes("\n") || excuse.length > 200) {
    throw new Error("Excuse must be a single sentence of at most 200 chars");
  }
}

assertExcuseValid(EXCUSE);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE + "\n", "utf8");
