const { Option } = require('../../Controllers/Option/Option');

class ModelOption extends Option {

  #model;

  constructor(title, model) {
    super(title);
    this.#model = model;
  }

  interact() {}

  listItems(items) {
    if(items.length == 0) {
      console.log('No items');
    }else{
      items.forEach((item, i) => {
        console.log(`${i + 1}. ${item}`);
      });
    }
  }

  chooseItem(items) {
    let item;
    do {
      item = Option.console.readNumber(`Give me a number s: [1-${items.length + 1}]: `);
    } while (1 > item || item > items.length + 1);
    return item - 1;
  }

  askItem() {
    let item;
    do {
      item = Option.console.readString('Give me a chain of characters: ');
    } while (item.trim() === '');

    return item.trim();
  }

}

module.exports.ModelOption = ModelOption;