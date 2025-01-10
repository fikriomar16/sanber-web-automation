const { navbar, display } = require("../locators/homeLocators.js");

class HomePage {
  goToHomePage() {
    cy.visit("https://www.demoblaze.com/");
  }

  clickSignUp() {
    cy.xpath(navbar.signUpUrl).click({ timeout: 2000 });
  }

  clickLogIn() {
    cy.xpath(navbar.logInUrl).click({ timeout: 2000 });
  }

  clickCart() {
    cy.xpath(navbar.cartUrl).click({ timeout: 2000 });
  }

  verifyNavbarHaveUsername(username) {
    cy.wait(4000);
    cy.xpath(navbar.username).should("have.text", `Welcome ${username}`, {
      timeout: 2000,
    });
  }

  verifyProductIsnotExist(productName) {
    cy.wait(1000);
    cy.xpath(display.productName(productName)).should("not.exist", {
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
