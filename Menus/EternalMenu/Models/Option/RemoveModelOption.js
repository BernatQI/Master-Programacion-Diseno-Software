const { ModelOption } = require('./ModelOption');
const { ModelDynamicMenu } = require('../Menu/ModelDynamicMenu');

class RemoveModelOption extends ModelOption {

  constructor(model) {
    super('Remove', model);
  }

  interact() {
    new ModelDynamicMenu(this.model).interact();
  }

}

module.exports.RemoveModelOption = RemoveModelOption;