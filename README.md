# Fretwise v2

A free static guitar chord teacher for beginners and improving players.

## What it does

- Shows visual guitar chord diagrams
- Explains which finger goes to which string and fret
- Explains each string one by one
- Shows muted and open strings
- Highlights chord notes and root notes
- Includes a stylized hand-position guide
- Plays a synthesized audio version of the selected chord using Web Audio
- Includes timed practice mode
- Includes common progressions:
  - C–G–Am–F
  - G–D–Em–C
  - 12-bar blues in A
- Includes beginner lesson paths
- Includes a scale explorer:
  - Major scale
  - Natural minor
  - Minor pentatonic
  - Blues scale
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
  style-v2.css
  app-v2.js
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

The chord audio is generated with the browser Web Audio API. It is meant to teach pitch/chord quality, not to imitate a realistic guitar recording.

The hand view is a stylized educational guide, not a realistic hand photo. This keeps the app fast, scalable, and easy to extend with more chords.
