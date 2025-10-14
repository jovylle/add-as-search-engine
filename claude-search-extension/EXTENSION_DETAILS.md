# Extension details — Add Claude as search engine

Version: 1.0.0

## Overview
Adds Claude as a search engine in Chrome. Trigger it with the keyword below; your query opens at Claude.

## Store listing
- Title: Add Claude as search engine
- Short description: Add Claude as a search engine. Type 'claude' + Tab in the address bar to search instantly.
- Category: Search Tools
- Primary language: English (en)

## Keyword
- claude

## Search URL
- https://claude.ai/new?query={searchTerms}

## Permissions and justification
- None beyond defaults. Uses the Omnibox keyword and a lightweight background service worker to open a new tab to Claude with your query.

## Data handling
- The extension collects, stores, or transmits no user data. Queries go directly from your browser to Claude when you choose to search.

## What it does NOT do
- Does not change your default search engine
- Does not inject scripts into any webpage
- Does not run background scripts

## Third‑party service
- Claude (Anthropic) — Privacy: https://www.anthropic.com/privacy

## Notes
- Claude may not always pre-fill the chat box from the URL; if it opens a new chat without content, paste your query.

## Disclaimer
This project is an independent, community-made utility and is not affiliated with, endorsed by, or sponsored by Anthropic or Claude.

## Long description
Search Claude straight from the address bar—quick and simple. This extension adds an omnibox keyword but does not replace your default search engine.

How it works
- Type `claude` in the address bar and press Tab (or Space)
- Enter your question
- Press Enter to open Claude with your query

What to expect
- No change to your default search engine
- No extra UI, no page injections, no data collection
- Note: Claude may occasionally open a new chat without pre‑filling the text; paste your query if that happens