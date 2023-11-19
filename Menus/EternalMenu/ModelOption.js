const { Option } = require('./Option');
const { ModelDynamicMenu } = require('./ModelDynamicMenu');

class ModelOption extends Option {

  model;

  constructor(title, model) {
    super(title);
    this.model = model;
  }

  interact() { };

}

class ListModelOption extends ModelOption {

  constructor(model) {
    super("Listar", model);
  }

  interact() {
    for (let i = 0; i < this.model.size(); i++) {
      Option.console.writeln((i + 1) + '. ' + this.model.get(i));
    }
    Option.console.writeln();
  }
}

class InverseListModelOption extends ModelOption {

  constructor(model) {
    super("Listar inverso", model);
  }

  interact() {
    for (let i = this.model.size() - 1; i >= 0; i--) {
      Option.console.writeln((i + 1) + '. ' + this.model.get(i));
    }
    Option.console.writeln();
  }
}

class AddModelOption extends ModelOption { }

class RemoveModelOption extends ModelOption { }

class RemoveModelsOption extends ModelOption { }

module.exports.ModelOption = ModelOption;
module.exports.ListModelOption = ListModelOption;
module.exports.InverseListModelOption = InverseListModelOption;
module.exports.AddModelOption = AddModelOption;
module.exports.RemoveModelOption = RemoveModelOption;
module.exports.RemoveModelsOption = RemoveModelsOption;
