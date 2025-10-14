# Extension details — Add ChatGPT as search engine

Version: 1.0.0

## Overview
Adds ChatGPT as a search engine in Chrome. Trigger it with the keyword shown below; your query is then opened at ChatGPT.

## Store listing
- Title: Add ChatGPT as search engine
- Short description: Add ChatGPT as a search engine. Type 'chat' + Tab in the address bar to search instantly.
- Category: Search Tools
- Primary language: English (en)

## Keyword
- chat

## Search URL
- https://chatgpt.com/?q={searchTerms}

## Permissions and justification
- None beyond defaults. Uses the Omnibox keyword and a lightweight background service worker to open a new tab to ChatGPT with your query.

## Data handling
- This extension collects, stores, or transmits no user data. Queries go directly from your browser to ChatGPT when you choose to search.

## What it does NOT do
- Does not change your default search engine
- Does not inject scripts into any webpage
- Does not run background scripts

## Third‑party service
- ChatGPT (OpenAI) — Privacy: https://openai.com/policies/privacy-policy

## Notes
- You may need to be signed in to ChatGPT for the search to work properly.

## Disclaimer
This project is an independent, community-made utility and is not affiliated with, endorsed by, or sponsored by OpenAI or ChatGPT.

## Long description
Search ChatGPT straight from the address bar—fast, simple, and distraction‑free. This extension adds an omnibox keyword but does not replace your default search engine.

How it works
- Type `chat` in the address bar and press Tab (or Space)
- Enter your question
- Press Enter to open ChatGPT with your query

What you get
- One‑keystroke access to ChatGPT from anywhere in Chrome
- Lightweight, single‑purpose design (no page injections)
- Your queries open directly on chatgpt.com

What to expect (and what’s not included)
- This does not set or change your default search engine
- No omnibox autocomplete or suggestions are provided by this extension
- No context‑menu items, no toolbar buttons, no extra UI
- No data collection or telemetry; nothing is sent anywhere except your query to ChatGPT when you press Enter
