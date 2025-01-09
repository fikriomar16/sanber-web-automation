const {
  goToHomePage,
  clickLogIn,
  verifyNavbarHaveUsername,
} = require("../pageObjects/HomePage.js");
const {
  inputUsername,
  inputPassword,
  clickLogInButton,
} = require("../pageObjects/LogInModal.js");
const users = require("./users.js");

const cyLoginStep = () => {
  goToHomePage();
  clickLogIn();
  inputUsername(users[0].username);
  inputPassword(users[0].password);
  clickLogInButton();
  verifyNavbarHaveUsername(users[0].username);
};

module.exports = cyLoginStep;
