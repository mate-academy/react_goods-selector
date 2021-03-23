function formatTitle(product, flagOfResetting) {
  const singleProduct = (product.length === 1);
  let someProducts;

  if (product && !flagOfResetting) {
    someProducts = singleProduct
      ? `${product} is selected`
      : `${product.join(', ')} are selected`;
  } else {
    someProducts = [];
  }

  return someProducts;
}

export default formatTitle;
