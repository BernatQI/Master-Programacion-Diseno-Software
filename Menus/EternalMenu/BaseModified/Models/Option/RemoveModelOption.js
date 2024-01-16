const { ModelOption } = require('./ModelOption');

class RemoveModelOption extends ModelOption {

  #index;
  #model;

  constructor(model, index) {
    super('Remove', model);
    this.#index = index;
    this.#model = model;
  }

  getTitle() {
    return super.getTitle() + ': ' + this.#model.get(this.#index);
  }

  interact() {
    this.#model.remove(this.index);
  }
  
}

module.exports.RemoveModelOption = RemoveModelOption;