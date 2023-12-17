function insertElement() {
  const filter = document.querySelector(".filter");
  const h1 = document.createElement("h1");
  h1.textContent = "=insertAdjacentElement=";

  filter.insertAdjacentElement("beforebegin", h1);
}

function insertText() {
  const applesElem = document.querySelector("li:first-child");
  applesElem.insertAdjacentText("beforebegin", "=insertAdjacentText=");
  console.log(applesElem);
}

function insertHTML() {
  const clearButton = document.querySelector("#clear");
  clearButton.insertAdjacentHTML(
    "beforebegin",
    "<button>insertAdjacentHtml</button>"
  );
}

function insertBeforeItem() {
  const ul = document.querySelector("ul");
  const newButton = document.createElement("li");
  newButton.innerText = "NewButton";

  const liThird = document.querySelector("li:nth-child(3)");
  ul.insertBefore(newButton, liThird);

  console.log(liThird);
}

function insertAfter(newNode, referenceNode) {
  let parent = referenceNode.parentElement;
  console.log("parent=", parent);
  reference = referenceNode.nextElementSibling;
  if (reference) {
    console.log("=call insertBefore", reference);
    parent.insertBefore(newNode, reference);
  } else {
    parent.appendChild();
    console.log("=call appendChild");
  }
}

function insertAfterItem() {
  const li = document.createElement("li");
  li.textContent = "InsertMeAfter!";

  const firstItem = document.querySelector("li:first-child");
  console.log("firstItem=", firstItem);
  console.log(firstItem.parentElement);
  insertAfter(li, firstItem);
}

// insertElement();
// insertText();
// insertHTML();
//insertBeforeItem();
insertAfterItem();
