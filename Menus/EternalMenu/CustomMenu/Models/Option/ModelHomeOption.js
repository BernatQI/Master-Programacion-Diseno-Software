const { ModelOption } = require('./ModelOption.js');

class ModelHomeOption extends ModelOption {

  #model;

  constructor(model) {
    super('Home', model);
    this.#model = model;
  }

}

module.exports.ModelHomeOption = ModelHomeOption;