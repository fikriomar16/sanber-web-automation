const { faker } = require("@faker-js/faker/locale/id_ID");
const { goToHomePage, clickSignUp } = require("../pageObjects/homePage.js");
const {
  inputUsername,
  inputPassword,
  clickRegisterButton,
  verifyRegistrationSuccess,
} = require("../pageObjects/SignUpModal.js");

describe("Sign Up", () => {
  let username;
  beforeEach(() => {
    goToHomePage();
    clickSignUp();
  });
  afterEach(() => {
    clickRegisterButton();
    verifyRegistrationSuccess();
  });

  it("Register with new data", () => {
    username = faker.internet.username();
    inputUsername(username);
    inputPassword("password");
  });

  it("Register with registered data", () => {
    inputUsername(username);
    inputPassword("password");
  });
});
