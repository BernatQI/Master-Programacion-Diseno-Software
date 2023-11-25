const { Option } = require('../../Controllers/Option/Option');

class ModelOption extends Option {

  model;

  constructor(title, model) {
    super(title);
    this.model = model;
  }

  interact() { };

}

module.exports.ModelOption = ModelOption;
