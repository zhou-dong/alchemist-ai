# Facts

A standalone, chapter-agnostic collection of curated facts — currently used by the `alchemist-ai` explainer video series, kept separate from `scripts/` so it can eventually be extracted into its own repo.

## What belongs here

Only general, reusable reference material — facts that hold true regardless of which chapter or project consumes them (e.g. the geologic time scale, the domains of life). Anything chapter-specific (a particular chapter's framing decisions, open questions, or narration-facing notes) belongs in that project's own factsheets instead, not here.

## Confidence tags

Every checkable claim is tagged with one of:

- **established** — settled scientific consensus
- **plausible** — a reasonable inference or a leading hypothesis among competing ones, not yet settled
- **speculative** — a simplification or narrative framing, not a claim about documented science

## File format

Each fact file starts with YAML frontmatter:

```yaml
---
topic: Short topic name
tags: [some, tags]
sources:
  - Citation or reference for the underlying facts
last_reviewed: YYYY-MM-DD
---
```

followed by a `# Facts — <Topic>` heading and a flat or lightly-sectioned bullet list, each bullet ending in its confidence tag and a short justification.

## License

CC BY 4.0 — see `LICENSE`. Reuse freely with attribution.
