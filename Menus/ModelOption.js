const { Option } = require("./Option");
const { ModelDynamicMenu } = require("./ModelMenu");

class ModelOption extends Option {

  model;

  constructor(string, model) {
      super(string);
      this.model = model;
  }

  interact() {};

}

class ListModelOption extends ModelOption {

  constructor (model) {
      super("Listar", model);
  }

  interact() {
      for (let i = 0; i < this.model.size(); i++) {
          Option.console.writeln((i + 1) + ". " + this.model.get(i));
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
          Option.console.writeln((i + 1) + ". " + this.model.get(i));
      }
      Option.console.writeln();
  }

}

class AddModelOption extends ModelOption {

  constructor(model) {
      super("Añadir", model);
  }

  interact() {
      let string;
      do {
          string = Option.console.readString("Dame una cadena de caracteres: ");
      } while (string.trim() ==="");
      this.model.add(string.trim());
  }

}

class DuplicationModelOption extends ModelOption {

  constructor(model) {
      super("Añadir", model);
  }

  interact() {
      const SIZE = this.model.size();
      for(let i=0; i< SIZE; i++){
          this.model.add(this.model.get(i));
      }
  }

}

class RemoveModelsOption extends ModelOption {

  constructor(model) {
      super("Eliminar", model);
  }

  interact() {
      new ModelDynamicMenu(this.model).interact();
  }

}

class RemoveModelOption extends ModelOption {

  #index;
  #model;

  constructor(model, index) {
      super("Eliminar ", model);
      this.#model = model;
      this.#index = index;
  }

  getTitle() {
      return super.getTitle() + ": " + this.#model.get(this.#index);
  }

  interact() {
      this.#model.remove(this.#index);
  }

}

module.exports.ModelOption = ModelOption;
module.exports.ListModelOption = ListModelOption;
module.exports.InverseListModelOption = InverseListModelOption;
module.exports.AddModelOption = AddModelOption;
module.exports.DuplicationModelOption = DuplicationModelOption;
module.exports.RemoveModelsOption = RemoveModelsOption;
module.exports.RemoveModelOption = RemoveModelOption;