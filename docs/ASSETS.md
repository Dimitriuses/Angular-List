# Assets

One image, and it has a history worth writing down.

## `src/assets/svelte-logo.svg`

The app's single demo event is titled "Svelte", and this is the Svelte logo shown beside it.

| | |
|---|---|
| Source | [`File:Svelte Logo.svg`](https://commons.wikimedia.org/wiki/File:Svelte_Logo.svg) on Wikimedia Commons |
| Fetched from | `https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg` |
| Licence | **MIT** |
| Author | **Rich Harris** (Svelte's creator) |
| Attribution | Required |
| SHA-256 | `dc8a06dc6d4ecbedf4177e3afcff4a6255d7b4fac8c95985bb449b132f5e4b55` |
| Size | 1,718 bytes, `viewBox="0 0 98.1 118"` |
| Modified | **No** — byte-identical to the upstream file |

The licence, author and attribution requirement were read from the Commons API rather than
recalled or inferred:

```bash
curl -s "https://commons.wikimedia.org/w/api.php?action=query&format=json\
&prop=imageinfo&iiprop=extmetadata&titles=File:Svelte_Logo.svg"
# LicenseShortName: MIT   UsageTerms: MIT license
# Artist: Rich Harris     AttributionRequired: true   Restrictions: (none)
```

Note that Commons licence tags are asserted by the uploader. This one is consistent with the
`sveltejs/svelte` repository itself being MIT and with the named author being the project's
creator, but it is an assertion on Commons, not a statement obtained from Rich Harris.

### What it replaced

Until 2026 this repository displayed no image of its own. `events-list.component.ts`
hotlinked

```
https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/236/full/svelte-logo-vertical.png
```

— egghead.io's CDN, picked up while following a tutorial in 2019. It still resolved when
checked (HTTP 200, 800×800), but it meant the demo depended on a third party's bandwidth and
would show a broken image the day they moved it. It is now a local asset, so the site is
self-contained.

### Why not `sveltejs/branding`

The obvious source is Svelte's own [branding repository](https://github.com/sveltejs/branding),
which is where `svelte-logo-square.svg` and friends live. **It has no licence.** Measured
rather than assumed:

- The repository contains 13 files. None of them is a `LICENSE`.
- The GitHub API reports `"license": null` for it.
- Its `README.md` (698 bytes) states *conditions of usage* only — a definition of what "the
  Svelte logo" covers, a prohibition on implying endorsement, and a requirement that
  compatibility claims be accurate and in good faith.

Those are trademark-style conditions, not a copyright grant. Vendoring artwork from there into
an MIT-licensed public repository would mean redistributing a file with no stated permission to
redistribute, under a licence file that appears to cover it. The Commons copy solves that
properly, so it was used instead.

### Trademark

The MIT licence covers the artwork's copyright; it says nothing about the Svelte trademark.
Svelte's stated conditions are met here:

- **No implied endorsement.** This is an archived personal learning project. It does not claim,
  and nothing in it suggests, that Svelte or its contributors sponsor or endorse it.
- **No compatibility claim.** This is an Angular 8 application. It makes no assertion of
  compatibility or operability with Svelte; the word appears only as placeholder demo data in a
  list, left as it was written in 2019.

### A rendering detail

The file declares a `viewBox` but no `width`/`height`, so it has an intrinsic *ratio*
(98.1 : 118) and no intrinsic *size*. Chromium therefore reports `naturalWidth × naturalHeight`
as **125 × 150** — it defaults the height to 150 px and derives the width from the ratio. This
is harmless: the `<img>` carries `max-height: 50px`, so the rendered box is **41.6 × 50** in any
browser that honours the aspect ratio. The file was deliberately left unmodified rather than
given explicit dimensions, so that its SHA-256 still traces to the upstream file.

Measured before and after the swap, sampling pixels rather than judging by eye: both the 2019
hotlink and this file render the same brand colour **`#FF3E00`**. The SVG is in fact cleaner —
879 exactly-on-colour pixels against 607, because there is no raster downscale from 800 px to
50 px and so no antialiasing spread.

## Screenshots

`events.png`, `skills.png` and `mobile-nav-dead.png` were captured from the production build by
a Playwright script, at `deviceScaleFactor: 2`, cropped to content. `mobile-nav-dead.png` is
taken *after* clicking the hamburger, which is the point: the menu does not open. See
*Known limitations* in the README.
