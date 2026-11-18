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


## Persistent terminal, desktop, and real folder access

- The virtual filesystem is saved automatically in the current browser. It survives page reloads in that browser profile.
- Starter folders include `~/Desktop`, `~/Documents`, `~/Downloads`, and `~/Projects`.
- Files and folders placed in `~/Desktop` appear as clickable desktop icons.
- The terminal output, command history, and current virtual working directory are also saved locally.
- The File Manager has Up, Home, Desktop, and Refresh navigation.
- Use **Mount real folder** to choose a real folder on your computer or USB drive. Terminal commands and the File Manager then work inside that selected folder, rather than the virtual filesystem.
- On supported HTTPS Chrome sessions, Kali remembers the mounted folder handle in IndexedDB and reconnects automatically if the browser still grants permission. Otherwise, choose Mount real folder again to approve access.

## Automatic search learning and USB backup

- Every answer Kali Search can actually retrieve is automatically added to its offline cache. Built-in calculator and knowledge answers are cached too.
- If a real folder or USB drive is mounted, Kali also updates `kali-search-knowledge.json` in that folder automatically after each new cached answer.
- Search answers and history are stored in browser local storage as well. The USB JSON file makes the knowledge portable to another device; import it using **IMPORT OFFLINE BRAIN**.
- DuckDuckGo's Instant Answer API only returns short answers/abstracts for some queries. If it provides no answer, Kali can open full DuckDuckGo results in a new tab, but the browser page cannot automatically read or save the contents of that separate search page. Those results need an answer source that Kali can access before they can be learned.
- This remains a browser-based simulator, not a full Linux installation. Real folder access is limited to the folder the user explicitly selects and the permissions the browser grants.


## Offline video library

Open **Offline Videos** from the desktop, application menu, or dock. Choose **Add videos** and select video files from Downloads or a USB drive. Kali stores imported video files in the browser's IndexedDB storage, so they remain available for offline playback in that same browser profile after restarting the app. The library supports adding multiple files, playback controls, a saved playlist, removing individual videos, and clearing the library. Actual playback formats depend on the browser's codec support. Imported videos use local browser storage, not the GitHub repository or a cloud account; available storage limits vary, so very large files may fail to import if the browser quota is insufficient.

### Saved YouTube links

The Offline Videos window also accepts YouTube video URLs. Paste a standard watch URL, youtu.be link, Shorts URL, or supported embed URL and choose Save. Kali stores up to 500 saved video links in browser localStorage and can play them through YouTube's privacy-enhanced embed player while online. These are bookmarks, not downloaded video files: playback requires internet, and saving a link does not make the YouTube video available offline.

### MP4 conversion and USB export

In Offline Videos, choose **Convert to MP4 + save** and select source videos. Kali uses FFmpeg.wasm in the browser to transcode supported inputs to H.264 video with AAC audio in an MP4 container. On supported secure Chrome sessions, choose a USB folder and Kali writes the converted files into an **MP4 Videos** subfolder. If folder access is unavailable, the browser downloads the MP4 files so they can be copied to the USB manually. The converter downloads its FFmpeg JavaScript and WebAssembly components from jsDelivr the first time it is used, so the initial conversion needs internet; it is not a guaranteed offline-first converter. Conversion is CPU- and memory-intensive, especially for large videos, and output time and quality depend on the source and device. **Copy originals to USB** remains available when no conversion is needed.


## Video URL Converter app

The desktop and application menu include **Video URL Converter**. It can accept a local video file or a direct video-file URL and pass it to the MP4 conversion/export workflow. Direct URL fetching depends on the source host allowing cross-origin browser requests (CORS). YouTube watch, Shorts, and youtu.be links are detected and previewed, but are not downloaded: YouTube does not provide this app with a public MP4 download endpoint. For a user's own upload, download it through YouTube Studio when available, then select the downloaded file for conversion. The MP4 converter loads FFmpeg.wasm from jsDelivr on first use and requires internet for that initial load.


## Interactive cyber range (local simulation)

Open Terminal and run `lab`, then `scan 192.168.56.110` and `connect 192.168.56.110`. This opens a fictional remote machine that exists only inside the page. Explore its web directory with `ls`, `cd /var/www/html`, and `cat portal.txt`. The public training note contains the lab-only analyst credentials. Log in with `login analyst bluebird42`, inspect the analyst home directory, and use `sudo -l` to see the one permitted elevated command. The objective is to read `/root/flag.txt` using the explicitly allowed simulated command: `sudo cat /root/flag.txt`. Use `download <remote-file>` to copy a readable remote file into the local simulated Downloads folder, and `exit` to disconnect.

All target addresses, ports, accounts, passwords, files, permissions, and command results are hard-coded fictional training data. The lab does not open sockets, send packets, scan external hosts, or execute commands on the real computer. The lab shell is deliberately limited to its documented commands.


## Vibe coding with GitHub Copilot

This repository includes [Copilot project instructions](.github/copilot-instructions.md). In supported GitHub Copilot experiences, Copilot Chat can use these instructions automatically so it understands the project's structure, browser-only design, Chromebook requirements, and the rule to preserve existing features.

### Get started
1. Open this repository in VS Code or a VS Code environment that supports GitHub Copilot Chat.
2. Sign in to GitHub and enable Copilot for your account.
3. Open the repository folder so Copilot can inspect the project files.
4. Open **Copilot Chat**. Use **Agent** mode when you want Copilot to inspect and edit files; use Ask mode when you only want explanations or a plan.
5. Describe one feature or bug at a time. Review the proposed changes and test them in the browser before keeping the changes.
6. Commit your working changes to GitHub when you're happy with them.

Copilot availability and Agent mode depend on your account, plan, editor, and current extension support. If your editor does not show Agent mode, use the available edit/chat mode and ask Copilot to make the changes in the workspace.

### Prompts you can paste into Copilot Chat

**Add a feature**
> Inspect the existing Kali Web OS code and its Copilot instructions. Add a fully working [FEATURE] that fits the current UI and storage system. Preserve all existing features and saved user data. Do not add dependencies or fake functionality. Update the README if needed and explain how I can test it.

**Fix a bug**
> Investigate this bug: [DESCRIBE THE BUG]. Trace the actual cause before editing. Fix it without removing or breaking other features. Check related event handlers, storage, and responsive behavior. Tell me exactly what changed and how to reproduce the fix.

**Make a subsystem more realistic**
> Improve the [TERMINAL / FILE MANAGER / PACKAGE MANAGER / PROCESS MANAGER] so its behavior is internally consistent and persistent. Keep it clearly labelled as a browser simulation. Do not claim access to real host operating-system features. Preserve existing commands and data.

**Review before committing**
> Review my current changes for bugs, broken controls, duplicate event listeners, data-loss risks, accessibility problems, and Chromebook compatibility. Fix issues you can verify. Do not claim browser testing unless you actually performed it.

**Plan a large feature first**
> Inspect the project and propose a step-by-step implementation plan for [FEATURE]. Identify the existing code and saved data it will affect. Do not edit files until you have explained the plan.

Tip: ask Copilot to make small, testable changes instead of telling it to rebuild the whole app. AI is enthusiastic about rewriting things it barely understands; the project instructions are there to keep it on a leash.
