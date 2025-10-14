# Extension details — Add Gemini as search engine

Version: 1.0.0

## Overview
Adds Google Gemini as a search engine in Chrome. Trigger it with the keyword below; your query opens at Gemini.

## Store listing
- Title: Add Gemini as search engine
- Short description: Add Google Gemini as a search engine. Type 'gemini' + Tab in the address bar to search instantly.
- Category: Search Tools
- Primary language: English (en)

## Keyword
- gemini

## Search URL
- https://gemini.google.com/app?hl=en&q={searchTerms}

## Permissions and justification
- search: Required by Chrome to register a custom search provider via chrome_settings_overrides.search_provider. No other permissions are requested or used.

## Data handling
- The extension collects, stores, or transmits no user data. Queries go directly from your browser to Google Gemini when you choose to search.

## Long description (for store reviewers)
This extension registers Google Gemini as a custom search engine via Manifest V3 `chrome_settings_overrides.search_provider`. After installation, users type `gemini` in the omnibox, press Tab or Space, enter a query, and press Enter. Chrome navigates to `https://gemini.google.com/app?hl=en&q={searchTerms}`. The extension includes no background scripts and injects no code into web pages. It does not change the default search engine. The only permission requested is `search`, which is required by Chrome for creating a custom search provider. The extension does not collect, store, or transmit user data; searches are sent directly to Google Gemini by the browser when initiated by the user.

## What it does NOT do
- Does not change your default search engine
- Does not inject scripts into any webpage
- Does not run background scripts

## Third‑party service
- Google — Privacy: https://policies.google.com/privacy

## Disclaimer
This project is an independent, community-made utility and is not affiliated with, endorsed by, or sponsored by Google or Gemini.
