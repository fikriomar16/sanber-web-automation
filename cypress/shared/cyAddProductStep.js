const {
  verifyAddToCartButtonIsVisible,
  clickAddToCartButton,
  verifyProductAddedAlert,
} = require("../pageObjects/DetailProduct.js");
const {
  verifyProductIsVisible,
  verifyProductIsClickAble,
} = require("../pageObjects/HomePage.js");
const productList = require("./productList.js");

/**
 * Add Product
 * @param {String} productName
 */
const cyAddProductStep = () => {
  // ambil random product dari list
  const productName =
    productList[Math.floor(Math.random() * productList.length)];

  verifyProductIsVisible(productName);
  verifyProductIsClickAble(productName);
  verifyAddToCartButtonIsVisible();
  clickAddToCartButton();
  verifyProductAddedAlert();
};

module.exports = cyAddProductStep;
