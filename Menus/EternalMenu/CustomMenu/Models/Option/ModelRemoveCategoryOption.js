const { ModelOption } = require('./ModelOption');
const { Option } = require('../../Controllers/Option/Option');

class ModelRemoveCategoryOption extends ModelOption {

  #model;

  constructor(model) {
    super('Remove Category', model);
    this.#model = model;
  }

  interact() {
    console.log('\nRemove Category:');
    const categories = this.#model.categories.getCategories();
    this.listItems(categories);

    const category = this.chooseItem(categories);
    this.#model.categories.removeCategory(category);
  }

}

module.exports.ModelRemoveCategoryOption = ModelRemoveCategoryOption;