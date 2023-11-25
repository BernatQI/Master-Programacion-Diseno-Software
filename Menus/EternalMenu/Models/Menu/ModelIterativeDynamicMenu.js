const { DynamicMenu } = require('../../Controllers/Menu/DynamicMenu');
const { ListModelOption } = require('../Option/ListModelOption');
const { InverseListModelOption } = require('../Option/InverseListModelOption');
const { AddModelOption } = require('../Option/AddModelOption');
const { RemoveModelsOption } = require('../Option/RemoveModelsOption');

class ModelIterativeDynamicMenu extends DynamicMenu {

  #model;

  constructor(model) {
    super("Model Iterative Dynamic Menu");
    this.#model = model;
  }

  addOptions() {
    this.add(new ListModelOption(this.#model));
    this.add(new InverseListModelOption(this.#model));
    this.add(new AddModelOption(this.#model));
    this.add(new RemoveModelsOption(this.#model));
  }
  
}

module.exports.ModelIterativeDynamicMenu = ModelIterativeDynamicMenu;