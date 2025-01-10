const { faker } = require("@faker-js/faker/locale/id_ID");
const {
  verifyAddToCartButtonIsVisible,
  clickAddToCartButton,
  verifyProductAddedAlert,
} = require("../pageObjects/DetailProduct.js");
const {
  verifyProductIsVisible,
  verifyProductIsClickAble,
  verifyProductIsnotExist,
} = require("../pageObjects/HomePage.js");
const productList = require("../shared/productList.js");
const cyLoginStep = require("../shared/cyLoginStep.js");

describe("Product", () => {
  // ambil random product dari list
  const productName =
    productList[Math.floor(Math.random() * productList.length)];

  beforeEach(() => {
    cyLoginStep();
  });

  it("Product isn't exists", () => {
    verifyProductIsnotExist(faker.commerce.product());
  });

  it("Product is exists and ready to put in cart", () => {
    verifyProductIsVisible(productName);
    verifyProductIsClickAble(productName);
    verifyAddToCartButtonIsVisible();
    clickAddToCartButton();
    verifyProductAddedAlert();
  });
});
