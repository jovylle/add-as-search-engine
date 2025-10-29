chrome.omnibox.onInputEntered.addListener((text) => {
  const query = encodeURIComponent(text.trim());
  const url = `@https://www.bing.com/copilotsearch?q=${query}`;
  chrome.tabs.create({ url });
});

chrome.omnibox.onInputStarted.addListener(() => {
  chrome.omnibox.setDefaultSuggestion({ description: 'Search Microsoft Copilot for: %s' });
});