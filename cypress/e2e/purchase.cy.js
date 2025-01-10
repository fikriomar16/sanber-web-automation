const { clickCart } = require("../pageObjects/HomePage.js");
const {
  verifyPurchaseButtonFooterIsExists,
  clickPurchaseButton,
  emptyFormShowingAlert,
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
    emptyFormShowingAlert();
  });
});
