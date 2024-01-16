const { ModelOption } = require('./ModelOption');
const { Option } = require('../../Controllers/Option/Option');

class ModelAddCategoriesOption extends ModelOption {

  #model;

  constructor(model) {
    super('Add Category', model);
    this.#model = model;
  }

  interact() {
    console.log('\nAdd Category:');
    const category = this.askItem();
    this.#model.categories.addCategory(category);
  }

}

module.exports.ModelAddCategoriesOption = ModelAddCategoriesOption;