const { DynamicMenu } = require('../../Controllers/Menu/DynamicMenu');

class ModelIterativeDynamicMenu extends DynamicMenu {

  #model;

  constructor(title, model) {
    super(title);
    this.#model = model;
  }

  interact() {
    this.addOptions();
    do {
      this.interact_();
    } while (!this.isExecutedQuitOption());
  }

}

module.exports.ModelIterativeDynamicMenu = ModelIterativeDynamicMenu;