# Agency Video (Remotion)

Programmatic video for the Agency: compositions are React components, so a video
is written, reviewed and diffed like any other code in this repo.

Built on [Remotion](https://www.remotion.dev) `4.0.520`.

## ⚠️ License — read before commercial use

Remotion is **not** MIT. It is source-available under a two-tier license
([LICENSE.md](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md)):

- **Free** for individuals, non-profits, for-profit companies with **up to 3
  employees**, and for evaluation.
- **Paid company license** for any other for-profit organization —
  [remotion.pro/license](https://www.remotion.pro/license).

An agency above 3 employees rendering client videos needs the paid license.
The rest of this repository stays MIT; only this folder carries that condition.

## Setup

```bash
cd video
npm install
```

## Commands

| Command | What it does |
| --- | --- |
| `npm run studio` | Opens the Remotion Studio at `localhost:3000` — live preview, prop editing, scrubbing |
| `npm run render:all` | Renders `AgencyIntro` to `out/agency-intro.mp4` |
| `npm run render -- <CompositionId> out/<name>.mp4` | Renders any composition |
| `npm run still -- <CompositionId> out/<name>.png --frame=60` | Exports a single frame |
| `npm run typecheck` | Type-checks the project |

## Compositions

| Id | Format | Purpose |
| --- | --- | --- |
| `AgencyIntro` | 1920×1080, 5s | Title card / video opener |
| `LowerThird` | 1080×1920, 4s | Vertical name-and-role card for Reels, Shorts and TikTok |

Both take props (`title`/`subtitle`, `name`/`role`), so one composition renders
an unlimited number of variants — pass different props per render to batch out
a whole campaign.

## Structure

```
video/
├── remotion.config.ts      # Render defaults
├── src/
│   ├── index.ts            # Entry point — registers the root
│   ├── Root.tsx            # Composition registry (add new videos here)
│   ├── theme.ts            # Colors and type — rebrand everything from here
│   └── compositions/       # One file per video
└── out/                    # Rendered output (git-ignored)
```

To add a video: create `src/compositions/MyVideo.tsx`, then register it with a
`<Composition />` in `src/Root.tsx`.

## Rendering in a sandbox

Remotion downloads its own Chrome Headless Shell on the first render. Where that
download is blocked by a network policy, point it at an existing Chromium:

```bash
REMOTION_BROWSER_EXECUTABLE=/path/to/chrome npm run render:all
```

`remotion.config.ts` reads that variable; unset, Remotion manages its own browser.
