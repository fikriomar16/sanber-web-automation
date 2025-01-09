module.exports = {
  navbar: {
    username: '//a[@id="nameofuser"]',
  },
  display: {
    productName: (productName) => {
      return `//a[contains(@class,'hrefch') and contains(text(),'${productName}')]`;
    },
  },
};
