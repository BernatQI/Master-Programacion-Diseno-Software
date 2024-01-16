class ModelProducts {

  #productsCategories;

  constructor(productsCategories) {
    this.#productsCategories = productsCategories;
  }

  getProducts(category) {
    const productsOfCategory = this.#productsCategories[category];

    return Object.values(productsOfCategory)[0];
  }

  addProduct(category, product) {
    this.#productsCategories[category][Object.keys(this.#productsCategories[category])].push(product);

    console.log(`\nYou added "${product}" to "${Object.keys(this.#productsCategories[category])}" properly`);
  }

  removeProduct(product, category) {
    const productRemoved = this.#productsCategories[category][Object.keys(this.#productsCategories[category])].splice(product, 1);

    console.log(`\nYou removed "${productRemoved}" from "${Object.keys(this.#productsCategories[category])}" properly`);
  }

}

module.exports.ModelProducts = ModelProducts;