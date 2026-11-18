# Kali Web OS development roadmap

This project is a large, single-file browser application. Work is intentionally staged so each change can be reviewed and tested without replacing the existing desktop or disturbing saved browser data.

## Working rules

- Preserve existing applications, local-storage keys, IndexedDB data, virtual files, and command behavior unless a specific bug requires a backwards-compatible fix.
- Keep operating-system behavior simulated and label network/security exercises as fictional local training.
- Keep the app dependency-free and usable in Chrome on Chromebooks, including offline use where browser APIs allow it.
- Validate syntax and inspect existing flows after each stage. Do not claim browser testing unless it was actually performed.

## Stages

1. **Offline shell and desktop foundation** — protect unrelated same-origin caches, verify startup/session/window and launcher flows, and address confirmed desktop bugs without replacing the app.
2. **Terminal and virtual filesystem** — audit command dispatch, path handling, persistence, file operations, permissions, and useful error output.
3. **Package and process simulation** — add internally consistent persistent package/process state and truthful simulated progress/metrics.
4. **Applications and learning range** — improve existing apps and add safe fictional missions with explicit simulation labels.
5. **Interface and regression pass** — refine responsive/accessibility behavior and check all existing app entry points, saved data compatibility, duplicate IDs, and event handlers.

## Current work

- Stage 1: the service worker now removes only outdated Kali Web OS caches, rather than deleting every cache on the origin. Offline fallback to `index.html` is limited to navigations so failed asset/data requests do not silently receive HTML. The cache version is advanced to refresh previously cached app-shell behavior.
- No application data schema or existing storage key was changed.
- Browser-level offline testing is still required after deployment; it was not run as part of this source change.
