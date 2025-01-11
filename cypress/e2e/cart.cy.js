const {
  verifyProductIsExists,
  verifyDeleteLinkisExists,
  deleteProduct,
} = require("../pageObjects/CartPage.js");
const { clickCart } = require("../pageObjects/HomePage.js");
const cyAddProductStep = require("../shared/cyAddProductStep.js");
const cyCartPageStep = require("../shared/cyCartPageStep.js");
const cyLoginStep = require("../shared/cyLoginStep.js");

describe("Cart", () => {
  beforeEach(() => {
    cyLoginStep();
    cyAddProductStep();
    clickCart();
  });

  it("Product(s) is exists", () => {
    cyCartPageStep();
  });

  it("Can delete products", () => {
    verifyProductIsExists();
    verifyDeleteLinkisExists();
    deleteProduct();
  });
});
