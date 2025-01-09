const { navbar, display } = require("../locators/homeLocators.js");
const { logInUrl } = require("../locators/logInLocators.js");
const { signUpUrl } = require("../locators/signUpLocators.js");

class HomePage {
  goToHomePage() {
    cy.visit("https://www.demoblaze.com/");
  }

  clickSignUp() {
    cy.xpath(signUpUrl).click({ timeout: 2000 });
  }

  clickLogIn() {
    cy.xpath(logInUrl).click({ timeout: 2000 });
  }

  verifyNavbarHaveUsername(username) {
    cy.wait(2000);
    cy.xpath(navbar.username).should("have.text", `Welcome ${username}`, {
      timeout: 2000,
    });
  }

  verifyProductIsVisible(productName) {
    cy.wait(1000);
    cy.xpath(display.productName(productName)).should("be.visible", {
      timeout: 2000,
    });
  }

  verifyProductIsClickAble(productName) {
    cy.xpath(display.productName(productName))
      .should("have.text", productName, {
        timeout: 2000,
      })
      .click({ timeout: 2000 });
  }
}

module.exports = new HomePage();
