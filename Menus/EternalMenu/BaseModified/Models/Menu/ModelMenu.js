const { Menu } = require('../../Controllers/Menu/Menu');
const { ListModelOption } = require('../Option/ListModelOption');
const { InverseListModelOption } = require('../Option/InverseListModelOption');

class ModelMenu extends Menu {

  #model;

  constructor(model) {
    super("Model Menu");
    this.#model = model;
  }

  addOptions() {
    this.add(new ListModelOption(this.#model));
    this.add(new InverseListModelOption(this.#model));
  }

}

module.exports.ModelMenu = ModelMenu;