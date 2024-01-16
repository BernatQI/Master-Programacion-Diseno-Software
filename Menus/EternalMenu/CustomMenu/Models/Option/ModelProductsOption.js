const { ModelOption } = require('./ModelOption');
const { ModelProductsMenu } = require('../Menu/ModelProductsMenu');
const { Option } = require('../../Controllers/Option/Option');

class ModelProductsOption extends ModelOption {

  #model;

  constructor(model) {
    super('Products', model);
    this.#model = model;
  }

  interact() {
    console.log('\nChoose Category:');
    const categories = this.#model.categories.getCategories();
    this.listItems(categories);

    const category = this.chooseItem(categories);

    new ModelProductsMenu(this.#model, category).interact();
  }

}

module.exports.ModelProductsOption = ModelProductsOption;