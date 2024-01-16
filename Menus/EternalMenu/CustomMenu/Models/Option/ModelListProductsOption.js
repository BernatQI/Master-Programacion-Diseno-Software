const { ModelOption } = require('./ModelOption');

class ModelListProductsOption extends ModelOption {

  #model;
  #category;

  constructor(model, category) {
    super('List Products', model);
    this.#model = model;
    this.#category = category;
  }

  interact() {
    console.log('\nList Products:');
    const categoryAndProducts = this.#model.products.getProducts(this.#category);
    this.listItems(categoryAndProducts);
  }

}

module.exports.ModelListProductsOption = ModelListProductsOption;