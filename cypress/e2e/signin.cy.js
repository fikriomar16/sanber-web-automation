const { faker } = require("@faker-js/faker/locale/id_ID");
const {
  goToHomePage,
  clickLogIn,
  verifyNavbarHaveUsername,
} = require("../pageObjects/homePage.js");
const {
  inputUsername,
  inputPassword,
  clickLogInButton,
  verifyUserDoNotExistAlert,
  verifyFillUsernamePasswordAlert,
} = require("../pageObjects/LogInModal.js");

describe("Sign In", () => {
  const user = {
    username: "Sherly83",
    password: "password",
  };
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
    inputUsername(user.username);
    inputPassword(user.password);
    clickLogInButton();
    verifyNavbarHaveUsername(user.username);
  });
});
