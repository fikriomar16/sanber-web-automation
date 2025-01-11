const { faker } = require("@faker-js/faker/locale/id_ID");
const { clickCart } = require("../pageObjects/HomePage.js");
const {
  verifyPurchaseButtonFooterIsExists,
  clickPurchaseButton,
  alertWithText,
  fillNameInput,
  fillCityInput,
  fillCreditCardInput,
  fillCountryInput,
  verifyPurchaseSuccessIsShown,
  verifyIsRedirectedToMainPage,
} = require("../pageObjects/PurchaseModal.js");
const cyAddProductStep = require("../shared/cyAddProductStep.js");
const cyCartPageStep = require("../shared/cyCartPageStep.js");
const cyLoginStep = require("../shared/cyLoginStep.js");

describe("Purchase", () => {
  beforeEach(() => {
    cyLoginStep();
    cyAddProductStep();
    clickCart();
    cyCartPageStep();
  });

  it("Submit purchase with empty form", () => {
    verifyPurchaseButtonFooterIsExists();
    clickPurchaseButton();
    alertWithText("Please fill out Name and Creditcard.");
  });

  it("Submit purchase with only name field", () => {
    fillNameInput(faker.person.fullName());
    verifyPurchaseButtonFooterIsExists();
    clickPurchaseButton();
    alertWithText("Please fill out Name and Creditcard.");
  });

  it("Submit purchase with name + country field", () => {
    fillNameInput(faker.person.fullName());
    fillCountryInput(faker.location.country());
    verifyPurchaseButtonFooterIsExists();
    clickPurchaseButton();
    alertWithText("Please fill out Name and Creditcard.");
  });

  it("Submit purchase with name + country + city field", () => {
    fillNameInput(faker.person.fullName());
    fillCountryInput(faker.location.country());
    fillCityInput(faker.location.city());
    verifyPurchaseButtonFooterIsExists();
    clickPurchaseButton();
    alertWithText("Please fill out Name and Creditcard.");
  });

  it("Submit purchase with name + country + city + credit card field", () => {
    fillNameInput(faker.person.fullName());
    fillCountryInput(faker.location.country());
    fillCityInput(faker.location.city());
    fillCreditCardInput(faker.finance.creditCardNumber("visa"));
    verifyPurchaseButtonFooterIsExists();
    clickPurchaseButton();
    verifyPurchaseSuccessIsShown();
    verifyIsRedirectedToMainPage();
  });
});
