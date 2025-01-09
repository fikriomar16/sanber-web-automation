const { faker } = require("@faker-js/faker/locale/id_ID");
const {
  verifyAddToCartButtonIsVisible,
  clickAddToCartButton,
  verifyProductAddedAlert,
} = require("../pageObjects/DetailProduct.js");
const {
  verifyProductIsVisible,
  clickLogIn,
  verifyProductIsClickAble,
  verifyProductIsnotExist,
} = require("../pageObjects/HomePage.js");
const productList = require("../shared/productList.js");
const users = require("../shared/users.js");
const cyLoginStep = require("../shared/cyLoginStep.js");

describe("Product", () => {
  // ambil random product dari list
  const productName =
    productList[Math.floor(Math.random() * productList.length)];

  beforeEach(() => {
    cyLoginStep();
  });

  it("Product is exists and ready to put in cart", () => {
    verifyProductIsVisible(productName);
    verifyProductIsClickAble(productName);
    verifyAddToCartButtonIsVisible();
    clickAddToCartButton();
    verifyProductAddedAlert();
  });

  it("Product isn't exists", () => {
    verifyProductIsnotExist(faker.commerce.product());
  });
});
