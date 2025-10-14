chrome.omnibox.onInputEntered.addListener((text) => {
  const query = encodeURIComponent(text.trim());
  const url = `https://copilot.microsoft.com/?q=${query}`;
  chrome.tabs.create({ url });
});

chrome.omnibox.onInputStarted.addListener(() => {
  chrome.omnibox.setDefaultSuggestion({ description: 'Search Microsoft Copilot for: %s' });
});