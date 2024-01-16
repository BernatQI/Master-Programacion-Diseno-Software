const { products } = require('../data/products.js');
const { ModelProducts } = require('./ModelProducts.js');
const { ModelCategories } = require('./ModelCategories.js');

class Model {

  #productsCategories;
  static products
  static categories

  constructor() {
    this.#productsCategories = products;
    this.products = new ModelProducts(this.#productsCategories);
    this.categories = new ModelCategories(this.#productsCategories);
  }

}

module.exports.Model = Model;