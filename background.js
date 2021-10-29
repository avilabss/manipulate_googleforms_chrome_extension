console.log("Background Script Running!");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  let msg = {
    txt: "set-numbers",
  };
  chrome.tabs.sendMessage(tab.id, msg);
}

// "background": {
//     "scripts": ["background.js"],
//     "presistent": false
//   },
