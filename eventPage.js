var contextMenuItem = {
  id: "peachesOnly",
  title: "Search Google",
  contexts: ["selection"],
};

chrome.contextMenus.create(contextMenuItem);
chrome.contextMenus.onClicked.addListener(function (clickData) {
  if (clickData.menuItemId == "peachesOnly" && clickData.selectionText) {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      var activeTab = tabs[0];
      var msg = {
        txt: "google-this",
        content: clickData.selectionText,
      };
      chrome.tabs.sendMessage(activeTab.id, msg);
    });
  }
});
