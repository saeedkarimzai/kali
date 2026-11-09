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


## Run Kali from a USB drive (offline)

The desktop itself is a self-contained HTML file. You do not need to install Kali Linux, Node.js, or any other software.

1. Open this repository on GitHub.
2. Choose **Code → Download ZIP**.
3. Open the downloaded ZIP in your Chromebook Files app and extract it.
4. Copy the extracted `kali-main` folder to your USB drive.
5. Open the USB drive, open the `kali-main` folder, and open `index.html` in Chrome.

You can also copy just `index.html` to the USB drive. The extra `sw.js` file is only used when the site is hosted over HTTPS; it is not needed when opening the standalone HTML file from the USB.

### Carry your saved search knowledge with you

Saved answers and search history are normally stored in the browser profile, not automatically on the USB. In Kali Search:

1. Click **EXPORT OFFLINE BRAIN** and save `kali-search-backup.json` onto the USB drive.
2. On another computer or browser, open Kali from the USB.
3. Click **IMPORT OFFLINE BRAIN** and choose that JSON backup from the USB.

This transfers your saved answers, cached answers, and search history. Export a fresh backup whenever you want to take your newest knowledge with you.

The app is tiny compared with a 32 GB USB drive. If you meant a 32 MB drive, it should still fit easily too. Internet-only DuckDuckGo searches will not work while Wi-Fi is disconnected, but built-in answers and imported/saved knowledge will.
