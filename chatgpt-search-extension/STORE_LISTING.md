# Chrome Web Store listing — ChatGPT Search

Version: 2.0.1

## Positioning (v2.0)

**Core value:** Auto-send ChatGPT prompts when opened via `?prompt=` URL.

**Secondary:** One-time manual setup for `c` address-bar shortcut (copy-paste in popup). Chromium browsers only (Chrome, Edge, Brave, Opera, Vivaldi).

**Removed:** Omnibox API, `chrome_settings_overrides`, background service worker.

## Long description (Chrome Web Store — copy/paste)

See [EXTENSION_DETAILS.md](./EXTENSION_DETAILS.md) → **Long description** section.

Quick paste:

```
Search ChatGPT from your address bar—fast, simple, and distraction-free. This extension auto-sends prompts and helps you add a one-time c shortcut. It does not replace your default search engine.

How it works
- One-time setup: add ChatGPT as a site search engine using copy-paste values in the popup (Name: ChatGPT, Shortcut: c, URL: https://chatgpt.com/?prompt=%s)
- Type c in the address bar and press Tab
- Enter your question
- Press Enter to open ChatGPT with your query via ?prompt=
- The extension auto-sends the prompt on chatgpt.com (toggle in popup)

Settings (click the extension icon)
- Quick search — type and Go from the popup
- Copy-paste setup for Chrome, Edge, Brave, Opera, and Vivaldi
- Toggle auto-send when using the ?prompt= URL parameter

What you get
- Quick access to ChatGPT from anywhere in Chromium browsers
- Address-bar shortcut c after one-time manual setup
- Optional auto-send for faster searches
- Lightweight, single-purpose design
- No redirect server — queries go straight to ChatGPT

What to expect (and what's not included)
- This does not set or change your default search engine
- Extensions cannot add search engines automatically (browser security) — you add it once yourself
- No data collection or telemetry; only your auto-send preference is stored locally
- Queries are sent to ChatGPT only when you search or use quick search
```

## Single purpose

Auto-send ChatGPT prompts from URL parameters and help users add a ChatGPT address-bar shortcut.

## Permission justifications

**storage**  
Saves the user's auto-send on/off preference locally. No personal data is collected.

**host_permissions: https://chatgpt.com/***  
Content script runs on chatgpt.com to click Send when the page is opened with a `?prompt=` URL parameter and auto-send is enabled.

## Homepage / privacy

- Homepage: `https://jovylle.com` or GitHub repo
- Privacy: host `policy.html` on GitHub Pages

## FAQ for reviewers

**Q: Why doesn't the extension add the search engine itself?**  
A: Browsers prohibit extensions from programmatically adding third-party search engines (malware vector). Users add it once via built-in browser settings using values we provide.

**Q: Does it change the default search engine?**  
A: No.
