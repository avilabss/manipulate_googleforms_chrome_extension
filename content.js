console.log("Content Script Ran!");

chrome.runtime.onMessage.addListener(handleMessage);

function handleMessage(request, sender, sendResponse) {
  console.log(`Received -> ${request.txt}`);

  if (request.txt === "set-numbers") {
    setNumbers();
  }

  if (request.txt === "sort-items") {
    sortItems();
  }

  if (request.txt === "google-this") {
    console.log(request.content);
    googleThis(request.content);
  }
}

function setNumbers() {
  headings = document.getElementsByClassName(
    "freebirdFormviewerComponentsQuestionBaseTitleDescContainer"
  );

  for (var x = 0; x < headings.length; x++) {
    headings[x].innerText = `${x + 1}. ` + headings[x].innerText;
  }
}

function sortItems() {
  const containers = document.getElementsByClassName(
    "freebirdFormviewerViewNumberedItemContainer"
  );
  const sortThisList = [];

  for (let x = 0; x < containers.length; x++) {
    sortThisList.push(containers[x]);
  }

  // Sort Strategy: Compare 1st word of given elements
  sortThisList.sort((a, b) => {
    var elemA = a.innerText[0].toLowerCase();
    var elemB = b.innerText[0].toLowerCase();

    if (elemA < elemB) {
      return -1;
    }
    if (elemA > elemB) {
      return 1;
    }
    return 0;
  });

  var parentCompenent = document.getElementsByClassName(
    "freebirdFormviewerViewItemList"
  )[0];

  while (parentCompenent.firstChild) {
    parentCompenent.firstChild.remove();
  }

  for (let x = 0; x < sortThisList.length; x++) {
    parentCompenent.innerHTML += sortThisList[x].innerHTML;
  }
}

function googleThis(searchFor) {
  window.open("http://google.com/search?q=" + searchFor);
}
