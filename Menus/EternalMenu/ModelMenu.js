const { Menu } = require('./Menu');
const { Option } = require('./Option');

class ModelMenu extends Menu {

  #model;

  constructor(model) {
    super("Model Menu");
    this.#model = model;
  }

  addOptions() {
    
  }

}

class ModelQuitMenu extends QuitMenu {}

class ModelIterativeMenu extends IterativeMenu {}

class ModelIterativeDynamicMenu extends DynamicMenu {}

module.exports.ModelMenu = ModelMenu;
module.exports.ModelQuitMenu = ModelQuitMenu;
module.exports.ModelIterativeMenu = ModelIterativeMenu;
module.exports.ModelIterativeDynamicMenu = ModelIterativeDynamicMenu;