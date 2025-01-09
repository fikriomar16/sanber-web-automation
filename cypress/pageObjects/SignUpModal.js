class SignUpModal {
  inputUsername(username) {
    cy.wait(2000);
    cy.xpath('//input[@id="sign-username"]').type(username, { timeout: 2000 });
    cy.xpath('//input[@id="sign-username"]').should("have.value", username, {
      timeout: 2000,
    });
  }

  inputPassword(password) {
    cy.wait(2000);
    cy.xpath('//input[@id="sign-password"]').type(password, { timeout: 2000 });
    cy.xpath('//input[@id="sign-password"]').should("have.value", password, {
      timeout: 2000,
    });
  }

  clickRegisterButton() {
    cy.xpath('//button[@onclick="register()"]').click({ timeout: 2000 });
  }

  verifyRegistrationSuccess() {
    cy.on("window:alert", (text) => {
      expect(text).to.eq("Sign up successful.");
    });
  }
}

module.exports = new SignUpModal();
