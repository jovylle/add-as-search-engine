chrome.omnibox.onInputEntered.addListener((text) => {
  const query = encodeURIComponent(text.trim());
  const url = `https://claude.ai/new?query=${query}`;
  chrome.tabs.create({ url });
});

chrome.omnibox.onInputStarted.addListener(() => {
  chrome.omnibox.setDefaultSuggestion({ description: 'Search Claude for: %s' });
});