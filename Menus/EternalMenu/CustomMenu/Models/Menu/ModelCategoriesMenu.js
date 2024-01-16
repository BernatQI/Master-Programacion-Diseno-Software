const { IterativeMenu } = require("../../Controllers/Menu/IterativeMenu");
const { ModelAddCategoriesOption } = require('../Option/ModelAddCategoriesOption');
const { ModelRemoveCategoryOption } = require('../Option/ModelRemoveCategoryOption');
const { ModelListCategoriesOption } = require('../Option/ModelListCategoriesOption');
const { ModelProductsOption } = require('../Option/ModelProductsOption');

class ModelCategoriesMenu extends IterativeMenu {

  #model;

  constructor(model) {
    super("Categories Menu");
    this.#model = model;
  }

  addOptions() {
    this.add(new ModelListCategoriesOption(this.#model));
    this.add(new ModelAddCategoriesOption(this.#model));
    this.add(new ModelRemoveCategoryOption(this.#model));
    this.add(new ModelProductsOption(this.#model));
  }

}

module.exports.ModelCategoriesMenu = ModelCategoriesMenu;