chrome.omnibox.onInputEntered.addListener((text) => {
  const query = encodeURIComponent(text.trim());
  const url = `https://www.perplexity.ai/search?q=${query}`;
  chrome.tabs.create({ url });
});

chrome.omnibox.onInputStarted.addListener(() => {
  chrome.omnibox.setDefaultSuggestion({ description: 'Search Perplexity for: %s' });
});