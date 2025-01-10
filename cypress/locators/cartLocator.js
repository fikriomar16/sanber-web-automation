module.exports = {
  productRow: "//tbody[@id='tbodyid']/tr[contains(@class, 'success')]",
  deleteLink:
    "//a[contains(@onclick,'deleteItem') and contains(text(),'Delete')]",
  priceElement: "//h3[@id='totalp']",
  productOrder:
    "//button[contains(@class,'btn') and contains(text(),'Place Order')]",
  orderModal: "//div[@id='orderModal']",
};
