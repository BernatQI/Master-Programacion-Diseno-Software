const { Option } = require('../../Controllers/Option/Option');
const { ModelOption } = require('./ModelOption');

class ListModelOption extends ModelOption {

  constructor(model) {
    super("List", model);
  }

  interact() {
    for (let i = 0; i < this.model.size(); i++) {
      Option.console.writeln((i + 1) + '. ' + this.model.get(i));
    }
    Option.console.writeln();
  }

}

module.exports.ListModelOption = ListModelOption;