const { DynamicMenu } = require('../../Controllers/Menu/DynamicMenu');
const { RemoveModelOption } = require('../Option/RemoveModelOption');

class ModelDynamicMenu extends DynamicMenu {

  #model;

  constructor(model) {
    super("Model Dynamic Menu");
    this.#model = model;
  }

  addOptions() {
    for(let i=0; i< this.#model.size(); i++){
      this.add(new RemoveModelOption(this.#model, i));
    }
  }

}

module.exports.ModelDynamicMenu = ModelDynamicMenu;