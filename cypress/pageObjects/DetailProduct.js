const { addToChartButton } = require("../locators/productLocators.js");

class DetailProduct {
  verifyAddToCartButtonIsVisible() {
    cy.wait(1500);
    cy.xpath(addToChartButton).should("be.visible", { timeout: 2000 });
  }
  clickAddToCartButton() {
    cy.xpath(addToChartButton)
      .should("not.be.hidden", { timeout: 2000 })
      .click({ timeout: 2000 });
  }
  verifyProductAddedAlert() {
    cy.wait(2000);
    cy.on("window:confirm", (text) => {
      expect(text).to.eq("Product added.");
    });
  }
}

module.exports = new DetailProduct();
