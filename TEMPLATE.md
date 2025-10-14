# Template for Creating New Search Engine Extensions

Use this template to create new Chrome extensions for adding websites as search engines.

## Folder Structure

```
{service-name}-search-extension/
├── manifest.json
├── README.md
└── icons/
    └── README.md (placeholder)
```

## manifest.json Template

```json
{
  "manifest_version": 3,
  "name": "Add {Service Name} as Search Engine",
  "version": "1.0.0",
  "description": "Adds {Service Name} as a search engine with '{keyword}' keyword",
  "permissions": [
    "search"
  ],
  "chrome_settings_overrides": {
    "search_provider": {
      "name": "{Service Display Name}",
      "keyword": "{keyword}",
      "search_url": "{service_url}?q={searchTerms}",
      "favicon_url": "{service_url}/favicon.ico",
      "suggest_url": "",
      "encoding": "UTF-8",
      "is_default": false
    }
  },
  "icons": {
    "16": "icons/icon16.png",
    "32": "icons/icon32.png",
    "48": "icons/icon48.png",
    "128": "icons/icon128.png"
  }
}
```

## README.md Template

```markdown
# {Service Name} Search Engine Extension

This Chrome extension adds {Service Name} as a search engine with the keyword "{keyword}".

## How to Use

1. After installing, type `{keyword}` in your address bar
2. Press Tab or Space
3. Type your search query
4. Press Enter to search {Service Name} directly

## Installation

1. Open Chrome and go to `chrome://extensions/`
2. Enable "Developer mode" in the top right
3. Click "Load unpacked" and select this folder
4. The extension will be installed and {Service Name} will be available as a search engine

## Search URL

This extension uses: `{search_url_with_query_param}`

Note: You may need to be logged into {Service Name} for the search to work properly.
```

## Common Search URL Patterns

- **Chat/AI Services**: `https://service.com/chat?q={searchTerms}`
- **Documentation**: `https://docs.service.com/search?q={searchTerms}`
- **Forums**: `https://forum.service.com/search?q={searchTerms}`
- **General Sites**: `https://service.com/search?query={searchTerms}`

## Popular Services to Add

Ideas for new extensions:
- Perplexity AI (`perplexity`)
- GitHub (`github`)
- Stack Overflow (`so`)
- YouTube (`yt`)
- Reddit (`reddit`)
- Twitter/X (`x`)
- Wikipedia (`wiki`)
- MDN Web Docs (`mdn`)

## Steps to Create

1. Copy this template
2. Replace placeholders with actual service info
3. Find the correct search URL format for the service
4. Test the extension
5. Add to main README.md