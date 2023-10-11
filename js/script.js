const admin = document.getElementById("admin");
const addNewProd = document.getElementById("addNewProd");
const prodName = document.getElementById("prodName");
const prodInfo = document.getElementById("prodInfo");
const prodPrice = document.getElementById("prodPrice");
const backToHome = document.getElementById("backToHome");

const allList = document.getElementById("allList");
const ed = document.getElementById("ed");

backToHome.addEventListener("click", () => {
  window.location.href = "../index.html";
});

// admin.addEventListener("click", () => {
//   window.location.href = "../pages/admin.html";
// });

function getLSList() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

function addToTheList(name, info, price) {
  let prod = {
    name: name,
    info: info,
    price: price,
  };
  let products = getLSList();
  products.push(prod);
  localStorage.setItem("list", JSON.stringify(products));
}

addNewProd.addEventListener("click", () => {
  addToTheList(prodName.value, prodInfo.value, prodPrice.value);
  prodName.value = "";
  prodInfo.value = "";
  prodPrice.value = "";
  location.reload(true);
});

window.addEventListener("DOMContentLoaded", () => {
  let produscts = getLSList();
  let display = produscts
    .map((item) => {
      return `
        <div id="item" data-id="${item.id}">
         <div class="item_text">
            <div class="img">
              <img src="" alt="" />
            </div>
            <h1>${item.name}</h1>
            <p>${item.info}</p>
            <p>${item.price}</p>
         </div>
          <div class="item_btns">
            <button id="ed">ed</button>
            <button id="del">del</button>
          </div>
        </div>
    `;
    })
    .join("");
  allList.innerHTML = display;
});
