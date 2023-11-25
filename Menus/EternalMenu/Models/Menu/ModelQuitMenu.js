const { QuitMenu } = require('../../Controllers/Menu/QuitMenu');
const { ListModelOption } = require('../Option/ListModelOption');
const { InverseListModelOption } = require('../Option/InverseListModelOption');

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

module.exports.ModelQuitMenu = ModelQuitMenu;