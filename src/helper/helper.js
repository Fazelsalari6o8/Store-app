const shortenText = (text) => text.split(" ").slice(0, 3).join(" ");

const searchProducts = (products, searchText) => {
  if (!searchText) return products;

  const searchedProducts = products.filter((product) =>
    shortenText(product.title).toLowerCase().includes(searchText)
  );
  return searchedProducts;
};

const filterProducts = (products, category) => {
  if (!category || category === "all") return products;

  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  return filteredProducts;
};

export { shortenText, searchProducts, filterProducts };
