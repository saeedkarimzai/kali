# Kali Web OS

A single-file, browser-based Kali-inspired desktop and command-line learning simulator.

## Open it
Visit the GitHub Pages site if Pages is enabled, or open `index.html` in a modern browser. No Node.js, Linux terminal, API key, or installation is required.

## Kali Search
The desktop includes **Kali Search**, an offline-first search panel.

- Built-in offline answers for basic questions and arithmetic (for example, `what's one plus one?`).
- Searches your locally saved answers and cached DuckDuckGo instant answers first.
- Checks whether an internet connection and the DuckDuckGo Instant Answer API are reachable when the search window opens.
- When online, tries DuckDuckGo's Instant Answer API and caches returned answers in browser local storage.
- Offers a full DuckDuckGo web search in a new tab when the instant-answer API has no result or is blocked.
- Lets you save your own answers so they can be found later without Wi-Fi.
- Keeps local search history and saved answers on that browser/device.

## Important limitations
- Browser offline storage is local to that browser profile/device. It is not automatically written into the GitHub repository or shared across devices.
- DuckDuckGo's Instant Answer API does not return a full list of normal web search results. Full results open on DuckDuckGo.
- Some school or managed networks may block external search services.
- This is a browser simulation, not a real Kali Linux kernel or unrestricted network scanner.
- When hosted over HTTPS (for example, GitHub Pages), the included service worker caches the app shell after the first successful visit so the page can reopen offline. Open the site once while online and wait for it to finish loading before disconnecting. Opening the HTML as a local file also works offline, but service workers do not run from file:// URLs.

## Privacy
Searches sent to DuckDuckGo leave your device and are handled by DuckDuckGo. Saved offline answers and history are stored in the browser's local storage.
