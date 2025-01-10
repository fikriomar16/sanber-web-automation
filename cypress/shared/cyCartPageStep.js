const {
  verifyProductIsExists,
  verifyDeleteLinkisExists,
  verifyPlaceOrderButton,
  orderButtonClick,
  verifyOrderModalIsShown,
} = require("../pageObjects/CartPage.js");

const cyCartPageStep = () => {
  verifyProductIsExists();
  verifyDeleteLinkisExists();
  verifyPlaceOrderButton();
  orderButtonClick();
  verifyOrderModalIsShown();
};

module.exports = cyCartPageStep;
