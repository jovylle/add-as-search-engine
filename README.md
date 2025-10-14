# Add as Search Engine - Chrome Extensions Collection

A collection of simple Chrome extensions that add popular AI services as search engines with custom keywords. Each extension allows you to quickly search a specific service directly from your address bar without making it your default search engine.

## Available Extensions

### 🤖 ChatGPT Search Engine
- **Folder**: `chatgpt-search-extension/`
- **Keyword**: `chat`
- **Usage**: Type `chat` in address bar → Tab → your query → Enter
- **URL**: Searches ChatGPT directly

### 🎭 Claude AI Search Engine
- **Folder**: `claude-search-extension/`
- **Keyword**: `claude`
- **Usage**: Type `claude` in address bar → Tab → your query → Enter
- **URL**: Searches Claude AI directly

### 🔍 Perplexity AI Search Engine
- **Folder**: `perplexity-search-extension/`
- **Keyword**: `perplexity`
- **Usage**: Type `perplexity` in address bar → Tab → your query → Enter
- **URL**: Searches Perplexity AI directly

### 🚀 Microsoft Copilot Search Engine
- **Folder**: `copilot-search-extension/`
- **Keyword**: `copilot`
- **Usage**: Type `copilot` in address bar → Tab → your query → Enter
- **URL**: Searches Microsoft Copilot directly

### ✨ Google Gemini Search Engine
- **Folder**: `gemini-search-extension/`
- **Keyword**: `gemini`
- **Usage**: Type `gemini` in address bar → Tab → your query → Enter
- **URL**: Searches Google Gemini directly

## How to Install Any Extension

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" (toggle in top right)
4. Click "Load unpacked"
5. Select the folder of the extension you want to install
6. The extension will be installed and the search engine will be available

## How to Use

After installing an extension:
1. Type the keyword (e.g., `chat` or `claude`) in your Chrome address bar
2. Press Tab or Space
3. Type your search query
4. Press Enter to search that service directly

## Repository Structure

```
add-as-search-engine/
├── README.md                     # This file
├── INSTALLATION.md               # Installation guide
├── TEMPLATE.md                   # Template for new extensions
├── chatgpt-search-extension/     # ChatGPT search extension
│   ├── manifest.json
│   ├── README.md
│   └── icons/
├── claude-search-extension/      # Claude AI search extension
│   ├── manifest.json
│   ├── README.md
│   └── icons/
├── perplexity-search-extension/  # Perplexity AI search extension
│   ├── manifest.json
│   ├── README.md
│   └── icons/
├── copilot-search-extension/     # Microsoft Copilot search extension
│   ├── manifest.json
│   ├── README.md
│   └── icons/
└── gemini-search-extension/      # Google Gemini search extension
    ├── manifest.json
    ├── README.md
    └── icons/
```

## Contributing

To add a new search engine extension:

1. Create a new folder: `{service-name}-search-extension/`
2. Add a `manifest.json` with the search provider configuration
3. Include a `README.md` with specific instructions
4. Update this main README with the new extension info

## Notes

- These extensions do **NOT** change your default search engine
- They add additional search engines that you can access via keywords
- You may need to be logged into the respective services for searches to work
- Icons are optional but recommended for better UX