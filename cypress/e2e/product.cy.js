const { faker } = require("@faker-js/faker/locale/id_ID");
const { verifyProductIsnotExist } = require("../pageObjects/HomePage.js");
const cyLoginStep = require("../shared/cyLoginStep.js");
const cyAddProductStep = require("../shared/cyAddProductStep.js");

describe("Product", () => {
  beforeEach(() => {
    cyLoginStep();
  });

  it("Product isn't exists", () => {
    verifyProductIsnotExist(faker.commerce.product());
  });

  it("Product is exists and ready to put in cart", () => {
    cyAddProductStep();
  });

  it("Can add another product", () => {
    cyAddProductStep();
  });
});
