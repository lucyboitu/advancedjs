export const fetchProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products/");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error Fwtchinf Products", error);
    throw error;
  }
};
//module.exports{fetchProducts}
