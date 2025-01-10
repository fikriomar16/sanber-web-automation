const {
  verifyProductIsExists,
  verifyDeleteLinkisExists,
  verifyPlaceOrderButton,
  verifyOrderModalIsShown,
  orderButtonClick,
} = require("../pageObjects/CartPage.js");
const { clickCart } = require("../pageObjects/HomePage.js");
const cyLoginStep = require("../shared/cyLoginStep.js");

describe("Cart", () => {
  beforeEach(() => {
    cyLoginStep();
    clickCart();
  });

  it("Product(s) is exists", () => {
    verifyProductIsExists();
    verifyDeleteLinkisExists();
    verifyPlaceOrderButton();
    orderButtonClick();
    verifyOrderModalIsShown();
  });
});
