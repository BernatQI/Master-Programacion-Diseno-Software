const { ModelOption } = require('./ModelOption');

class ModelListCategoriesOption extends ModelOption {

  #model;

  constructor(model) {
    super('List Categories', model);
    this.#model = model;
  }

  interact() {
    console.log('\nCategories list:');
    const categories = this.#model.categories.getCategories();
    this.listItems(categories);
  }

}

module.exports.ModelListCategoriesOption = ModelListCategoriesOption;