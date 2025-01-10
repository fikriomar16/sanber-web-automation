const {
  usernameInput,
  passwordInput,
  signUpButton,
} = require("../locators/signUpLocators.js");

class SignUpModal {
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

  clickRegisterButton() {
    cy.xpath(signUpButton).click({ timeout: 2000 });
  }

  verifyRegistrationSuccess() {
    cy.wait(2000);
    cy.on("window:confirm", (text) => {
      expect(text).to.eq("Sign up successful.");
    });
  }

  verifyRegistrationFailed() {
    cy.wait(2000);
    cy.on("window:confirm", (text) => {
      expect(text).to.eq("This user already exist.");
    });
  }

  verifyFillUsernamePasswordAlert() {
    cy.wait(2000);
    cy.on("window:confirm", (text) => {
      expect(text).to.eq("Please fill out Username and Password.");
    });
  }
}

module.exports = new SignUpModal();
