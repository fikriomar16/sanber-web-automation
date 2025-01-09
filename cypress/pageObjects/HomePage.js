class HomePage {
  goToHomePage() {
    cy.visit("https://www.demoblaze.com/");
  }

  clickSignUp() {
    cy.xpath('//a[@id="signin2"]').click({ timeout: 5000 });
  }
}

module.exports = new HomePage();
