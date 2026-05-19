# alchemist-ai

Programmatically generated videos that explain AI algorithms, built with [Remotion](https://www.remotion.dev/).

## Commands

Install dependencies:

```console
pnpm install
```

Start Remotion Studio (preview/edit):

```console
pnpm dev
```

Render a video:

```console
pnpm exec remotion render
```

Lint (typecheck + eslint):

```console
pnpm lint
```

Upgrade Remotion:

```console
pnpm upgrade
```

## Where to edit

- Composition registry: `src/Root.tsx`
- Main composition component: `src/Main.tsx`
- Static assets (images, audio, etc.) go in `public/`

## Docs

- [Remotion fundamentals](https://www.remotion.dev/docs/the-fundamentals)
