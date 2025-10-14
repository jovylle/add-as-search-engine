# Single Purpose

This extension has exactly one purpose:

- Add Claude as a search engine in Chrome with the keyword: `claude`.

What it does not do:
- It does not change your default search engine.
- It does not run in the background.
- It does not inject scripts into web pages.
- It does not collect or transmit any data.

Technical details:
- Search URL: `https://claude.ai/new?query={searchTerms}`
- Permission: `search` only
- Manifest: Chrome Manifest V3