const { Option } = require('../../Controllers/Option/Option');
const { ModelOption } = require('./ModelOption');

class InverseListModelOption extends ModelOption {

  constructor(model) {
    super("List inveerse", model);
  }

  interact() {
    for (let i = this.model.size() - 1; i >= 0; i--) {
      Option.console.writeln((i + 1) + '. ' + this.model.get(i));
    }
    Option.console.writeln();
  }

}

module.exports.InverseListModelOption = InverseListModelOption;