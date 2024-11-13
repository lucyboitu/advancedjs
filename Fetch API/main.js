const { fetchProducts } = require("./http");

import fetchProducts()
  .then((data) => {
    console.log("this is data", data);
  })
  .catch((error) => {
    console.error("this is error", error);
  });
