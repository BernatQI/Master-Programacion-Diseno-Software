const { Option } = require('../../Controllers/Option/Option');
const { ModelOption } = require('./ModelOption');

class AddModelOption extends ModelOption {

  constructor(model) {
    super("Add", model);
  }

  interact() {
    let option;
    do {
      option = Option.console.readString('Give me a chain of characters: ');
    } while (option.trim() === '');
    this.model.add(option.trim());
  }

}

module.exports.AddModelOption = AddModelOption;