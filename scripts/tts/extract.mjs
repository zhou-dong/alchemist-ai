import { readFileSync } from "node:fs";

/**
 * Parses a chapter script into per-beat narration lines.
 *
 * Chapter scripts are the source of truth (see scripts/README.md): each `####`
 * heading is a beat, and its `**Narration:**` block is the spoken text. We split
 * that text into sentence-level lines because each line becomes one audio clip —
 * which is what lets subtitles sync for free and lets animation anchor to the
 * frame a specific sentence starts.
 */

/** Sentences shorter than this are merged into their neighbour. */
const MIN_WORDS = 4;

/**
 * Strip markdown emphasis. Needed for both outputs: TTS would otherwise read
 * "asterisk" aloud, and subtitles would render the markers literally on screen.
 * The two fields stay separate so spoken text can diverge later (pronunciation
 * fixes, SSML) without touching what the viewer reads.
 */
const stripEmphasis = (s) => s.replace(/\*+(.+?)\*+/g, "$1");

/**
 * Splits a paragraph into sentences. Guards against splitting on the periods in
 * abbreviations and decimals, which would otherwise cut a clip mid-thought.
 */
const toSentences = (paragraph) => {
  const guarded = paragraph
    .replace(/\b(Mr|Mrs|Ms|Dr|Prof|St|vs|etc|e\.g|i\.e)\./g, "$1<DOT>")
    .replace(/(\d)\.(\d)/g, "$1<DOT>$2");

  // Note: `…` is deliberately NOT a split point. The scripts use it as a
  // mid-sentence pause ("the switch just… tips"), so splitting there would
  // strand a clip that starts lowercase, mid-thought.
  return guarded
    .split(/(?<=[.!?])["')\]]*\s+/)
    .map((s) => s.replace(/<DOT>/g, ".").trim())
    .filter(Boolean);
};

/**
 * Merges runaway-short sentences into a neighbour so clips like "It cheats.
 * Sort of." stay a single breath instead of two stilted fragments.
 */
const mergeShort = (sentences) => {
  const out = [];
  for (const sentence of sentences) {
    const tooShort = sentence.split(/\s+/).length < MIN_WORDS;
    if (tooShort && out.length > 0) {
      out[out.length - 1] += ` ${sentence}`;
    } else {
      out.push(sentence);
    }
  }
  // A short opener has no previous line to attach to; fold it into the next one.
  if (out.length > 1 && out[0].split(/\s+/).length < MIN_WORDS) {
    const [first, ...rest] = out;
    rest[0] = `${first} ${rest[0]}`;
    return rest;
  }
  return out;
};

/**
 * Reads a chapter markdown file and returns
 * `[{ heading, lines: [{ text, spoken }] }]` in script order.
 *
 * `text` keeps the prose as written (for subtitles); `spoken` is the
 * emphasis-stripped form handed to the TTS provider.
 */
export const extractChapter = (markdownPath) => {
  const raw = readFileSync(markdownPath, "utf8");

  // Split on beat headings, keeping the heading text alongside its body.
  const chunks = raw.split(/^#### (.+)$/m);
  const beats = [];

  for (let i = 1; i < chunks.length; i += 2) {
    const heading = chunks[i].trim();
    const body = chunks[i + 1] ?? "";

    // The narration block runs until the next bolded field or heading.
    const match = body.match(/\*\*Narration:\*\*([\s\S]*?)(?=\n\*\*[A-Z]|\n#|$)/);
    if (!match) continue;

    const paragraphs = match[1]
      .split(/\n\s*\n/)
      .map((p) => p.replace(/\s+/g, " ").trim())
      .filter(Boolean);

    const lines = paragraphs
      .flatMap((p) => mergeShort(toSentences(p)))
      .map((s) => stripEmphasis(s).trim())
      .map((text) => ({ text, spoken: text }));

    if (lines.length > 0) beats.push({ heading, lines });
  }

  return beats;
};
