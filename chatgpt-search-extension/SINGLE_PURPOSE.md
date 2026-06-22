# Single Purpose

This extension has one purpose:

- Auto-send ChatGPT prompts when the page is opened with a `?prompt=` URL parameter.

It also provides:

- Quick search from the popup (opens ChatGPT with `?prompt=`)
- Copy-paste instructions to add a manual `c` address-bar shortcut

What it does not do:

- Does not change your default search engine
- Does not add search engines automatically (browsers block this)
- Does not collect or transmit user data

Technical details:

- URL pattern: `https://chatgpt.com/?prompt={query}`
- Permissions: `storage`, `host_permissions` for chatgpt.com
- Manifest: Chrome Manifest V3
