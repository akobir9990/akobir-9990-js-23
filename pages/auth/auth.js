const goBackHome = document.getElementById("goBackHome");
const enter = document.getElementById("enter");
const usr = document.getElementById("usr");
const paswd = document.getElementById("paswd");

goBackHome.addEventListener("click", () => {
  window.location.href = "../../index.html"; // Go back to index page when click on the button
});

enter.addEventListener("click", () => {
  if (usr.value === "akobir" && paswd.value === "9992") {
    window.location.href = "../admin/admin.html";
  } else {
    alert(`
    User: akobir;   Password:9992; terib koring qanii
    `);
    usr.value = "";
    paswd.value = "";
  }
});

function delProd(el) {
  let products = getLSList();
  let filtered = products.filter(item, item != item.id);
  console.log(filtered);
}
