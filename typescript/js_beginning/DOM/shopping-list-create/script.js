// quick and dirty - cause browse reparse , attach event
function createListItem(item) {
  let elem = document.createElement("li");
  elem.innerHTML = `${item}
    <button class="remove-item btn-link text-red">
      <i class="fa-solid fa-xmark"></i>
    </button>`;
  document.querySelector(".items").appendChild(elem);
}

function createListItem2(item) {
  const liElem = document.createElement("li");
  liElem.appendChild(document.createTextNode(item));

  const buttonElem = createButton("remove-item btn-link text-red");
  liElem.appendChild(buttonElem);

  document.querySelector(".items").appendChild(liElem);
}

function createButton(classes) {
  const buttonElem = document.createElement("button");
  buttonElem.className = classes;

  const iElem = createIcon("fa-solid fa-xmark");
  buttonElem.appendChild(iElem);

  return buttonElem;
}

function createIcon(classes) {
  const iElem = document.createElement("i");
  iElem.className = classes;
  return iElem;
}
// clean

createListItem("eggs");
createListItem2("Banana");
createListItem2("Sauce1");
