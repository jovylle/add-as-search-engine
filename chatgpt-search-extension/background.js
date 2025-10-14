chrome.omnibox.onInputEntered.addListener((text) => {
  const query = encodeURIComponent(text.trim());
  const url = `https://chatgpt.com/?q=${query}`;
  chrome.tabs.create({ url });
});

chrome.omnibox.onInputStarted.addListener(() => {
  chrome.omnibox.setDefaultSuggestion({ description: 'Search ChatGPT for: %s' });
});