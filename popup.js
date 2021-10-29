document.querySelector("#set-numbers").addEventListener("click", function () {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    var activeTab = tabs[0];
    var msg = {
      txt: "set-numbers",
    };
    chrome.tabs.sendMessage(activeTab.id, msg);
  });
});

document.querySelector("#sort-items").addEventListener("click", function () {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    var activeTab = tabs[0];
    var msg = {
      txt: "sort-items",
    };
    chrome.tabs.sendMessage(activeTab.id, msg);
  });
});
