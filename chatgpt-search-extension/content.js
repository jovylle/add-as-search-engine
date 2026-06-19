const PROMPT_PARAMS = ['prompt', 'q'];
const SEND_BUTTON_SELECTORS = [
  'button[data-testid="send-button"]',
  'button[aria-label="Send prompt"]',
  'button[aria-label="Send message"]',
];

function getPromptFromUrl() {
  const params = new URLSearchParams(window.location.search);
  for (const key of PROMPT_PARAMS) {
    const value = params.get(key);
    if (value && value.trim()) {
      return value.trim();
    }
  }
  return '';
}

function findSendButton() {
  for (const selector of SEND_BUTTON_SELECTORS) {
    const button = document.querySelector(selector);
    if (button) {
      return button;
    }
  }
  return null;
}

function canSend(button) {
  return Boolean(
    button &&
      !button.disabled &&
      button.getAttribute('aria-disabled') !== 'true'
  );
}

function tryAutoSend() {
  const button = findSendButton();
  if (!canSend(button)) {
    return false;
  }

  button.click();
  return true;
}

async function maybeAutoSend() {
  if (!getPromptFromUrl()) {
    return;
  }

  const stored = await chrome.storage.sync.get({ autoSend: true });
  if (!stored.autoSend) {
    return;
  }

  let attempts = 0;
  const maxAttempts = 50;

  const timer = window.setInterval(() => {
    attempts += 1;
    if (tryAutoSend() || attempts >= maxAttempts) {
      window.clearInterval(timer);
    }
  }, 250);
}

maybeAutoSend();
