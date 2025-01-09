const { productRow, deleteLink } = require("../locators/cartLocator.js");

class CartPage {
  verifyProductIsExists() {
    cy.wait(1500);
    cy.xpath(productRow).should("be.visible", { timeout: 2000 });
    cy.xpath(productRow.length).should("be.gte", 1, { timeout: 2000 });
  }

  verifyDeleteLinkisExists() {
    cy.wait(1500);
    cy.xpath(deleteLink).should("be.visible", { timeout: 2000 });
    cy.xpath(deleteLink.length).should("be.gte", 1, { timeout: 2000 });
  }
}

module.exports = new CartPage();
