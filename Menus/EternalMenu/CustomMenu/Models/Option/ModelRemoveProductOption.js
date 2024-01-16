const { ModelOption } = require('./ModelOption');
const { Option } = require('../../Controllers/Option/Option');

class ModelRemoveProductOption extends ModelOption {

  #model;
  #category;

  constructor(model, category) {
    super('Remove Product', model);
    this.#model = model;
    this.#category = category;
  }

  interact() {
    const categoryAndProducts = this.#model.products.getProducts(this.#category);
    this.listItems(categoryAndProducts);
    
    const product = this.chooseItem(categoryAndProducts);
    this.#model.products.removeProduct(product, this.#category);
  }

}

module.exports.ModelRemoveProductOption = ModelRemoveProductOption;