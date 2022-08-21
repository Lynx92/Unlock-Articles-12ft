function redirectTo12FtWebsite() {
  window.location.assign(`https://12ft.io/proxy?q=${window.location.href}`);
}

chrome.action.onClicked.addListener((tab) => {
  if (!tab.url.includes("12ft.io")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: redirectTo12FtWebsite,
    });
  }
});

chrome.commands.onCommand.addListener((command, tab) => {
  if (!tab.url.includes("12ft.io") && command === "unlock-now-with-12ft") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: redirectTo12FtWebsite,
    });
  }
});
