const logo = document.querySelector("img");

function log(text) {
  document.querySelector("button").innerText = text;
}

function mouseClick() {
  log("mouse click");
}

function mouseDoubleClick() {
  log("mouse double click");
}

function mouseRightClick() {
  log("mouse right click");
}

logo.addEventListener("click", mouseClick);
logo.addEventListener("dblclick", mouseDoubleClick);
logo.addEventListener("contextmenu", mouseRightClick);

/**
 * click
 * dblclick
 * contextmenu
 * mousedown
 * mouseup
 * wheel
 * mouseover
 * mouseout
 * dragstart
 * drag
 * dragend
 */
