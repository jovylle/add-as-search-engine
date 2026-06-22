# Chrome Web Store listing — ChatGPT Search

Version: 2.0.0

## Positioning (v2.0)

**Core value:** Auto-send ChatGPT prompts when opened via `?prompt=` URL.

**Secondary:** One-time manual setup for `c` address-bar shortcut (copy-paste in popup). Works on all Chromium browsers including Vivaldi.

**Removed:** Omnibox API, `chrome_settings_overrides`, background service worker.

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
