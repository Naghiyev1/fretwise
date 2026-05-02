# Fretwise v2.1

A free static guitar chord teacher with a cleaner mode-based learning interface.

## What changed in v2.1

This version keeps the app useful without making the page feel overloaded.

New structure:

```text
Learn
Practice
Scales
Compare
```

Only one mode is visible at a time.

## What it does

- Shows visual guitar chord diagrams
- Explains finger placement
- Explains strings one by one
- Shows muted and open strings
- Highlights chord notes and root notes
- Includes a stylized hand-position guide
- Plays a synthesized chord sound using Web Audio
- Includes timed practice mode
- Adds a simple metronome
- Includes common progressions
- Includes beginner lesson paths
- Includes a scale explorer
- Adds a fretboard scale view
- Includes chord comparison:
  - C vs Cadd9
  - A vs Asus2
  - A vs Asus4
  - D vs Dsus2
  - D vs Dsus4
  - G vs G7
  - E vs E7
- Includes left-handed mode
- Includes barre chord category
- Includes practice list saved locally
- Includes dark mode
- Includes PWA support
- Runs on GitHub Pages
- No backend
- No login
- No paid services

## Project structure

```text
fretwise/
  index.html
  style-v2-1.css
  app-v2-1.js
  README.md
  icon.svg
  manifest.json
  service-worker.js
```

Fallback copies are also included:

```text
style.css
app.js
```

## Deploy on GitHub Pages

1. Upload all files to the root of your `fretwise` repository.
2. Commit the changes.
3. Wait for GitHub Pages to redeploy.
4. Hard refresh once.

## Notes

The chord audio and metronome are generated with the browser Web Audio API. They are educational references, not realistic guitar recordings.

The hand view is a stylized educational guide, not a realistic hand photo.
