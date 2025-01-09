const { faker } = require("@faker-js/faker/locale/id_ID");
const { goToHomePage, clickSignUp } = require("../pageObjects/homePage.js");
const {
  inputUsername,
  inputPassword,
  clickRegisterButton,
  verifyRegistrationSuccess,
  verifyRegistrationFailed,
  verifyFillUsernamePasswordAlert,
} = require("../pageObjects/SignUpModal.js");
const users = require("../shared/users.js");

describe("Sign Up", () => {
  beforeEach(() => {
    goToHomePage();
    clickSignUp();
  });
  const user = { username: faker.internet.username(), password: "password" };

  it("Register with empty form", () => {
    clickRegisterButton();
    verifyFillUsernamePasswordAlert();
  });

  it("Register with new data", () => {
    inputUsername(user.username);
    inputPassword(user.password);
    clickRegisterButton();
    verifyRegistrationSuccess();
    // reusable variables
    users.push(user);
  });

  it("Register with registered data", () => {
    inputUsername(users[0].username);
    inputPassword(users[0].password);
    clickRegisterButton();
    verifyRegistrationFailed();
  });
});
