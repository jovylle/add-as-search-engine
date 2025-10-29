# Extension details — Add Copilot as search engine

Version: 1.0.1

## Overview
Adds Microsoft Copilot as a search engine in Chrome. Trigger it with the keyword below; your query opens at Copilot.

## Store listing
- Title: Add Copilot as search engine
- Short description: Add Microsoft Copilot as a search engine. Type 'copilot' + Tab in the address bar to search instantly.
- Category: Search Tools
- Primary language: English (en)

## Keyword
- copilot

## Search URL
- https://www.bing.com/copilotsearch?q={searchTerms}

## Permissions and justification
- None beyond defaults. Uses the Omnibox API via a lightweight background service worker to open a new tab to Copilot with your query.

## Data handling
- The extension collects, stores, or transmits no user data. When you press Enter, a new tab opens to Copilot with your query; no data is sent anywhere else.

## Long description
Search Microsoft Copilot straight from the address bar—fast, simple, and distraction‑free. This extension adds an omnibox keyword but does not replace your default search engine.

How it works
- Type `copilot` in the address bar and press Tab (or Space)
- Enter your question
- Press Enter to open Copilot with your query

What you get
- One‑keystroke access to Copilot from anywhere in Chrome
- Lightweight, single‑purpose design (no background processes, no page injections)
- Your queries open directly on copilot.microsoft.com
- Your queries open via Bing Copilot search

What to expect (and what’s not included)
- This does not set or change your default search engine
- No omnibox autocomplete or suggestions are provided by this extension
- No context‑menu items, no toolbar buttons, no extra UI
- No data collection or telemetry; nothing is sent anywhere except your query to Copilot when you press Enter
- You may need to be signed in to your Microsoft account for best results

## Disclaimer
This project is an independent, community-made utility and is not affiliated with, endorsed by, or sponsored by Microsoft or Copilot.

## What it does NOT do
- Does not change your default search engine
- Does not inject scripts into any webpage
- Does not run background scripts

## Third‑party service
- Microsoft Copilot — Privacy: https://privacy.microsoft.com/
