const { faker } = require("@faker-js/faker/locale/id_ID");
const {
  goToHomePage,
  clickLogIn,
  verifyNavbarHaveUsername,
} = require("../pageObjects/HomePage.js");
const {
  inputUsername,
  inputPassword,
  clickLogInButton,
  verifyUserDoNotExistAlert,
  verifyFillUsernamePasswordAlert,
} = require("../pageObjects/LogInModal.js");
const users = require("../shared/users.js");

describe("Sign In", () => {
  beforeEach(() => {
    goToHomePage();
    clickLogIn();
  });

  it("Login with empty form", () => {
    clickLogInButton();
    verifyFillUsernamePasswordAlert();
  });

  it("Login with not existing data", () => {
    inputUsername(faker.internet.username());
    inputPassword("password");
    clickLogInButton();
    verifyUserDoNotExistAlert();
  });

  it("Login with existing data", () => {
    inputUsername(users[0].username);
    inputPassword(users[0].password);
    clickLogInButton();
    verifyNavbarHaveUsername(users[0].username);
  });
});
