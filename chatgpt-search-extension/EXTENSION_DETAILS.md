# Extension details — ChatGPT Search

Version: 2.0.1

## Overview

Repurposed around what works in Chromium browsers:

- **Auto-send** prompts when ChatGPT opens with `?prompt=` in the URL
- **Quick search** from the extension popup
- **Setup guide** to add a manual address-bar shortcut (`c`) — one-time, copy-paste

No omnibox API. No owned redirect server. No `chrome_settings_overrides`.

## Store listing

- Title: ChatGPT Search
- Short description: Auto-send ChatGPT prompts from ?prompt= URLs. Quick search + setup guide for address-bar shortcut c.
- Category: Search Tools

## Why manual search engine setup?

Chromium browsers **block** extensions from adding arbitrary search engines programmatically. Only options:

| Approach | Works cross-browser? | Store-safe? | Trust |
|----------|---------------------|-------------|-------|
| `chrome_settings_overrides` | Chrome-family only | Needs owned domain | Redirect server |
| Omnibox API | Chrome/Edge only | Yes | Direct to ChatGPT |
| Manual site search | **Chromium browsers** | N/A (user action) | Direct to ChatGPT |

We chose **manual setup + auto-send** — works on Vivaldi, uses `c`, no middleman.

## Search engine values (user adds once)

- Name: `ChatGPT`
- Shortcut: `c`
- URL: `https://chatgpt.com/?prompt=%s`

## Permissions

- `storage` — auto-send toggle
- `host_permissions` + `content_scripts` on chatgpt.com — auto-send

## Data handling

- Stores only auto-send preference locally
- No analytics
- Queries go directly to ChatGPT

## Long description (Chrome Web Store — copy/paste)

Search ChatGPT from your address bar—fast, simple, and distraction-free. This extension auto-sends prompts and helps you add a one-time `c` shortcut. It does not replace your default search engine.

How it works
- One-time setup: add ChatGPT as a site search engine using copy-paste values in the popup (Name: ChatGPT, Shortcut: c, URL: https://chatgpt.com/?prompt=%s)
- Type `c` in the address bar and press Tab
- Enter your question
- Press Enter to open ChatGPT with your query via `?prompt=`
- The extension auto-sends the prompt on chatgpt.com (toggle in popup)

Settings (click the extension icon)
- Quick search — type and Go from the popup
- Copy-paste setup for Chrome, Edge, Brave, Opera, and Vivaldi
- Toggle auto-send when using the `?prompt=` URL parameter

What you get
- Quick access to ChatGPT from anywhere in Chromium browsers
- Address-bar shortcut `c` after one-time manual setup
- Optional auto-send for faster searches
- Lightweight, single-purpose design
- No redirect server — queries go straight to ChatGPT

What to expect (and what's not included)
- This does not set or change your default search engine
- Extensions cannot add search engines automatically (browser security) — you add it once yourself
- No data collection or telemetry; only your auto-send preference is stored locally
- Queries are sent to ChatGPT only when you search or use quick search

## Disclaimer

Not affiliated with OpenAI or ChatGPT.
