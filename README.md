# Log Analyser

🔗 **[https://totalthyco99.github.io/log-analyser/](https://totalthyco99.github.io/log-analyser/)**

A browser-based log analysis tool for Secret Server, Delinea Platform, and Connection Manager. Built for support engineers to quickly parse, filter, search, and inspect log files — without any data leaving the device.

> ⚠️ **Unofficial tool.** This is a community-built utility and is not created, endorsed, or supported by Delinea. Product and component names are used for reference only.

---

## 🔒 Privacy first

**No data ever leaves your browser.** All log files — including `.zip` bundles, whole folders, and Windows `.evtx` event logs — are read, unpacked, and processed entirely on your device using local JavaScript. Nothing is uploaded to any server, cloud service, or third party. It is safe to use with sensitive or production logs, and it works offline once loaded.

---

## Screenshots

### Welcome screen
Select a product to get started. The tool explains what it does, confirms your data never leaves the browser, and notes it is an unofficial utility. A guided tour runs on first visit (replayable any time with the **❓** button) and walks through every feature using sample data.

![Welcome screen](screenshots/01-welcome.png)

### Automatic component recognition
Drop individual log files, an entire `.zip` (including the nested per-node and per-Distributed-Engine zips customers typically send), or a whole folder. Everything is unpacked in the browser and each file is matched to its component automatically by filename — including rolled logs like `SS.log.1`, `SS.log.2`. Matched components highlight in teal with the filename and size shown beneath. Once at least one file is matched, the **Analyse Logs** button activates.

![File upload with auto-matched components](screenshots/02-upload.png)

### Filtering by log level
After analysing, use the filter bar to narrow results by **ERROR**, **CRITICAL**, **WARNING**, **INFO**, **VERBOSE**, or **DEBUG**. Results appear in the middle panel with the source file, line number, and a stripped message preview for each entry. Click any entry to jump to it in the log viewer on the right.

![Log level filtering](screenshots/03-filtering.png)

### Log viewer — jump to line with full context
Clicking a filtered entry opens the complete log file in the right-hand viewer with the selected line highlighted and centred. The viewer shows the full raw content including stack traces and continuation lines, with colour-coded log levels. The three panels can be resized by dragging the dividers between them, and your layout is remembered between sessions.

![Log viewer](screenshots/04-viewer.png)

### Time window navigation
Use the **±** buttons in the viewer toolbar to narrow the visible lines to a window around the selected entry — 15 minutes, 30 minutes, 1 hour, or 4 hours. This cuts through noise in busy log files and lets you focus on what was happening immediately before and after an issue.

![Time window](screenshots/05-timewindow.png)

### PII scrubbing
Highlight any text in the log viewer, then click **Scrub PII & Copy** in the bottom bar. A preview shows every replacement before anything is copied — IP addresses, `DOMAIN\username` pairs, email addresses, SIDs, GUIDs, UNC paths, and more are replaced with clearly labelled placeholders. A copyable text box is provided as a fallback if the browser blocks clipboard access.

![PII scrub demo](screenshots/06-scrub.gif)

---

## Features

### File loading
- Select a product, then drop **individual files**, a **`.zip`**, or a **whole folder** — everything is unpacked and processed in the browser
- **Nested zips** (a bundle containing a zip per node / per Distributed Engine) are extracted recursively, preserving the original folder structure
- Files are matched to their component automatically by filename — including rolled logs like `SS.log.1`, `SS.log.2`
- **Lazy loading** — only the most recent log per component is parsed up front to keep things fast and memory-light; older rolled files load on demand via **Load older logs**
- **Upload additional files** at any time without losing what you've already loaded
- Hover the **ⓘ** button next to any component to see the typical path where that log file lives on the server

### Sidebar — components & file tree
- Loaded components are listed in the sidebar; click one to focus it
- When a zip or folder is loaded, toggle between a **Components** view and a **File tree** view that mirrors the original folder structure

### Filtering and results
- Filter entries by **ERROR**, **CRITICAL**, **WARNING**, **INFO**, **VERBOSE**, or **DEBUG** across all loaded files
- Results are sorted most-recent-first with source file and line numbers
- Click any result to jump directly to that line in the full log viewer

### Global time range
- Restrict **every** loaded log to a specific start/end window with a single control
- Ideal for focusing all components on the moment an incident occurred; a reset button clears it instantly

### Recognised errors (knowledge base)
- The tool ships with a built-in dictionary of known Delinea errors sourced from public documentation and internal knowledge
- Lines matching a known error show an amber **!** badge linking straight to the relevant article
- The **Recognised errors** view lists each distinct known error once, showing how many times it occurred; step through every occurrence with ▲▼, or jump to other components that hit the same error

### Log viewer
- Opens the complete log file with the selected entry highlighted and centred
- **Time window** — narrow to ±15 minutes, ±30 minutes, ±1 hour, or ±4 hours around the selected entry
- **Similar entries** — highlight all lines sharing the same logger/component string to trace a specific subsystem
- **Keyword search** — inline search with match counter and ▲▼ navigation between hits
- Stack traces and continuation lines are detected and collapsed by default

### Universal search
- The search bar at the top of the sidebar searches across every loaded log file at once
- Searches current logs by default for speed, with a one-click option to also load and search older rolled files
- Per-component include/exclude toggles let you scope the search

### Windows Event Logs (.evtx)
- Upload a Windows Event Log at any time with **Upload & analyse EVTX**
- Opens in a draggable, resizable floating window with a summary (time range, level breakdown, top event IDs) and a browsable event list
- **Sync all logs to this time** lines your other logs up around a chosen event, and a correlation option pulls entries from ±10/15/20 minutes around it — so you can see what happened across the whole system at that moment
- EVTX parsing is best-effort: it decodes what it can from the binary format and is honest about anything it can't

### Appearance & convenience
- **Light and dark mode** toggle — your preference is remembered
- **Resizable panels** — the sidebar, results, and viewer widths persist between sessions
- **Installable** as a Progressive Web App for quick access
- **Hard refresh** button to clear the cache and pull the latest version, with automatic update detection
- **Feedback** button for sending ideas or reporting issues

### Privacy
- 100% client-side — log data never leaves your device
- Works offline once loaded
- Safe for sensitive and production logs

---
