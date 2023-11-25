const { IterativeMenu } = require('../../Controllers/Menu/IterativeMenu');
const { ListModelOption } = require('../Option/ListModelOption');
const { InverseListModelOption } = require('../Option/InverseListModelOption');

class ModelIterativeMenu extends IterativeMenu {

  #model;

  constructor(model) {
    super("Model Iterative Menu");
    this.#model = model;
  }

  addOptions() {
    this.add(new ListModelOption(this.#model));
    this.add(new InverseListModelOption(this.#model));
  }

}

module.exports.ModelIterativeMenu = ModelIterativeMenu;