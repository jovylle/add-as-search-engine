# Extension details — ChatGPT Search

Version: 2.0.0

## Overview

Repurposed around what works everywhere:

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

## Long description (Chrome Web Store)

Open ChatGPT with a prompt in the URL and have it sent automatically. Add a one-time `c` address-bar shortcut using our copy-paste setup guide.

**Features**
- Auto-send when URL contains `?prompt=`
- Quick search from the extension popup
- Step-by-step setup for Chrome, Edge, Brave, Opera, and Vivaldi

**How address-bar search works**
1. Add ChatGPT as a site search engine (one time, ~30 seconds)
2. Type `c` + Tab + your question + Enter
3. Extension auto-sends the prompt on chatgpt.com

Does not change your default search engine. Does not route queries through our servers.

## Disclaimer

Not affiliated with OpenAI or ChatGPT.
