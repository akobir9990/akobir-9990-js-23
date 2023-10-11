const prod = document.getElementById("prod");
const goAdmin = document.getElementById("goAdmin");

goAdmin.addEventListener("click", () => {
  window.location.href = "/pages/auth/auth.html";
});

function getLSList() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}
function getBasket() {
  return localStorage.getItem("basket")
    ? JSON.parse(localStorage.getItem("basket"))
    : [];
}

window.addEventListener("DOMContentLoaded", () => {
  let produscts = getLSList();
  let display = produscts
    .map((item) => {
      return `
    <div class="product" data-id="${item.id}">
    <div class="">
    <div class="img">
    <img src="" alt="" />
    </div>
    <h1>${item.name}</h1>
    <p>${item.info}</p>
    <p>${item.price}</p>
    </div>
    <div class="">
    <button id="addToBasket">add to basket</button>
    <button id="like">like</button>
    </div>
    </div>
    `;
    })
    .join("");
  prod.innerHTML = display;
});

// addToBasket.addEventListener("click", (el) => {
//   let id = el.getAtribute("data-id");
//   console.log(id);
// });

const addToBasket = document.getElementById("addToBasket");

console.log("addToBasket = " + addToBasket);
