# Fretwise

A free static guitar chord teacher for beginners and improving players.

## What it does

- Shows a visual guitar chord diagram
- Explains which finger goes to which string and fret
- Explains each string one by one
- Shows muted and open strings
- Highlights chord notes and root notes
- Includes a stylized hand-position guide
- Includes beginner tips
- Includes common mistakes
- Includes practice transitions
- Includes a practice list saved locally
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
  style-v1.css
  app-v1.js
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

1. Create a public GitHub repository called `fretwise`.
2. Upload all files to the root of the repository.
3. Go to **Settings**.
4. Go to **Pages**.
5. Select:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
6. Save.

Your app will be available at:

```text
https://yourusername.github.io/fretwise/
```

## Notes

The hand view is a stylized educational guide, not a realistic hand photo. This keeps the app fast, scalable, and easy to extend with more chords.
