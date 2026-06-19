const AUTO_SEND_STORAGE_KEY = 'autoSend';

const autoSendToggle = document.getElementById('auto-send');
const autoSendStatus = document.getElementById('auto-send-status');
const errorMessage = document.getElementById('error');

function updateAutoSendStatus(enabled) {
  autoSendStatus.textContent = enabled
    ? 'Auto-send is enabled.'
    : 'Auto-send is disabled.';
}

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.hidden = false;
}

async function loadSettings() {
  const stored = await chrome.storage.sync.get({
    [AUTO_SEND_STORAGE_KEY]: true,
  });

  autoSendToggle.checked = stored[AUTO_SEND_STORAGE_KEY];
  updateAutoSendStatus(stored[AUTO_SEND_STORAGE_KEY]);
}

async function saveAutoSend(enabled) {
  await chrome.storage.sync.set({ [AUTO_SEND_STORAGE_KEY]: enabled });
  updateAutoSendStatus(enabled);
}

autoSendToggle.addEventListener('change', async () => {
  try {
    await saveAutoSend(autoSendToggle.checked);
  } catch (error) {
    autoSendToggle.checked = !autoSendToggle.checked;
    showError('Could not save auto-send setting. Try again.');
  }
});

loadSettings().catch(() => {
  showError('Could not load settings. Reload the extension and try again.');
});
