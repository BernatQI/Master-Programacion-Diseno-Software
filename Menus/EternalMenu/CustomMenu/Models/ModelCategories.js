class ModelCategories {

  #productsCategories;

  constructor(productsCategories) {
    this.#productsCategories = productsCategories;
  }

  getCategories() {
    return this.#productsCategories.map(productsCategories => Object.keys(productsCategories)[0]);
  }

  addCategory(category) {
    this.#productsCategories.push({ [category]: [] });

    console.log(`\nYou added "${category}" to "Categories" properly`);
  }

  removeCategory(category) {
    const categoryRemoved = this.#productsCategories.splice(category, 1);

    console.log(`\nYou removed "${Object.keys(categoryRemoved[0])}" from "Categories" properly`);
  }

}

module.exports.ModelCategories = ModelCategories;