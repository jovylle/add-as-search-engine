# Extension details — Add Claude as search engine

Version: 1.0.0

## Overview
Adds Claude as a search engine in Chrome. Trigger it with the keyword below; your query opens at Claude.

## Keyword
- claude

## Search URL
- https://claude.ai/new?query={searchTerms}

## Permissions and justification
- search: Required by Chrome to register a custom search provider via chrome_settings_overrides.search_provider. No other permissions are requested or used.

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