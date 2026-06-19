# Extension details — Add ChatGPT as search engine

Version: 1.4.1

## Overview
Adds ChatGPT as a search engine in Chrome. Trigger it with your keyword (default: `c`); your query opens at ChatGPT with optional auto-send.

## Store listing
- Title: ChatGPT Search
- Short description: Search ChatGPT from your address bar. Custom keyword + auto-send prompts. Does not change your default search engine.
- Category: Search Tools
- Primary language: English (en)

## Keyword
- c (default, customizable via extension popup)

## Search URL
- https://chatgpt.com/?prompt={searchTerms}

## Permissions and justification
- `storage` — saves your keyword preference and auto-send toggle locally
- `search` — registers ChatGPT as a Chrome search engine option
- `host_permissions` + `content_scripts` on chatgpt.com — auto-send prompt when enabled

## Data handling
- Stores only your keyword and auto-send preference locally in Chrome sync storage
- No analytics or telemetry
- Search queries go directly to ChatGPT when you choose to search

## Third‑party service
- ChatGPT (OpenAI) — Privacy: https://openai.com/policies/privacy-policy

## Notes
- You may need to be signed in to ChatGPT for the search to work properly.
- If you change the keyword from the default, apply it once in Chrome search settings.

## Disclaimer
This project is an independent, community-made utility and is not affiliated with, endorsed by, or sponsored by OpenAI or ChatGPT.

## Long description (Chrome Web Store)
Search ChatGPT straight from the address bar—fast, simple, and distraction-free. This extension adds ChatGPT as a search engine option but does not replace your default search engine.

How it works
- Type `c` in the address bar and press Tab (or Space)
- Enter your question
- Press Enter to open ChatGPT with your query via `?prompt=`

Settings (click the extension icon)
- Customize your address-bar keyword
- Toggle auto-send when using the `?prompt=` URL parameter

What you get
- Quick access to ChatGPT from anywhere in Chrome
- Customizable keyword shortcut
- Optional auto-send for faster searches
- Lightweight, single-purpose design

What to expect (and what's not included)
- This does not set or change your default search engine
- No omnibox autocomplete or suggestions from this extension
- No data collection or telemetry; only your keyword/auto-send prefs are stored locally
- Queries are sent to ChatGPT only when you press Enter
