const clearBtn = document.querySelector("#clear");

function onclear() {
  console.log("event listener - btn clear clicked");
}

function removeclear() {
  clearBtn.removeEventListener("click", onclear);
}
// clearBtn.onclick = function () {
//   console.log("onclick - btn clicked");
// };

clearBtn.addEventListener("click", onclear);

setTimeout(() => {
  clearBtn.click();
}, 2000);

setTimeout(() => {
  removeclear();
  console.log("remove event listen");
}, 5000);

function clearItems0() {
  let parent = document.querySelector("ul");
  parent.innerHTML = "";
}

function clearItems1() {
  let parent = document.querySelector("ul");
  let items = parent.querySelectorAll("li");
  items.forEach((item) => {
    item.remove();
  });
}

function clearItems() {
  let parent = document.querySelector("ul");

  while (parent.firstElementChild) {
    parent.firstElementChild.remove();
  }
}

clearBtn.addEventListener("click", clearItems1);
