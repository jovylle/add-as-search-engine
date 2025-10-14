# Single Purpose

This extension has exactly one purpose:

- Add Google Gemini as a search engine in Chrome with the keyword: `gemini`.

What it does not do:
- It does not change your default search engine.
- It does not run in the background.
- It does not inject scripts into web pages.
- It does not collect or transmit any data.

Technical details:
- Search URL: `https://gemini.google.com/app?hl=en&q={searchTerms}`
- Permission: `search` only
- Manifest: Chrome Manifest V3