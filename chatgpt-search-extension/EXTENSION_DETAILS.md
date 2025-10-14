# Extension details — Add ChatGPT as search engine

Version: 1.0.0

## Overview
Adds ChatGPT as a search engine in Chrome. Trigger it with the keyword shown below; your query is then opened at ChatGPT.

## Keyword
- chat

## Search URL
- https://chatgpt.com/?q={searchTerms}

## Permissions and justification
- search: Required by Chrome to register a custom search provider via chrome_settings_overrides.search_provider. No other permissions are requested or used.

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
