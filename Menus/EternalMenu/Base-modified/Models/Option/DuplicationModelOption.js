const { ModelOption } = require('./ModelOption');

class DuplicationModelOption extends ModelOption {

  constructor(model) {
    super('Duplicate', model);
  }

  interact() {
    const SIZE = this.model.size();
    for (let i = 0; i < SIZE; i++) {
      this.model.add(this.model.get(i));
    }
  }

}

module.exports.DuplicationModelOption = DuplicationModelOption;