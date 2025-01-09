module.exports = {
  navbar: {
    logInUrl: '//a[@id="login2"]',
    signUpUrl: '//a[@id="signin2"]',
    username: '//a[@id="nameofuser"]',
    cartUrl: '//a[@id="cartur"]',
  },
  display: {
    productName: (productName) => {
      return `//a[contains(@class,'hrefch') and contains(text(),'${productName}')]`;
    },
  },
};
