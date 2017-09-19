chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  chrome.tabs.sendMessage(tabId, { type: 'PAGE_UPDATE', changeInfo: changeInfo });
});
