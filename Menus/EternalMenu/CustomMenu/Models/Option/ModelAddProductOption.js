const { ModelOption } = require('./ModelOption');
const { Option } = require('../../Controllers/Option/Option');
const { products } = require('../../data/products');

class ModelAddProductOption extends ModelOption {

  #model;
  #category;

  constructor(model, category) {
    super('Add Product', model);
    this.#model = model;
    this.#category = category;
  }

  interact() {
    console.log('\nAdd Product:');
    const product = this.askItem();

    this.#model.products.addProduct(this.#category, product);
  }

}

module.exports.ModelAddProductOption = ModelAddProductOption;