# scripts/

Source material for the videos in this project. **Not code** — these files are not bundled by Remotion.

## Convention

- One Markdown file per video, kebab-cased: `scripts/binary-search.md`, `scripts/backprop.md`.
- Each script roughly pairs with a composition in `src/` (e.g. `scripts/binary-search.md` ↔ `src/BinarySearch.tsx`).

## Suggested structure

```markdown
# <Algorithm name>

**Target audience:** <e.g. "knows Python, new to ML">
**Length:** <e.g. ~3 min>

## Outline
1. Hook / problem statement
2. Intuition
3. Walkthrough on a small example
4. Code
5. Complexity / when to use it

## Narration
<voiceover text, one paragraph per scene>

## Code snippets
<the snippets you want animated, in order>
```

Adjust the template freely — it's a starting point, not a contract.
