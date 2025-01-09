const {
  verifyAddToCartButtonIsVisible,
  clickAddToCartButton,
  verifyProductAddedAlert,
} = require("../pageObjects/DetailProduct.js");
const {
  goToHomePage,
  verifyNavbarHaveUsername,
  verifyProductIsVisible,
  clickLogIn,
  verifyProductIsClickAble,
} = require("../pageObjects/HomePage.js");
const {
  inputUsername,
  inputPassword,
  clickLogInButton,
} = require("../pageObjects/LogInModal.js");
const users = require("../shared/users.js");

describe("Product", () => {
  const productList = [
    "Samsung galaxy s6",
    "Nokia lumia 1520",
    "Iphone 6 32gb",
    "Sony xperia z5",
    "Samsung galaxy s7",
  ];
  // ambil random product dari list
  const productName =
    productList[Math.floor(Math.random() * productList.length)];

  beforeEach(() => {
    goToHomePage();
    clickLogIn();
    inputUsername(users[0].username);
    inputPassword(users[0].password);
    clickLogInButton();
    verifyNavbarHaveUsername(users[0].username);
  });

  it("Product is exists and ready to put in cart", () => {
    verifyProductIsVisible(productName);
    verifyProductIsClickAble(productName);
    verifyAddToCartButtonIsVisible();
    clickAddToCartButton();
    verifyProductAddedAlert();
  });
});
