const {
  closeModalButton,
  closeModalButtonFooter,
  purchaseButton,
  inputName,
  inputCity,
  inputCreditCard,
  inputCountry,
  puchaseSuccess,
} = require("../locators/purchaseLocators.js");

class PurchaseModal {
  alertWithText(alertText) {
    cy.wait(2000);
    cy.on("window:confirm", (text) => {
      expect(text).to.eq(alertText);
    });
  }

  verifyCloseModalButtonIsExists() {
    cy.wait(1000);
    cy.xpath(closeModalButton).should("be.visible", { timeout: 2000 });
  }

  verifyCloseModalButtonFooterIsExists() {
    cy.wait(1000);
    cy.xpath(closeModalButtonFooter).should("be.visible", { timeout: 2000 });
  }

  verifyPurchaseButtonFooterIsExists() {
    cy.wait(1000);
    cy.xpath(purchaseButton)
      .scrollIntoView({ timeout: 2000 })
      .should("be.visible", { timeout: 2000 });
  }

  clickPurchaseButton() {
    cy.wait(1000);
    cy.xpath(purchaseButton)
      .should("be.visible", { timeout: 2000 })
      .click({ timeout: 2000 });
  }

  fillNameInput(name) {
    cy.wait(1000);
    cy.xpath(inputName).type(name, { timeout: 2000 });
    cy.xpath(inputName).should("have.value", name, {
      timeout: 2000,
    });
  }

  fillCountryInput(country) {
    cy.wait(1000);
    cy.xpath(inputCountry).type(country, { timeout: 2000 });
    cy.xpath(inputCountry).should("have.value", country, {
      timeout: 2000,
    });
  }

  fillCityInput(city) {
    cy.wait(1000);
    cy.xpath(inputCity).type(city, { timeout: 2000 });
    cy.xpath(inputCity).should("have.value", city, {
      timeout: 2000,
    });
  }

  fillCreditCardInput(cc) {
    cy.wait(1000);
    cy.xpath(inputCreditCard).type(cc, { timeout: 2000 });
    cy.xpath(inputCreditCard).should("have.value", cc, {
      timeout: 2000,
    });
  }

  verifyPurchaseSuccessIsShown() {
    cy.wait(2000);
    cy.xpath(puchaseSuccess.modalWrapper).should("be.visible", {
      timeout: 2000,
    });
    cy.xpath(puchaseSuccess.button)
      .should("be.visible", { timeout: 2000 })
      .click({ timeout: 2000 });
  }

  verifyIsRedirectedToMainPage() {
    cy.wait(2000);
    cy.url().should("equal", "https://www.demoblaze.com/index.html");
  }
}

module.exports = new PurchaseModal();
