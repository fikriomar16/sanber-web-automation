const {
  closeModalButton,
  closeModalButtonFooter,
  purchaseButton,
} = require("../locators/purchaseLocators.js");

class PurchaseModal {
  emptyFormShowingAlert() {
    cy.wait(2000);
    cy.on("window:confirm", (text) => {
      expect(text).to.eq("Please fill out Name and Creditcard.");
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
}

module.exports = new PurchaseModal();
