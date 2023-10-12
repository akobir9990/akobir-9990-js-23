function delProd(el) {
  let products = getLSList();
  let filtered = products.filter(item, item != item.id);
  console.log(filtered);
}
