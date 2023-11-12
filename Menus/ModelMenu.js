const { Menu, QuitMenu, IterativeMenu, DynamicMenu } = require('./Menu.js');
const { ListModelOption, InverseListModelOption, AddModelOption, RemoveModelOption, RemoveModelsOption } = require('./ModelOption.js');

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

class ModelQuitMenu extends QuitMenu {

  #model;

  constructor(model) {
      super("Model Quit Menu");
      this.#model = model;
  }

  addOptions() {
      this.add(new ListModelOption(this.#model));
      this.add(new InverseListModelOption(this.#model));
  }

}

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

class ModelDynamicMenu extends DynamicMenu {

  #model;

  constructor(model) {
      super("Model Dynamic Menu");
      this.#model = model;
  }

  addOptions() {
      for (let i = 0; i < this.#model.size(); i++) {
          this.add(new RemoveModelOption(this.#model, i));
      }
  }

}

class ModelIterativeDynamicMenu extends IterativeMenu {

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

module.exports.ModelMenu = ModelMenu;
module.exports.ModelQuitMenu = ModelQuitMenu;
module.exports.ModelIterativeMenu = ModelIterativeMenu;
module.exports.ModelDynamicMenu = ModelDynamicMenu;
module.exports.ModelIterativeDynamicMenu = ModelIterativeDynamicMenu;