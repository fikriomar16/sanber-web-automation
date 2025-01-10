const {
  usernameInput,
  passwordInput,
  logInButton,
} = require("../locators/logInLocators.js");

class LogInModal {
  inputUsername(username) {
    cy.wait(1000);
    cy.xpath(usernameInput).type(username, { timeout: 2000 });
    cy.xpath(usernameInput).should("have.value", username, {
      timeout: 2000,
    });
  }

  inputPassword(password) {
    cy.wait(1000);
    cy.xpath(passwordInput).type(password, { timeout: 2000 });
    cy.xpath(passwordInput).should("have.value", password, {
      timeout: 2000,
    });
  }

  clickLogInButton() {
    cy.xpath(logInButton).click({ timeout: 2000 });
  }

  verifyUserDoNotExistAlert() {
    cy.wait(2000);
    cy.on("window:confirm", (text) => {
      expect(text).to.eq("User does not exist.");
    });
  }

  verifyFillUsernamePasswordAlert() {
    cy.wait(2000);
    cy.on("window:confirm", (text) => {
      expect(text).to.eq("Please fill out Username and Password.");
    });
  }
}

module.exports = new LogInModal();
