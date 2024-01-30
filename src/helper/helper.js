const shortenText = (text) => text.split(" ").slice(0, 3).join(" ");

const searchProducts = (products, searchText) => {
  if (!searchText) return products;

  const searchedProducts = products.filter((product) =>
    shortenText(product.title).toLowerCase().includes(searchText)
  );
  return searchedProducts;
};

const filterProducts = (products, category) => {
  if (!category) return products;

  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  return filteredProducts;
};

const createQueryObject = (currentQuery, newQuery) => {
  if (newQuery.category === "all") {
    const { category, ...rest } = currentQuery;
    return rest;
  }

  if (newQuery.search === "") {
    const { search, ...rest } = currentQuery;
    return rest;
  }

  return { ...currentQuery, ...newQuery };
};

export { shortenText, searchProducts, filterProducts, createQueryObject };
