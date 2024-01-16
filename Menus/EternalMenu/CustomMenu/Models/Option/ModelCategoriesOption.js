const { ModelOption } = require('./ModelOption.js');
const { ModelCategoriesMenu } = require('../Menu/ModelCategoriesMenu.js');

class ModelCategoriesOption extends ModelOption {

  #model;

  constructor(model) {
    super('Categories', model);
    this.#model = model;
  }

  interact() {
    new ModelCategoriesMenu(this.#model).interact();
  }

}

module.exports.ModelCategoriesOption = ModelCategoriesOption;