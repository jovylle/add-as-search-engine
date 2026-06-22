const AUTO_SEND_STORAGE_KEY = 'autoSend';
const BROWSER_STORAGE_KEY = 'setupBrowser';

const SETUP_STEPS = {
  chrome: [
    'Open search settings (button below).',
    'Under <strong>Site search</strong>, click <strong>Add</strong>.',
    'Paste Name, Shortcut, and URL from above.',
    'Use <code>c</code> + Tab + your question + Enter.',
  ],
  edge: [
    'Open search settings (button below).',
    'Click <strong>Add</strong> under site search.',
    'Paste Name, Shortcut, and URL from above.',
    'Use <code>c</code> + Tab + your question + Enter.',
  ],
  brave: [
    'Open search settings (button below).',
    'Under <strong>Site search</strong>, click <strong>Add</strong>.',
    'Paste Name, Shortcut, and URL from above.',
    'Use <code>c</code> + Tab + your question + Enter.',
  ],
  opera: [
    'Open search settings (button below).',
    'Under <strong>Site search</strong>, click <strong>Add</strong>.',
    'Paste Name, Shortcut, and URL from above.',
    'Use <code>c</code> + Tab + your question + Enter.',
  ],
  vivaldi: [
    'Open search settings (button below), or go to <strong>Settings → Search</strong>.',
    'Add a new search engine with the values above.',
    'Use <code>c</code> + space/tab + your question + Enter.',
  ],
};

const SEARCH_SETTINGS_URLS = {
  chrome: 'chrome://settings/searchEngines',
  edge: 'edge://settings/searchEngines',
  brave: 'chrome://settings/searchEngines',
  opera: 'opera://settings/searchEngines',
  vivaldi: 'vivaldi://settings/search',
};

const quickSearchInput = document.getElementById('quick-search');
const quickSearchButton = document.getElementById('quick-search-btn');
const autoSendToggle = document.getElementById('auto-send');
const autoSendStatus = document.getElementById('auto-send-status');
const browserSelect = document.getElementById('browser-select');
const setupSteps = document.getElementById('setup-steps');
const openSearchSettingsButton = document.getElementById('open-search-settings');
const toastMessage = document.getElementById('toast');
const errorMessage = document.getElementById('error');

function detectBrowser() {
  const ua = navigator.userAgent;
  if (ua.includes('Edg/')) return 'edge';
  if (ua.includes('Vivaldi/')) return 'vivaldi';
  if (ua.includes('OPR/') || ua.includes('Opera/')) return 'opera';
  if (ua.includes('Brave/')) return 'brave';
  return 'chrome';
}

function buildChatGPTUrl(query) {
  const trimmed = query.trim();
  return trimmed
    ? `https://chatgpt.com/?prompt=${encodeURIComponent(trimmed)}`
    : 'https://chatgpt.com/';
}

function updateAutoSendStatus(enabled) {
  autoSendStatus.textContent = enabled
    ? 'Enabled — prompts with ?prompt= will auto-send.'
    : 'Disabled — ChatGPT opens with the prompt filled in only.';
}

function showToast(message) {
  errorMessage.hidden = true;
  toastMessage.textContent = message;
  toastMessage.hidden = false;
  window.setTimeout(() => {
    toastMessage.hidden = true;
  }, 2000);
}

function showError(message) {
  toastMessage.hidden = true;
  errorMessage.textContent = message;
  errorMessage.hidden = false;
}

function renderSetupSteps(browser) {
  const steps = SETUP_STEPS[browser] || SETUP_STEPS.chrome;
  setupSteps.innerHTML = steps.map((step) => `<li>${step}</li>`).join('');
}

async function copyText(elementId) {
  const element = document.getElementById(elementId);
  const text = element.textContent.trim();

  try {
    await navigator.clipboard.writeText(text);
    showToast(`Copied ${text.length > 24 ? 'value' : text}`);
  } catch (error) {
    showError('Could not copy. Select the text manually.');
  }
}

async function openChatGPT(query) {
  await chrome.tabs.create({ url: buildChatGPTUrl(query) });
}

async function runQuickSearch() {
  try {
    await openChatGPT(quickSearchInput.value);
    quickSearchInput.value = '';
    window.close();
  } catch (error) {
    showError('Could not open ChatGPT. Try again.');
  }
}

async function loadSettings() {
  const browser = detectBrowser();
  const stored = await chrome.storage.sync.get({
    [AUTO_SEND_STORAGE_KEY]: true,
    [BROWSER_STORAGE_KEY]: browser,
  });

  autoSendToggle.checked = stored[AUTO_SEND_STORAGE_KEY];
  updateAutoSendStatus(stored[AUTO_SEND_STORAGE_KEY]);

  const savedBrowser = SETUP_STEPS[stored[BROWSER_STORAGE_KEY]]
    ? stored[BROWSER_STORAGE_KEY]
    : browser;
  browserSelect.value = savedBrowser;
  renderSetupSteps(savedBrowser);
}

async function saveAutoSend(enabled) {
  await chrome.storage.sync.set({ [AUTO_SEND_STORAGE_KEY]: enabled });
  updateAutoSendStatus(enabled);
}

document.querySelectorAll('.copy-btn').forEach((button) => {
  button.addEventListener('click', () => {
    copyText(button.dataset.copy);
  });
});

browserSelect.addEventListener('change', async () => {
  renderSetupSteps(browserSelect.value);
  await chrome.storage.sync.set({ [BROWSER_STORAGE_KEY]: browserSelect.value });
});

quickSearchButton.addEventListener('click', () => {
  runQuickSearch();
});

quickSearchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    runQuickSearch();
  }
});

openSearchSettingsButton.addEventListener('click', async () => {
  const browser = browserSelect.value;
  const settingsUrl = SEARCH_SETTINGS_URLS[browser] || SEARCH_SETTINGS_URLS.chrome;

  try {
    await chrome.tabs.create({ url: settingsUrl });
  } catch (error) {
    showError('Could not open settings. Open search settings manually.');
  }
});

autoSendToggle.addEventListener('change', async () => {
  try {
    await saveAutoSend(autoSendToggle.checked);
  } catch (error) {
    autoSendToggle.checked = !autoSendToggle.checked;
    showError('Could not save setting. Try again.');
  }
});

loadSettings().catch(() => {
  showError('Could not load settings. Reload the extension.');
});
