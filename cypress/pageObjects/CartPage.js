const {
  productRow,
  deleteLink,
  priceElement,
  orderModal,
  productOrder,
} = require("../locators/cartLocator.js");

class CartPage {
  verifyProductIsExists() {
    cy.wait(4000);
    cy.xpath(productRow).should("be.visible", { timeout: 3000 });
    cy.xpath(productRow.length).should("be.gte", 1, { timeout: 3000 });
  }

  verifyDeleteLinkisExists() {
    cy.wait(1500);
    cy.xpath(deleteLink).should("be.visible", { timeout: 2000 });
    cy.xpath(deleteLink.length).should("be.gte", 1, { timeout: 2000 });
  }

  verifyPriceIsExists() {
    cy.wait(1000);
    cy.xpath(priceElement).should("be.visible", { timeout: 2000 });
    cy.xpath(priceElement).should("not.eq", 0, { timeout: 2000 });
  }

  verifyPlaceOrderButton() {
    cy.wait(1000);
    cy.xpath(productOrder).should("be.visible", { timeout: 2000 });
  }

  orderButtonClick() {
    cy.wait(1000);
    cy.xpath(productOrder)
      .should("be.visible", { timeout: 2000 })
      .click({ timeout: 2000 });
  }

  verifyOrderModalIsShown() {
    cy.wait(2000);
    cy.xpath(orderModal).should("be.visible", { timeout: 2000 });
  }
}

module.exports = new CartPage();
