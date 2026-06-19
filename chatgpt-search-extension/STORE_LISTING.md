# Chrome Web Store listing — ChatGPT Search

Version: 1.4.2

## Why Chrome rejected v1.4.1

`chrome_settings_overrides.search_provider` requires URLs you **own**.  
You cannot register `https://chatgpt.com/...` because OpenAI owns that domain.

**Fix in v1.4.2:** switched back to **omnibox + background.js** (like Claude/Perplexity extensions). No `search` permission, no search provider override.

---

## Store form — copy/paste

### Homepage URL
Use a **public, reachable** page you control. Pick one:

- `https://jovylle.com`
- `https://github.com/jovylle/add-as-search-engine` (after you push latest code)

Do **not** use a local file or a GitHub path that 404s.

### Privacy policy URL
Must be a **public HTML page**. Options:

1. Host `policy.html` on GitHub Pages, e.g.  
   `https://jovylle.github.io/add-as-search-engine/chatgpt-search-extension/policy.html`
2. Or add a privacy section on `https://jovylle.com` and link that

Until hosted, Chrome will show **Privacy policy link is not reachable**.

### Single purpose
Add ChatGPT quick search from the Chrome address bar using keyword `c`.

### Permission justifications (Privacy practices tab)

**storage**  
Saves the user's auto-send on/off preference locally in Chrome sync storage. No personal data is collected.

**host_permissions: https://chatgpt.com/***  
Required only when auto-send is enabled. The content script runs on chatgpt.com to submit the prompt from the `?prompt=` URL parameter. No data is sent anywhere else.

**No `search` permission in v1.4.2** — you should NOT need a search justification anymore.
