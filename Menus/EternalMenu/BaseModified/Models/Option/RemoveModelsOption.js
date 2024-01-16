const { ModelOption } = require('./ModelOption');
const { ModelDynamicMenu } = require('../Menu/ModelDynamicMenu');

class RemoveModelsOption extends ModelOption {

  constructor(model) {
    super('Remove', model);
  }

  interact() {
    new ModelDynamicMenu(this.model).interact();
  }

}

module.exports.RemoveModelsOption = RemoveModelsOption;