const { ModelIterativeDynamicMenu } = require('./ModelIterativeDynamicMenu');
const { ModelAddProductOption } = require('../Option/ModelAddProductOption');
const { ModelRemoveProductOption } = require('../Option/ModelRemoveProductOption');
const { ModelListProductsOption } = require('../Option/ModelListProductsOption');

class ModelProductsMenu extends ModelIterativeDynamicMenu {

  #model;
  #category;

  constructor(model, category) {
    super("Products Menu");
    this.#model = model;
    this.#category = category;
  }

  addOptions() {

    this.add(new ModelListProductsOption(this.#model, this.#category));
    this.add(new ModelAddProductOption(this.#model, this.#category));
    this.add(new ModelRemoveProductOption(this.#model, this.#category));
  }

}

module.exports.ModelProductsMenu = ModelProductsMenu;