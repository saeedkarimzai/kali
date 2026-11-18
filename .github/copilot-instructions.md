# GitHub Copilot Instructions: Kali Web OS

## Project overview
Kali Web OS is a single-page, browser-based desktop and Kali-inspired Linux learning simulator. It is an educational simulation, not a real Linux distribution, virtual machine, or unrestricted operating system.

## Project structure
- `index.html` is the main application and current source of truth. It contains the desktop UI, styles, app windows, virtual filesystem, terminal commands, and most application logic.
- `README.md` documents setup, features, storage, and limitations. Keep it accurate when behavior changes.
- `sw.js` is the service worker used when the app is hosted over HTTPS, if present.
- There is intentionally no Node.js build step or package installation requirement. Keep the project usable by opening the HTML in a modern browser and on a Chromebook.

Before editing, inspect the relevant existing code and understand how the feature is currently implemented. Do not replace the whole application to add one feature.

## Core development rules
1. Preserve existing features and user data. Do not remove, rename, or silently change existing commands, apps, buttons, keyboard shortcuts, local-storage keys, IndexedDB stores, or file formats unless the task explicitly requests it.
2. Make the requested feature genuinely functional. Avoid decorative controls, fake success messages, placeholder actions, dead buttons, and UI that only looks interactive.
3. Keep the app browser-native and dependency-light. Prefer standard HTML, CSS, and JavaScript. Do not introduce Node.js, npm, bundlers, servers, build tools, or external libraries unless the user explicitly approves the change.
4. Keep Chromebook compatibility and responsive layouts. Support mouse, keyboard, and touch where practical. Do not require Linux, a terminal, administrator access, or an installation.
5. Match the existing dark Kali-inspired visual style. Keep windows draggable and usable, dialogs readable, controls keyboard accessible, and layouts usable on smaller screens.
6. Reuse existing helpers, state, and storage patterns instead of creating competing systems. Avoid duplicate event listeners, duplicate IDs, global-name collisions, and repeated initialization.
7. Handle errors visibly and safely. Validate user input, handle missing browser APIs, storage failures, permission denials, offline mode, and unsupported features gracefully.
8. Keep user data local unless a feature explicitly needs an external service. Explain clearly whenever data leaves the device.
9. Never store real passwords in plain text. The local account feature is only a browser simulation and must not be described as production authentication.
10. Keep the README and in-app help aligned with actual behavior. Clearly label simulated operating-system behavior versus real browser capabilities.

## Terminal and OS simulation boundaries
- Terminal commands operate on the simulator's virtual filesystem or on a real folder only when the user explicitly mounts it and grants browser permission.
- Do not claim that simulated commands execute on the host operating system.
- Do not pretend the browser can access unrestricted processes, kernel data, hardware sensors, privileged files, or arbitrary network interfaces.
- Network and security-learning tools must be safe, transparent simulations or use ordinary browser APIs with clear permission and capability limits. Do not add stealth, persistence, credential theft, exploitation, or unauthorized scanning behavior.
- Simulated package installation, services, processes, users, permissions, and system metrics must be internally consistent and persist appropriately. Do not report an operation as successful unless state actually changed.

## Implementation workflow
1. Read the relevant HTML, CSS, JavaScript, and storage code before making changes.
2. Identify dependencies on existing IDs, functions, event handlers, and saved data.
3. Implement the smallest complete change that solves the request.
4. Check for duplicate IDs, missing element references, unhandled promise rejections, and event listeners attached more than once.
5. Validate JavaScript syntax. If a browser preview is available, test the actual user flow, not just the appearance.
6. Check that existing desktop, terminal, file manager, boot/login, search, and other app features still work.
7. Update README documentation for new commands, controls, limitations, or setup changes.
8. Summarize files changed, behavior added, and anything that could not be tested. Never claim a browser test was performed if it was not.

## UI and accessibility
- Give every visible control a real action.
- Use labels for inputs, accessible names for icon-only buttons, visible focus styles, and sensible keyboard behavior.
- Prevent dialogs and windows from becoming trapped off-screen.
- Show useful empty states, loading states, and error messages.
- Do not use alert() for routine application feedback when an in-app message is practical.

## Data safety
- Do not clear, migrate, or overwrite existing localStorage or IndexedDB data casually.
- If a schema change is necessary, write a backward-compatible migration and preserve existing user data.
- Do not put secrets, API keys, or real credentials in the repository.
- Ask before adding a cloud backend, account system, paid service, or external dependency.

## Preferred coding style
- Use readable, descriptive names and small functions.
- Add comments for non-obvious logic, not for every line.
- Avoid minifying or compressing the source.
- Keep HTML, CSS, and JavaScript organized even if they remain in the single HTML file.
- Prefer progressive enhancement and feature detection over browser-specific assumptions.
