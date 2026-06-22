# ChatGPT Search

Auto-send ChatGPT prompts when you open `https://chatgpt.com/?prompt=...`. Includes quick search and one-time setup to add ChatGPT to your address bar.

Works in **Chromium browsers** (Chrome, Edge, Brave, Opera, Vivaldi).

## What it does

1. **Auto-send** — opens ChatGPT with `?prompt=` and clicks Send (toggle in popup)
2. **Quick search** — type in the popup, opens ChatGPT with your prompt
3. **Setup guide** — copy-paste values to add a `c` address-bar shortcut manually

## One-time setup (address bar)

Browsers do **not** let extensions add search engines automatically (malware prevention). Add it once yourself:

| Field | Value |
|-------|-------|
| Name | `ChatGPT` |
| Shortcut | `c` |
| URL | `https://chatgpt.com/?prompt=%s` |

### Chrome / Edge / Brave / Opera

1. Open search settings (`chrome://`, `edge://`, or `opera://settings/searchEngines`)
2. **Site search** → **Add**
3. Paste the values above
4. Use: `c` + Tab + your question + Enter

### Vivaldi

1. **Settings → Search** → add search engine
2. Same values as above — this uses Vivaldi's native search (reliable)
3. Use: `c` + space/tab + your question

The extension popup has **Copy** buttons and steps for each Chromium browser.

## Installation

1. Open `chrome://extensions/`
2. Enable **Developer mode**
3. **Load unpacked** → select this folder

## Permissions

- `storage` — auto-send on/off preference
- `chatgpt.com` — content script to auto-send when `?prompt=` is present

## Disclaimer

Independent community utility — not affiliated with OpenAI or ChatGPT.
