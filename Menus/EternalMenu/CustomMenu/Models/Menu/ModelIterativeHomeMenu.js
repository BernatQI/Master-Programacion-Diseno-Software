const { IterativeMenu } = require("../../Controllers/Menu/IterativeMenu");
const { ModelHomeOption } = require("../Option/ModelHomeOption");
const { ModelCategoriesOption } = require("../Option/ModelCategoriesOption");

class ModelIterativeHomeMenu extends IterativeMenu {

  #model;

  constructor(model) {
    super("Home Menu");
    this.#model = model;
  }

  addOptions() {
    this.add(new ModelHomeOption(this.#model));
    this.add(new ModelCategoriesOption(this.#model));
  }

}

module.exports.ModelIterativeHomeMenu = ModelIterativeHomeMenu;