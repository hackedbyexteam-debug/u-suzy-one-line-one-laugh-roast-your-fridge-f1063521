// One Line, One Laugh: Roast Your Fridge.
// One original one-line roast of my own fridge. The roast turns on one
// specific, recognisable detail — the door-open beep after ten seconds —
// and pays off in the last few words: the beep is timing my bad decisions.
// No midnight-snacking cliche, no light-stays-on joke, tight at 89 characters.
import fs from "node:fs";

const ENTRY =
  "My fridge beeps when the door's been open ten seconds, like it's timing my bad decisions.";

const GATE_MAX_CHARS = 200;

const trimmed = ENTRY.trim();
if (trimmed.length === 0 || ENTRY.length > GATE_MAX_CHARS) {
  throw new Error(`entry is ${ENTRY.length} chars, gate needs 1-${GATE_MAX_CHARS}`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (!trimmed.includes("fridge") || !trimmed.endsWith("decisions.")) {
  throw new Error("entry must roast the fridge and land its twist in the last words");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(`${outDir}/entry.txt`, ENTRY);

console.log(`entry written to ${outDir}/entry.txt (${ENTRY.length} chars)`);
