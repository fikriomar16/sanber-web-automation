module.exports = {
  closeModalButton: "//button[@class='close']",
  closeModalButtonFooter:
    "//button[contains(@class,'btn-secondary') and contains(text(),'Close')]",
  puchaseTotal: "//label[@id='totalm' anc contains(text(),'Total: ')]",
  inputName: "//input[@id='name']",
  inputCountry: "//input[@id='country']",
  inputCity: "//input[@id='city']",
  inputCreditCard: "//input[@id='card']",
  inputMonth: "//input[@id='month']",
  inputYear: "//input[@id='year']",
  purchaseButton:
    "//button[@onclick='purchaseOrder()' and contains(text(),'Purchase')]",
  puchaseSuccess: {
    modalWrapper:
      "//div[contains(@class,'sweet-alert') and contains(@class,'showSweetAlert') and contains(@class,'visible')]",
    button:
      "//button[contains(@class,'confirm') and contains(@class,'btn') and contains(text(),'OK')]",
  },
};
